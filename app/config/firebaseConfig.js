// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4tv3DPyDppTir9Wt8r5-oRPTlQMz88Bc",
  authDomain: "hydro-sense-403623.firebaseapp.com",
  databaseURL: "https://hydro-sense-403623-default-rtdb.firebaseio.com",
  projectId: "hydro-sense-403623",
  storageBucket: "hydro-sense-403623.appspot.com",
  messagingSenderId: "274329865046",
  appId: "1:274329865046:web:f4339318697ea7157624f7",
  measurementId: "G-QCVGBF0YGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };