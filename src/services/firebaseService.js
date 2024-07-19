// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluijk9bpvZaweYsNYxOZJdaZ_D57OUJo",
  authDomain: "journey-juggler.firebaseapp.com",
  projectId: "journey-juggler",
  storageBucket: "journey-juggler.appspot.com",
  messagingSenderId: "900870138785",
  appId: "1:900870138785:web:371723fdc4238be4e9b9e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
