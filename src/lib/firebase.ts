// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
    getAuth,
    type Auth,
} from "firebase/auth";
import {
    getFirestore,
    type Firestore,
} from "firebase/firestore";
import {
    getStorage,
    type FirebaseStorage,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCqij7FbDEEQYqDfGD8Tmx1lkKSy6glYzc",
    authDomain: "komanda-ryzys-vlb.firebaseapp.com",
    projectId: "komanda-ryzys-vlb",
    storageBucket: "komanda-ryzys-vlb.firebasestorage.app",
    messagingSenderId: "491227977384",
    appId: "1:491227977384:web:492e0ba869f61a0d75549d"
};

function createFirebaseApp() {
    if (!getApps().length) {
        return initializeApp(firebaseConfig);
    }
    return getApp();
}

const app = createFirebaseApp();

// Exportamos instancias listas para usar
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
export default app;
