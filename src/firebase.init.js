// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNfyG6VvJgeUxeKrTdOpI3GbZRhBJkid0",
  authDomain: "grocery-shop-e85f5.firebaseapp.com",
  projectId: "grocery-shop-e85f5",
  storageBucket: "grocery-shop-e85f5.appspot.com",
  messagingSenderId: "677905503920",
  appId: "1:677905503920:web:f937b0ba2eb66e253d8d75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
