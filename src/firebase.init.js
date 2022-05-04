// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-mLqXIdr3HWhcgpyFjg2n9EOvDjXFjM",
  authDomain: "grocery-shop-52c48.firebaseapp.com",
  projectId: "grocery-shop-52c48",
  storageBucket: "grocery-shop-52c48.appspot.com",
  messagingSenderId: "314035434447",
  appId: "1:314035434447:web:a729b3c808e2b9744798ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
