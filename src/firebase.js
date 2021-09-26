import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTNDstfhwz2WLAnE7lXTFrSJ6xBNgpack",
  authDomain: "linkedin-clone-78567.firebaseapp.com",
  projectId: "linkedin-clone-78567",
  storageBucket: "linkedin-clone-78567.appspot.com",
  messagingSenderId: "579332746656",
  appId: "1:579332746656:web:77a7f96fbfee10aa4f88c5",
  measurementId: "G-BRL73JHLV4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
