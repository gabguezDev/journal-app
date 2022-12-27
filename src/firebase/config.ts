// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCQmw-3KHACTi-vqH2GQ1cs0o5CmlfJZ4M",
	authDomain: "journal-app-22fba.firebaseapp.com",
	projectId: "journal-app-22fba",
	storageBucket: "journal-app-22fba.appspot.com",
	messagingSenderId: "334917878385",
	appId: "1:334917878385:web:3489bcab1e2b011cf111d0",
	measurementId: "G-3XFRGFQ6TV",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

//Auth
export const FirebaseAuth = getAuth(FirebaseApp);

//DB
export const FirebaseDB = getFirestore(FirebaseApp);

// const analytics = getAnalytics(firebaseApp);
