// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpPyqCMY-Z5Nk9XX4komcOqE7UdnDAGhI",
    authDomain: "hydro-sense.firebaseapp.com",
    projectId: "hydro-sense",
    storageBucket: "hydro-sense.appspot.com",
    messagingSenderId: "748445182383",
    appId: "1:748445182383:web:39cb4bc8194bf41a11e75a",
    measurementId: "G-ZVZZR547WR"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);