// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'; // Importar o Firebase Auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAUojO3XPr-fsZZXyVvtZYCNfpoTvEqb4",
  authDomain: "teste-db136.firebaseapp.com",
  projectId: "teste-db136",
  storageBucket: "teste-db136.appspot.com",
  messagingSenderId: "92831751581",
  appId: "1:92831751581:web:ee8f74b7e0c9aa36dfe374",
  measurementId: "G-9N2WML0B1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app); 


export { db, auth, storage }