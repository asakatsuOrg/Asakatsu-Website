import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { firebaseConfig } from "./FirebaseConfig";

initializeApp(firebaseConfig);

export const db = getFirestore();

export const storingUserData = async (userAuth) => {
  const docRef = doc(db, "users", userAuth.uid);
  const { displayName, photoURL, email, uid } = userAuth;
  const createdAt = new Date();

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    await setDoc(docRef, {
      displayName: displayName,
      photoURL: photoURL,
      email: email,
      createdAt: createdAt,
      uid: uid,
      private: false,
      twitter: "",
      github: "",
      youtube: "",
      linkedin: "",
    });
  }
};
