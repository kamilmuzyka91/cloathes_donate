import React from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

const AdminPanel = () => {
  // Import firebase
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  };

  return (
<section className="AdminPanel">
<h1 className="title">No kurła gratulacje...</h1>
<button type="button" onClick={handleClick}>
        Wyloguj
      </button>
</section>
  );
};

export default AdminPanel;