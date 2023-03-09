import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDV5Jv3GcXwuFuRDrMmAqwIwZut43xCY7o",
    authDomain: "linkedinclone-8c696.firebaseapp.com",
    projectId: "linkedinclone-8c696",
    storageBucket: "linkedinclone-8c696.appspot.com",
    messagingSenderId: "26421449711",
    appId: "1:26421449711:web:6a0f61da05c52d2f7e1c1a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };