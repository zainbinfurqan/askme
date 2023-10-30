// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxJkvktdU9heLIYWBW2QAj039ukZqDsc",
  authDomain: "askme-ecd1d.firebaseapp.com",
  projectId: "askme-ecd1d",
  storageBucket: "askme-ecd1d.appspot.com",
  messagingSenderId: "370284815970",
  appId: "1:370284815970:web:9ef3fe542d7c0bb168933b",
  measurementId: "G-TMT6B55NZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app)