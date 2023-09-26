// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv_o9SzIazXUzvjxk_oJfdLRxRYtG1exw",
  authDomain: "wordstack-328d6.firebaseapp.com",
  databaseURL: "https://wordstack-328d6-default-rtdb.firebaseio.com",
  projectId: "wordstack-328d6",
  storageBucket: "wordstack-328d6.appspot.com",
  messagingSenderId: "324799762265",
  appId: "1:324799762265:web:6b0facedd81db71aa50648",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
