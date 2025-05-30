
import firebase from "firebase/compat/app";
import{getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhrzzw6P6FjRLL9XOfFWi3oH7l-6PG1ts",
  authDomain: "clone-4c1de.firebaseapp.com",
  projectId: "clone-4c1de",
  storageBucket: "clone-4c1de.firebasestorage.app",
  messagingSenderId: "191272432354",
  appId: "1:191272432354:web:c31a6c6bc0126e2ba2a4bb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()