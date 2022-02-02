import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC30K2WdAF4PpyRKSfgpYPKndup9jnAVUw",
  authDomain: "rn-uber-eats-clone-24fe3.firebaseapp.com",
  projectId: "rn-uber-eats-clone-24fe3",
  storageBucket: "rn-uber-eats-clone-24fe3.appspot.com",
  messagingSenderId: "1051855815298",
  appId: "1:1051855815298:web:ee819ff09e8bacad486a9b"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;