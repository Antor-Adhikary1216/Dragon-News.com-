// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrG1VtayFVYP_moFWm_saFhju0JaUy3_8",
  authDomain: "dragon-news-app-bb8c7.firebaseapp.com",
  projectId: "dragon-news-app-bb8c7",
  storageBucket: "dragon-news-app-bb8c7.firebasestorage.app",
  messagingSenderId: "428821534145",
  appId: "1:428821534145:web:a380849334cae576d44b40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);