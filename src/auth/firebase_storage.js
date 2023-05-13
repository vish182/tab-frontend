import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebase_config";

const app = firebase.initializeApp(firebaseConfig);

export const firebase_storage = getStorage(app);
