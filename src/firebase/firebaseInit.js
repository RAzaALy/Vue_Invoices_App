// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDko-E99E9rJXkrSO0uxQPxJcpQKBRlxF0",
  authDomain: "vue-invoice-app-5133f.firebaseapp.com",
  projectId: "vue-invoice-app-5133f",
  storageBucket: "vue-invoice-app-5133f.appspot.com",
  messagingSenderId: "785907451048",
  appId: "1:785907451048:web:e041594efb47134a616e9d",
  measurementId: "G-5KMCVBNJYK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
