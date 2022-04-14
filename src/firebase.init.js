// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
 apiKey : "AIzaSyCOQ9HmIAe35wdkK3KfeU8P0SObVy1OzFw",
 authDomain : "react-car-services.firebaseapp.com",
 projectId : "react-car-services",
 storageBucket : "react-car-services.appspot.com",
 messagingSenderId : "654860593941",
 appId : "1:654860593941:web:0f1ecefb4eeddfdd15171c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;