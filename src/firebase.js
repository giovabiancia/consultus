import "firebase/firebase-firestore";
import "firebase/firebase-database";
import "firebase/firebase-functions";
import "firebase/firebase-auth";
import "firebase/firebase-analytics";
import "firebase/firebase-messaging";
import "firebase/storage";

import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBvFHgmlbvQxwwR0jsqy3dmlhERqcKJbiE",
  authDomain: "cunsultus-64a13.firebaseapp.com",
  projectId: "cunsultus-64a13",
  storageBucket: "cunsultus-64a13.appspot.com",
  messagingSenderId: "538713875532",
  appId: "1:538713875532:web:d00fdf5450c7d7fcce80e9",
  measurementId: "G-7EBJ9JXNFR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();

export { storage, firebase as default };
