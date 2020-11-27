import React from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

function Zalogowano() {
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  };
  return (
    <section className="steps" id="section_2">
      <h1>ZALOGOWANO</h1>
      <button type="button" onClick={handleClick}>
        Wyloguj
      </button>
    </section>
  );
}

export default Zalogowano;
