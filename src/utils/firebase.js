// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-app-400f3.firebaseapp.com",
  projectId: "my-blog-app-400f3",
  storageBucket: "my-blog-app-400f3.appspot.com",
  messagingSenderId: "999162938075",
  appId: "1:999162938075:web:d6f0b5c5d38c384b8202fe",
  measurementId: "G-J2PM6PYKB5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
