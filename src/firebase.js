// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZNnn0KXaI14bc7NCxI8Ecrp_TCtioiFg",
  authDomain: "volaconte-6179d.firebaseapp.com",
  projectId: "volaconte-6179d",
  storageBucket: "volaconte-6179d.appspot.com",
  messagingSenderId: "584448368393",
  appId: "1:584448368393:web:bdcdedb4f0643042fa3dd8",
  measurementId: "G-33T6FXT4LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase(app);