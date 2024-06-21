// src/RedirectToGitHub.js
import { useEffect, useRef } from "react";
import axios from "axios";
import { db, timestamp } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const VisitorsDetails = () => {
  const dataSavedRef = useRef(false);

  const fetchDataAndSave = async () => {
    try {
      // Fetch IP address
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      const ip = ipResponse.data.ip;

      // Fetch location data based on IP
      const locationResponse = await axios.get(`https://ipapi.co/${ip}/json/`);
      const location = locationResponse.data;

      const userAgent = navigator.userAgent;
      const referrer = document.referrer || "Direct";

      // Create a Date object
      const now = new Date();

      // Format the date and time
      const formattedDateTime = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "long", // Get the month name (e.g., "January")
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Include AM/PM
      });

      const userDetails = {
        ip,
        city: location.city,
        region: location.region,
        country_name: location.country_name,
        postal: location.postal,
        userAgent,
        referrer,
        timestamp,
        dateTime: formattedDateTime,
      };

      // Store user details in Firebase
      await addDoc(collection(db, "Portfolio_Visitors"), userDetails);

      // Update dataSavedRef to indicate data has been saved for this visit
      dataSavedRef.current = true;

      // Call serverless function to send email
      await axios.post("/.netlify/functions/send-visitor-details", userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (!dataSavedRef.current) {
      fetchDataAndSave();
    }
    // eslint-disable-next-line
  }, []);

  return "";
};

export default VisitorsDetails;
