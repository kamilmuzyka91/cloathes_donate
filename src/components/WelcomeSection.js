import React from "react";
import { NavLink } from "react-router-dom";

import Decoration from "../assets/Decoration.svg";

function WelcomeSection() {
  return (
    <section className="header__welcome">
      <div className="header__welcome__title">
        Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
      </div>
      <img
        className="header__img"
        src={Decoration}
        alt="cloathes"
        width="860px"
        height="900px"
      />
      <div className="header__welcome__cta">
        <NavLink className="header__welcome__cta__btn--one" to="/logowanie">
          oddaj rzeczy
        </NavLink>
        <NavLink className="header__welcome__cta__btn--two" to="/logowanie">
          zorganizuj zbiórkę
        </NavLink>
      </div>
    </section>
  );
}

export default WelcomeSection;
