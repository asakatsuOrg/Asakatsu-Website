import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { firebaseConfig } from "./FirebaseConfig";

initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// It'll be used in context/User.jsx
export const isSignedIn = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const signingOut = () => signOut(auth);
