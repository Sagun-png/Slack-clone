import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3KDydLC_NbLDaSW6eScrcaP-gSKIjXf0",
  authDomain: "slack-clone-89f50.firebaseapp.com",
  databaseURL: "https://slack-clone-89f50-default-rtdb.firebaseio.com",
  projectId: "slack-clone-89f50",
  storageBucket: "slack-clone-89f50.appspot.com",
  messagingSenderId: "847428690847",
  appId: "1:847428690847:web:e826fe6b64f304dc8a53aa",
  measurementId: "G-R3B641KEBV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
