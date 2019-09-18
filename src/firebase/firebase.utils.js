import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCqCU4XwWGLZD4HzNMik6tFi-kTfCXQg3k",
  authDomain: "crown-clothing-db-33abf.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-33abf.firebaseio.com",
  projectId: "crown-clothing-db-33abf",
  storageBucket: "",
  messagingSenderId: "717591676004",
  appId: "1:717591676004:web:8567ee7420869788750b71"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
