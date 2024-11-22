import React, { useState } from "react";
// In App.js or wherever you're using AuthForm
import AuthForm from './path/to/AuthForm';

import { signUp, login } from "./auth";

AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => signUp(email, password);
  const handleLogin = () => login(email, password);

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthForm;