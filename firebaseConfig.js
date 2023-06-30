// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rK36lZ1RO0Ymo9XB14sCFZRCgwqu5Oc",
  authDomain: "local-list-building-funnel.firebaseapp.com",
  projectId: "local-list-building-funnel",
  storageBucket: "local-list-building-funnel.appspot.com",
  messagingSenderId: "634261305415",
  appId: "1:634261305415:web:8eada70a3684a0bff35962",
  measurementId: "G-37Z29EGGT4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
