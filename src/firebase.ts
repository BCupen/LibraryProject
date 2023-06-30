// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDO6MRt8Yde1VjPaC6LTdgSBQLYr6DW8qY",
    authDomain: "libraryproject-1e300.firebaseapp.com",
    projectId: "libraryproject-1e300",
    storageBucket: "libraryproject-1e300.appspot.com",
    messagingSenderId: "448982340602",
    appId: "1:448982340602:web:2bead0d22f63a24273ca43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export default app;