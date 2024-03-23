import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAYlKu56uhmAGnNjAcVEFN2orwf7obHHUc",
    authDomain: "ai-photo-grid-ipl.firebaseapp.com",
    projectId: "ai-photo-grid-ipl",
    storageBucket: "ai-photo-grid-ipl.appspot.com",
    messagingSenderId: "68417247035",
    appId: "1:68417247035:web:13a38ff11808fb28dc091e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storagedb = getStorage(app);