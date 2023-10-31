// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBXb0utVGvXDeVVaL6sC-Msg8DS8jM9Pb4",
  authDomain: "eventsy-f9d80.firebaseapp.com",
  projectId: "eventsy-f9d80",
  storageBucket: "eventsy-f9d80.appspot.com",
  messagingSenderId: "667846412743",
  appId: "1:667846412743:web:c841181439a173b6bbb1e2",
  measurementId: "G-4P3L6JSBKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};