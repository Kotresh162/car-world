
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage  } from "firebase/storage";

const firebaseApp = initializeApp( {
    apiKey: "AIzaSyCrH4QLX7p7glOTnsBp87ohmIUCY57duxc",
    authDomain: "mycarworld-bb145.firebaseapp.com",
    projectId: "mycarworld-bb145",
    storageBucket: "mycarworld-bb145.firebasestorage.app",
    messagingSenderId: "734409917827",
    appId: "1:734409917827:web:6def790cd35a0b84da62b6",
    measurementId: "G-9HF6RNMMS1"
  });


const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);
 export {
   db,
   auth,
   storage,
   
createUserWithEmailAndPassword,
doc,
setDoc,
addDoc,
collection,
getDocs,
query,
getDoc,
onAuthStateChanged
 };
 