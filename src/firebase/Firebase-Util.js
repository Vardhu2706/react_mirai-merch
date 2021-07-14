// Importing Helpers
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config Options
const firebaseConfig = {
  apiKey: "AIzaSyAnQZZtnUc193IRDavwQzydNpMBFH9rHZE",
  authDomain: "mirai-merch-fc034.firebaseapp.com",
  projectId: "mirai-merch-fc034",
  storageBucket: "mirai-merch-fc034.appspot.com",
  messagingSenderId: "244335499079",
  appId: "1:244335499079:web:f8767cc4db9ca50f6a5e62",
};

// Initializing app with config
firebase.initializeApp(firebaseConfig);

// Firebase Util Exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Sign-in Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Default Export
export default firebase;
