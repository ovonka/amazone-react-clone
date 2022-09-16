import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBp8XW3iQIK3wCikd4YadGJWXgSbMcHZv0",
    authDomain: "clone-7f6de.firebaseapp.com",
    projectId: "clone-7f6de",
    storageBucket: "clone-7f6de.appspot.com",
    messagingSenderId: "723645650697",
    appId: "1:723645650697:web:af442c3765ad27ba7b65d8",
    measurementId: "G-R08PGT3S5L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };