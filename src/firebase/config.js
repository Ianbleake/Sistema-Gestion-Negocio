// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDPv0zaIgeXWX_cihzMdmFTdDeW55ORiFk",
  authDomain: "sistema-d4390.firebaseapp.com",
  projectId: "sistema-d4390",
  storageBucket: "sistema-d4390.appspot.com",
  messagingSenderId: "914550011626",
  appId: "1:914550011626:web:e2dbad8409228de6a04993",
  measurementId: "G-EKY7YXFKGM"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);