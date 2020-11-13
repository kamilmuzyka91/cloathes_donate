import React from "react";
import { NavLink } from "react-router-dom";

import Decoration from "../assets/Decoration.svg";

function OpenSection() {
  return (
    <section className="open">
      <div className="open__title">
        Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
      </div>
      <img
        className="open__img"
        src={Decoration}
        alt="cloathes"
        width="860px"
        height="900px"
      />
      <div className="open__welcome__cta">
        <NavLink className="open__welcome__cta__btn--one" to="/logowanie">
          oddaj rzeczy
        </NavLink>
        <NavLink className="open__welcome__cta__btn--two" to="/logowanie">
          zorganizuj zbiórkę
        </NavLink>
      </div>
    </section>
  );
}

export default OpenSection;
