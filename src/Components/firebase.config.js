// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqbti6753hg_Xe49rWunIaY7n27gop6GU",
  authDomain: "expenses-fde1f.firebaseapp.com",
  projectId: "expenses-fde1f",
  storageBucket: "expenses-fde1f.firebasestorage.app",
  messagingSenderId: "882397514843",
  appId: "1:882397514843:web:dd5b27d1bc503b7524837e",
  measurementId: "G-42566NRP7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };