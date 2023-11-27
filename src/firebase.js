// import React from 'react';
// import firebase from "firebase/app"
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore} from 'firebase/firestore/lite';

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCKN562mM4lYpdtaRobkC9wN9V94M90RZo",
  authDomain: "challenge-37d0d.firebaseapp.com",
  projectId: "challenge-37d0d",
  storageBucket: "challenge-37d0d.appspot.com",
  messagingSenderId: "673142347568",
  appId: "1:673142347568:web:d73330d8138c9021191af5",
  measurementId: "G-ZB0L18NJZZ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBSFEpZ0VLwkEP1RcxP49m4t7XMT-aDzTA",
//     authDomain: "challenge-8929d.firebaseapp.com",
//     projectId: "challenge-8929d",
//     storageBucket: "challenge-8929d.appspot.com",
//     messagingSenderId: "132132411841",
//     appId: "1:132132411841:web:5db584468a3e5840d87740",
//     measurementId: "G-F4NT557ZKN"
//   };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

