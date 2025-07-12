import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore'; // Import services you need

const firebaseConfig = {
  apiKey: "AIzaSyC...your-actual-api-key",
  authDomain: "anishrajpandey-84706.firebaseapp.com",
  projectId: "anishrajpandey-84706",
  storageBucket: "anishrajpandey-84706.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "1:your-actual-app-id:web:...",
  // measurementId: "G-your-measurement-id" // if you have Analytics
};

// Initialize Firebase

// Now you can get service instances:
const db = getFirestore(app);
const auth = getAuth(app);
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
 export { app, db, auth }; // Export the initialized app and services