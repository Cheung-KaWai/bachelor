import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJVkQ3lO-FaafDNUyZg2mKGsToHDx236E",
  authDomain: "roomplan-6b447.firebaseapp.com",
  projectId: "roomplan-6b447",
  storageBucket: "roomplan-6b447.appspot.com",
  messagingSenderId: "714364168431",
  appId: "1:714364168431:web:59d1470a2c7b5cb4a3931a",
  measurementId: "G-Z7HWHT7GS1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export const getData = async (roomId) => {
  try {
    const docRef = doc(db, "roomplanData", roomId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "No room found";
    }
  } catch (err) {
    return err;
  }
};

export const login = async (email, password) => {
  const data = await signInWithEmailAndPassword(auth, email, password);
  return data.user;
};
