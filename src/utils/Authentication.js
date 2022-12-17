import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { firebaseConfig } from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const isSignedIn = (callback) => {
  return onAuthStateChanged(auth, callback);
};
