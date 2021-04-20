import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrDzs_0jtwu8SPvW7dI0g5emc5Z7ZvOUA",
    authDomain: "challenge-12021.firebaseapp.com",
    projectId: "challenge-12021",
    storageBucket: "challenge-12021.appspot.com",
    messagingSenderId: "677034512352",
    appId: "1:677034512352:web:f9bfaad174390b0d966585",
    measurementId: "G-VSBCP3X96H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };