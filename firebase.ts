// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqabw7fbmZj5kxlubIOVvTlHJWPvj0LR4",
  authDomain: "notion-clone-4d95b.firebaseapp.com",
  projectId: "notion-clone-4d95b",
  storageBucket: "notion-clone-4d95b.appspot.com",
  messagingSenderId: "33209982123",
  appId: "1:33209982123:web:729fae3a7950dbc775ebee",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
