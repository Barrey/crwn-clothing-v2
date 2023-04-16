import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBXbbzpJoFQKaGx80CxsVzo-_e2V5qFI",
  authDomain: "crown-clothing-db-35fd5.firebaseapp.com",
  projectId: "crown-clothing-db-35fd5",
  storageBucket: "crown-clothing-db-35fd5.appspot.com",
  messagingSenderId: "758158327288",
  appId: "1:758158327288:web:e3a1fcdbf5277fa165ea0d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
