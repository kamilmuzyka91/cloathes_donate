import React from "react";
import { NavLink } from "react-router-dom";

function CtaButton({ item, link }) {
  return (
    <>
      <NavLink className="cta__button" to="/logowanie">
        {item}
      </NavLink>
    </>
  );
}

export default CtaButton;
