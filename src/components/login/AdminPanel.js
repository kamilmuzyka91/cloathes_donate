import React from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import SignUp from "./Signup";
import LogIn from "./Login";
import { useUser } from "reactfire";

const AdminPanel = () => {
  // Import firebase
  const firebase = useFirebaseApp();
  const user = useUser();

  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <div className="register">
        {user && <AdminPanel />}
        {!user && (
          <>
            <SignUp />
            <LogIn />
          </>
        )}
      </div>

      <section className="AdminPanel">
        <h1 className="title">No kurła gratulacje...</h1>
        <button type="button" onClick={handleClick}>
          Wyloguj
        </button>
      </section>
    </>
  );
};

export default AdminPanel;
