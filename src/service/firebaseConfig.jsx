import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "FIREBASE_API_KEY",
    authDomain: "exploria-6a24e.firebaseapp.com",
    projectId: "exploria-6a24e",
    storageBucket: "exploria-6a24e.firebasestorage.app",
    messagingSenderId: "822873635992",
    appId: "1:822873635992:web:629f2e2ed59fbcad3de4ed",
    measurementId: "G-2ZNMQKFCZH"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
