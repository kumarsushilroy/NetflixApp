 
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDln5WqIgpo5uWEwHO5iybkpC5BsTdfvx8",
  authDomain: "netflix-59f27.firebaseapp.com",
  projectId: "netflix-59f27",
  storageBucket: "netflix-59f27.appspot.com",
  messagingSenderId:"126227606125",
  appId: "1:126227606125:web:a5003d03d290176907ad64"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);