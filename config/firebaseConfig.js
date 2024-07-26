// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCbrXchHoX69Fr0cPSAWKWtxqnPuJLfZvA",
//   authDomain: "gpib-benowo.firebaseapp.com",
//   projectId: "gpib-benowo",
//   storageBucket: "gpib-benowo.appspot.com",
//   messagingSenderId: "929860366436",
//   appId: "1:929860366436:web:7ce6ed45d87d0d328eaf71",
//   measurementId: "G-TDD7LHSZ9M"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCyggf6F-4pxhNqJhtXialEMk86fLjsxHo",
  authDomain: "gpibenowo-htgx17.firebaseapp.com",
  projectId: "gpibenowo-htgx17",
  storageBucket: "gpibenowo-htgx17.appspot.com",
  messagingSenderId: "1024940880767",
  appId: "1:1024940880767:web:68e2e52b3ad736e2c6204a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };