import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJHrHVSFIf2CZzjR-bRXu52P08UPMq_Fg",
  authDomain: "github-tracker-55dd1.firebaseapp.com",
  projectId: "github-tracker-55dd1",
  storageBucket: "github-tracker-55dd1.firebasestorage.app",
  messagingSenderId: "1016953298475",
  appId: "1:1016953298475:web:681deb02a6b96d7fcdd46e",
  measurementId: "G-ES9T9N7G1B",
};

const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
