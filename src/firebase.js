import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAi_PlRCV8atR8d7YOJMMjdhq2KgFXUqwA",
  authDomain: "zen-car-test.firebaseapp.com",
  projectId: "zen-car-test",
  storageBucket: "zen-car-test.appspot.com",
  messagingSenderId: "1031876127881",
  appId: "1:1031876127881:web:79d9ac599af669dee56a58"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const firebaseStorage = getStorage();