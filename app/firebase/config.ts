// config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBVX3KWSer0UFcLI2UR2i7Ph7_K259Hyc",
  authDomain: "anlene-6195b.firebaseapp.com",
  databaseURL: "https://anlene-6195b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anlene-6195b",
  storageBucket: "anlene-6195b.firebasestorage.app",
  messagingSenderId: "679191249159",
  appId: "1:679191249159:web:852329e84ff1f6ce0f05a2",
  measurementId: "G-17YMB28TYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize Realtime Database

export { app, database }; 