import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: "art-website-58848.firebaseapp.com",
  projectId: "art-website-58848",
  storageBucket: "art-website-58848.appspot.com",
  messagingSenderId: "719524497246",
  appId: "1:719524497246:web:d59b3f7efb4c0ed4c7f1cf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
