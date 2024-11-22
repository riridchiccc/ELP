import { signOut } from "firebase/auth";
import { auth } from "./firebase";

// eslint-disable-next-line no-unused-vars
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};