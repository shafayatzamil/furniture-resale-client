// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyCKi8s8K3BRW5IH0CLdEX50fs1wAkC8qOk",
  // authDomain: "furniture-client.firebaseapp.com",
  // projectId: "furniture-client",
  // storageBucket: "furniture-client.appspot.com",
  // messagingSenderId: "729416772556",
  // appId: "1:729416772556:web:60d5bfe9a1c4d818778b69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
