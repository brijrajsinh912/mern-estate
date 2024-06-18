// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-20539.firebaseapp.com",
  projectId: "mern-estate-20539",
  storageBucket: "mern-estate-20539.appspot.com",
  messagingSenderId: "588060905848",
  appId: "1:588060905848:web:60fd9625b5b6746144388d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);