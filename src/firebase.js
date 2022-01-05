import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../firebase.config";

if (!firebase.apps.length) {
  console.log("Initializing Firebase");
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
