import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC2oRcMpOQMnngazhzR3UDo5AkAYCmZNT8",
    authDomain: "kapchat-ea272.firebaseapp.com",
    projectId: "kapchat-ea272",
    storageBucket: "kapchat-ea272.appspot.com",
    messagingSenderId: "203617265807",
    appId: "1:203617265807:web:706fa6d09c3ea3a6ad28fa"
  }).auth();