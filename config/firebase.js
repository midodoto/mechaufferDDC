// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import {getFirestore, collection, addDoc, doc, getDoc, setDoc, updateDoc, query, where, getDocs} from "firebase/firestore";
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
    console.log("user", user);
    console.log("additionalData", additionalData);
    if (!user) return;
    const { email } = user;
    console.log("EMAIL", email);
    try {
        const docRef = await setDoc(doc(db, "users", user.uid), {
            email,
            additionalData
        });
        console.log("ICICICICICICICICICIC", docRef)
        return docRef;

    } catch (e) {
        console.log("e", e);
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

export const updateUserCoordoneeDocument = async (user, additionalData) => {
    if (!user) return;
    const { email } = user;
    try {
        await updateDoc(doc(db, "users", user.uid), {
            "additionalData.firstname": additionalData.firstname,
            "additionalData.lastname": additionalData.lastname,
            "additionalData.ville": additionalData.ville,
            "additionalData.civilite": additionalData.civilite,
            "additionalData.pays": additionalData.pays,
            "additionalData.codePostal": additionalData.codePostal,
            "additionalData.adresse": additionalData.adresse,
            "additionalData.iban": additionalData.iban,
            "additionalData.nomCompte": additionalData.nomCompte,
        });
    } catch (e) {
        console.log(e);
    }
}

export const getUserById = async (userId) => {
    if (!userId) return;
    try {
        console.log("userId", userId);
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        console.log("ICIIIII", docSnap)
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            throw new Error("No such document!")
        }
    } catch (e) {
        console.log("EEE", e)
        throw new Error(e);
    }
}

export const getDevisByUserId = async (userId) => {
    if (!userId) return;
    try {
        const usersRef = collection(db, "users");

        const q = query(usersRef, where("additionalData.tokenParrain", "==", userId));

        const querySnapshot = await getDocs(q);
        let res = []
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        res.push(doc.data());
        console.log(doc.id, " => ", doc.data());
        });
        return res;

    } catch (e) {
        console.log("EEE", e)
        throw new Error(e);
    }
}

export const resetEmail = async (email) => {
    try {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
          .then(() => {
            console.log("EMail sent");
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    } catch (e) {

    }
}
