import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

 // eslint-disable-next-line no-unused-vars
 const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};