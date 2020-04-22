import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwg4ZX0AR-PiE-HnXkgRX7UyjavCGiJAg",
  authDomain: "net-ninja-marioplan-9cabf.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-9cabf.firebaseio.com",
  projectId: "net-ninja-marioplan-9cabf",
  storageBucket: "net-ninja-marioplan-9cabf.appspot.com",
  messagingSenderId: "199325876670",
  appId: "1:199325876670:web:381e9598a5646d8540f9ef",
  measurementId: "G-617B2Y19PL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;
