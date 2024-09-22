// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiLrQJw1Zo13f_YjdyRrYE7KOp2-5G-zI",
  authDomain: "veiculo-control.firebaseapp.com",
  databaseURL: "https://veiculo-control-default-rtdb.firebaseio.com",
  projectId: "veiculo-control",
  storageBucket: "veiculo-control.appspot.com",
  messagingSenderId: "833401263621",
  appId: "1:833401263621:web:3331267dd02c34bb20ee6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);