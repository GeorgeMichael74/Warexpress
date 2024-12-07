// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
const firebaseConfig = {
   apiKey: "AIzaSyB9FlcNOzXfVb8DDa7bQLXc4pxzMOxO9W",
   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.EACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_FIREBASE_APP_ID,
   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMNET_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = Firestore(app);

export { auth, db };
