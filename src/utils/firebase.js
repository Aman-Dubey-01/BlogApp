
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-cb65d.firebaseapp.com",
  projectId: "blogapp-cb65d",
  storageBucket: "blogapp-cb65d.appspot.com",
  messagingSenderId: "1029552798562",
  appId: "1:1029552798562:web:713949e35dd9cd1052ca3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);