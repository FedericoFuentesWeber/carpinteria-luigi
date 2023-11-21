import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carpinteria-luigi.firebaseapp.com",
  projectId: "carpinteria-luigi",
  storageBucket: "carpinteria-luigi.appspot.com",
  messagingSenderId: "1054446270559",
  appId: "1:1054446270559:web:2e3af71a28c555b33a43ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);