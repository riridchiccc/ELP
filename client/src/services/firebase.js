// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjNDYEA5krTOaOkZ3QUEsgTMJxhED1-OQ",
  authDomain: "elpl-97435.firebaseapp.com",
  projectId: "elpl-97435",
  storageBucket: "elpl-97435.firebasestorage.app",
  messagingSenderId: "611591736842",
  appId: "1:611591736842:web:00d3a64da0ca2d9ec319f3",
  measurementId: "G-GKHR6S92SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app)

export default app;
export { auth };
export {analytics};