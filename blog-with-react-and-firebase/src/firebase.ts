import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBESKe5IV5W2xESR0qCaQIQgKHv5jFPjxI",
  authDomain: "blog-165a2.firebaseapp.com",
  projectId: "blog-165a2",
  storageBucket: "blog-165a2.firebasestorage.app",
  messagingSenderId: "1057944368717",
  appId: "1:1057944368717:web:46badb8ce6e3c0d0bc8e04",
  measurementId: "G-5M2CDXPZXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, signOut };
