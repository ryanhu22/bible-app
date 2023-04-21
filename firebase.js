// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq06g5VP2nlfnLEFp9oIAcSdVwzo6ccw4",
  authDomain: "bible-assi.firebaseapp.com",
  projectId: "bible-assi",
  storageBucket: "bible-assi.appspot.com",
  messagingSenderId: "924013625104",
  appId: "1:924013625104:web:776e3c2a1a28feffe1af95",
  measurementId: "G-E2RJDYCPC2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
