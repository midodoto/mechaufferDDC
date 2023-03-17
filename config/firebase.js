// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore, collection, addDoc, doc, getDoc, setDoc, updateDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJuCAWruOL5yBF3L7JXcTNTBReSA7lRAY",
    authDomain: "mechauffernext.firebaseapp.com",
    projectId: "mechauffernext",
    storageBucket: "mechauffernext.appspot.com",
    messagingSenderId: "336346984646",
    appId: "1:336346984646:web:00b5f78bbf7aa4225c27c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
    const { email } = user;
    try {
        const docRef = await setDoc(doc(db, "users", user.uid), {
            email,
            additionalData
        });
    } catch (e) {
        console.log(e);
    }
}

export const updateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const { email } = user;
    try {
        await updateDoc(doc(db, "users", user.uid), {
            "additionalData.devis": {...additionalData}
        });
    } catch (e) {
        console.log(e);
    }
}

export const getUserById = async (userId) => {
    if (!userId) return;
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            throw new Error("No such document!")
        }
    } catch (e) {
        throw new Error(e);
    }
}
