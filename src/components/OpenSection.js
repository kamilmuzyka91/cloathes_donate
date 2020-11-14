import React from "react";
import { NavLink } from "react-router-dom";

import Decoration from "../assets/Decoration.svg";

function OpenSection() {
  return (
    <section className="open">
      <h1 className="open__title">
        Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img
        className="open__img"
        src={Decoration}
        alt="cloathes"
        width="860px"
        height="900px"
      />
      <div className="open__cta">
        <NavLink className="open__cta__btn btn__one" to="/logowanie">
          oddaj rzeczy
        </NavLink>
        <NavLink className="open__cta__btn btn__two" to="/logowanie">
          zorganizuj zbiórkę
        </NavLink>
      </div>
    </section>
  );
}

export default OpenSection;
