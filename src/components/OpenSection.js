import React from "react";

import Decoration from "./Decoration";
import CtaButton from "./CtaButton";

function OpenSection() {
  return (
    <section className="open">
      <h1 className="open__title">
        Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <Decoration />
      <div className="open__cta">
        <CtaButton item="oddaj rzeczy" to="/logowanie"/>
        <CtaButton item="zorganizuj zbiórkę" />
      </div>
    </section>
  );
}

export default OpenSection;
