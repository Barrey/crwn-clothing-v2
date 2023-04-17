import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const dateUtc = new Date().toISOString();
    const createdDate = new Date(dateUtc);
    // Membuat objek Date dari string tanggal
    const date = new Date(createdDate);

    // Mengambil nilai tahun, bulan, dan tanggal dari objek Date
    let year = date.getUTCFullYear();
    let month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Menambahkan nol di depan jika hanya satu digit
    let day = String(date.getUTCDate()).padStart(2, "0"); // Menambahkan nol di depan jika hanya satu digit

    // Mengambil nilai jam, menit, dan detik dari objek Date
    let hours = String(date.getUTCHours()).padStart(2, "0"); // Menambahkan nol di depan jika hanya satu digit
    let minutes = String(date.getUTCMinutes()).padStart(2, "0"); // Menambahkan nol di depan jika hanya satu digit
    let seconds = String(date.getUTCSeconds()).padStart(2, "0"); // Menambahkan nol di depan jika hanya satu digit

    // Menggabungkan nilai tahun, bulan, dan tanggal dengan nilai jam, menit, dan detik
    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: formattedDate,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
};
