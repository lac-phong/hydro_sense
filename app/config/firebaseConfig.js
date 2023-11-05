import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBpPyqCMY-Z5Nk9XX4komcOqE7UdnDAGhI",
  authDomain: "hydro-sense.firebaseapp.com",
  databaseURL: "https://hydro-sense-default-rtdb.firebaseio.com",
  projectId: "hydro-sense",
  storageBucket: "hydro-sense.appspot.com",
  messagingSenderId: "748445182383",
  appId: "1:748445182383:web:39cb4bc8194bf41a11e75a",
  measurementId: "G-ZVZZR547WR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
