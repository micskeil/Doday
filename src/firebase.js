import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhPD1iEBKDMm8xT4E1XL-3-q0twiJo_OM",
  authDomain: "doday-b04d5.firebaseapp.com",
  projectId: "doday-b04d5",
  storageBucket: "doday-b04d5.appspot.com",
  messagingSenderId: "724377726487",
  appId: "1:724377726487:web:37a230b555bb0a4fb37652",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
