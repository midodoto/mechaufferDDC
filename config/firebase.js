// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
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
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
