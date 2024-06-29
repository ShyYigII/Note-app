// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQtegdYUqzOYljDbLvgg7PDYWfyxtKVAA",
  authDomain: "note-app-4e35e.firebaseapp.com",
  projectId: "note-app-4e35e",
  storageBucket: "note-app-4e35e.appspot.com",
  messagingSenderId: "1004324711057",
  appId: "1:1004324711057:web:2110d8533bce23f20aad30",
  measurementId: "G-53DQBQBK0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);