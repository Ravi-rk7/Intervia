
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervia-a6d3d.firebaseapp.com",
  projectId: "intervia-a6d3d",
  storageBucket: "intervia-a6d3d.firebasestorage.app",
  messagingSenderId: "207421713649",
  appId: "1:207421713649:web:51ff220f87abb789994d50"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
