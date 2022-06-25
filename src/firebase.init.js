import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQHlyEcfytYaKgJmVxVJm7LYRQRTli_8",
  authDomain: "grocery-shop-71621.firebaseapp.com",
  projectId: "grocery-shop-71621",
  storageBucket: "grocery-shop-71621.appspot.com",
  messagingSenderId: "212012780491",
  appId: "1:212012780491:web:67e05095054849e116c44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
