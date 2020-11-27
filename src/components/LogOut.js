import React from "react";
import Navigation from "./Navigation";
import Decoration from "./Decoration";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div className="logOut">
      <Navigation />
      <div className="logOut__container">
        <h1 className="logout__title">Wylogowanie nastąpiło pomyślnie!</h1>
        <Decoration className="decoration"/>
        <Link to="/">
          <button className="btn">Strona główna</button>
        </Link>
      </div>
    </div>
  );
};
export default LogOut;
