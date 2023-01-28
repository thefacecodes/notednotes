// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdut-hzPV-iEQjZ5WqSPeKP7odyI0JOpc",
  authDomain: "noteswithnoted.firebaseapp.com",
  projectId: "noteswithnoted",
  storageBucket: "noteswithnoted.appspot.com",
  messagingSenderId: "334737568713",
  appId: "1:334737568713:web:e75044615ba518b4142e18",
  measurementId: "G-21WJN5816E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)

// URL.createObjectURL(event.target.files[0]);