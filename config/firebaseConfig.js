// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbrXchHoX69Fr0cPSAWKWtxqnPuJLfZvA",
  authDomain: "gpib-benowo.firebaseapp.com",
  projectId: "gpib-benowo",
  storageBucket: "gpib-benowo.appspot.com",
  messagingSenderId: "929860366436",
  appId: "1:929860366436:web:7ce6ed45d87d0d328eaf71",
  measurementId: "G-TDD7LHSZ9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };