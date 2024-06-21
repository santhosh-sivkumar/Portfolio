// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "github-visitors-data.firebaseapp.com",
  projectId: "github-visitors-data",
  storageBucket: "github-visitors-data.appspot.com",
  messagingSenderId: "922243309730",
  appId: "1:922243309730:web:4106e90137131a2b3c77fb",
  measurementId: "G-CD0QW79ESM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };
