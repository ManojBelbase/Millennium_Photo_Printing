// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmHLXAs4ioLbiJ6hQ3O6GzKVukEzDdY-w",
  authDomain: "millenniumphotonepal.firebaseapp.com",
  projectId: "millenniumphotonepal",
  storageBucket: "millenniumphotonepal.firebasestorage.app",
  messagingSenderId: "16074408313",
  appId: "1:16074408313:web:aa49a33f88ebec16096fa8",
  measurementId: "G-ZX06JNMJSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { fireDB, auth };
