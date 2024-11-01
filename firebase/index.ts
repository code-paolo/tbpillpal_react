import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDl59THNz9jsYBotaFMP_M7LOvmwx1qRWI",
  authDomain: "tbpillpalrhu.firebaseapp.com",
  projectId: "tbpillpalrhu",
  storageBucket: "tbpillpalrhu.firebasestorage.app",
  messagingSenderId: "1084859775798",
  appId: "1:1084859775798:web:c388dee4aa32c7ca529197",
  measurementId: "G-FL0QDE8493",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
