import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import Navigation from "./Navigation";
import Decoration from "./Decoration";

const SignIn = () => {
  // User State
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  // onChange function
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  // Import firebase
  const firebase = useFirebaseApp();

  // Submit function (Log in user)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log in code here.
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setUser({
            ...user,
            error: "Please verify your email before to continue",
          });
          firebase.auth().signOut();
        }
      })
      .catch((error) => {
        // Update the error
        setUser({
          ...user,
          error: error.message,
        });
      });
  };

  return (
    <>
      <Navigation />
      <h1>Zaloguj się</h1>
      <Decoration />
      <div className="form__login">
        <form onSubmit={handleSubmit}>
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <br />
          Hasło
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
      {user.error && <h4>{user.error}</h4>}
    </>
  );
};

export default SignIn;
