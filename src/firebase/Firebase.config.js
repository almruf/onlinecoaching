// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTUqil1GQWsRjMvhOr45BTXJ_LpZA78-E",
  authDomain: "onlinecoaching-319e8.firebaseapp.com",
  projectId: "onlinecoaching-319e8",
  storageBucket: "onlinecoaching-319e8.appspot.com",
  messagingSenderId: "768980547128",
  appId: "1:768980547128:web:9a46932783fa033fd0d8cd",
  measurementId: "G-CEBRNS8NSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;