// src/RedirectToGitHub.js
import { useEffect, useRef } from "react";
import axios from "axios";
import { db, timestamp } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const RedirectToGitHub = () => {
  const dataSavedRef = useRef(false);

  const fetchDataAndSave = async (latitude, longitude, ip, locationData) => {
    try {
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
        ip: ip || null,
        city: locationData?.address?.city || null,
        region: locationData?.address?.state || null,
        country_name: locationData?.address?.country || null,
        postal: locationData?.address?.postcode || null,
        userAgent,
        referrer,
        timestamp,
        dateTime: formattedDateTime,
        latitude,
        longitude,
      };
      await addDoc(collection(db, "Portfolio_Visitors"), userDetails);
      dataSavedRef.current = true;
      await axios.post("/.netlify/functions/send-visitor-details", userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const getLocation = (ip) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => showPosition(position, ip),
        (error) => handleGeolocationError(error, ip)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      fetchLocationFromIP(ip);
    }
  };

  const showPosition = async (position, ip) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    try {
      const locationResponse = await axios.get(
        `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=6675a9d07ccb8304599055kqj33bc90`
      );
      const locationData = locationResponse.data;

      fetchDataAndSave(latitude, longitude, ip, locationData);
    } catch (error) {
      console.error("Error fetching location data from coordinates:", error);
      fetchLocationFromIP(ip);
    }
  };

  const handleGeolocationError = (error, ip) => {
    console.error("Error getting geolocation:", error);
    fetchLocationFromIP(ip);
  };

  const fetchLocationFromIP = async (ip) => {
    try {
      // Fetch location data based on IP
      const locationResponse = await axios.get(`https://ipapi.co/${ip}/json/`);
      const locationData = locationResponse.data;

      fetchDataAndSave(null, null, ip, locationData);
    } catch (error) {
      console.error("Error fetching location data from IP:", error);
      fetchDataAndSave(null, null, ip, {});
    }
  };

  const fetchIPAndLocation = async () => {
    try {
      // Fetch IP address
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      const ip = ipResponse.data.ip;

      getLocation(ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  useEffect(() => {
    if (!dataSavedRef.current) {
      fetchIPAndLocation();
    }
    // eslint-disable-next-line
  }, []);

  return "";
};

export default RedirectToGitHub;
