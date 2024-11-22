import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Adjust the path to your firebase configuration

/**
 * Handles user signup with Firebase.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<string | null>} Returns an error message if failed, or null if successful.
 */
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return null; // No error
  } catch (error) {
    console.error("Error signing up:", error.message);
    return error.message; // Return error message for UI display
  }
};

export default signUp;