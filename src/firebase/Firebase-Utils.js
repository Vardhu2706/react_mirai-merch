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

export const createUserProfile = async (userAuth, additionalData) => {
  // If user doesn't exist, return
  if (!userAuth) return;

  // If it exists, query Firestore for the user snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // If the snapshot doesn't exist, create a document
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating a user: ", error.message);
    }
  }

  return userRef;
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
