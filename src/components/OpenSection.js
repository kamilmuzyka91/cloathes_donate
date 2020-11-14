import React from "react";
import { NavLink } from "react-router-dom";

import Decoration from "../assets/Decoration.svg";
import CtaButton from "./CtaButton";

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
      <CtaButton item="oddaj rzeczy" />
      <CtaButton item="zorganizuj zbiórkę" />

      </div>
    </section>
  );
}

export default OpenSection;
