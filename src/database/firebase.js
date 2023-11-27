// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAWE5FLem6Y0rS-q6PhBcWYoc1qLaHWbbk",
    authDomain: "messenger-clone-d336b.firebaseapp.com",
    projectId: "messenger-clone-d336b",
    storageBucket: "messenger-clone-d336b.appspot.com",
    messagingSenderId: "873426743332",
    appId: "1:873426743332:web:4838b1753eb60b9894a8b1",
    measurementId: "G-CGMY0RX6YW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);
export { auth, storage }
export default db