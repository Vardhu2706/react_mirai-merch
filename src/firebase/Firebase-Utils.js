// Firebase Utils

// Imports
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config Vars
const config = {
  apiKey: "AIzaSyB8AszIaGg9GCbkVEM0j9UPPV4Y1xZ6ipw",
  authDomain: "mirai-merch-app.firebaseapp.com",
  projectId: "mirai-merch-app",
  storageBucket: "mirai-merch-app.appspot.com",
  messagingSenderId: "494912321568",
  appId: "1:494912321568:web:2a706d72a4d46aad39a445",
};

// Initializing Firebase
firebase.initializeApp(config);

// Exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// If we need whole of firebase
export default firebase;
