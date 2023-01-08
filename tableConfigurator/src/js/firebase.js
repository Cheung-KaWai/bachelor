import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  query,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  ref,
  getStorage,
  uploadBytes,
  getDownloadURL,
  getBlob,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

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
const storage = getStorage(app);

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

export const addData = async (blob) => {
  try {
    let id = uuidv4();
    id += ".glb";
    const storageRef = ref(storage, id);
    await uploadBytes(storageRef, blob);
    return id;
  } catch (err) {
    console.log(err);
  }
};

export const getModel = async (id) => {
  try {
    const model = await getDownloadURL(ref(storage, id));
    return model;
  } catch (err) {
    console.log(err);
  }
};

export const deleteModel = async (id) => {
  try {
    await deleteObject(ref(storage, id));
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (email, password) => {
  const data = await signInWithEmailAndPassword(auth, email, password);
  return data.user;
};

export const getDataLoggedUser = async (userId) => {
  const q = query(collection(db, "roomplanData"), where("uid", "===", userId));

  const data = await getDocs(q);
  console.log(data);
};
