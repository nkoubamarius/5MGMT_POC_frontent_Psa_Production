// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUaH74yNazp3Dd0FgR20OVSXGmFKKbdFI",
  authDomain: "linkedin-clone-f9174.firebaseapp.com",
  projectId: "linkedin-clone-f9174",
  storageBucket: "linkedin-clone-f9174.appspot.com",
  messagingSenderId: "189578387974",
  appId: "1:189578387974:web:1730e766289c67994e5987",
  measurementId: "G-VKHYPQWT1T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
