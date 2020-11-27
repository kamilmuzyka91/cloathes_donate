import React from "react";

import StepsDescription from "./StepsDescription";
import Decoration from "./Decoration";
import CtaButton from "./CtaButton";

function Steps() {
  return (
    <section className="steps" id="section_2">
      <div className="steps__title">
        <h3 className="steps__title__order">Wystarczą 4 proste kroki</h3>
        <Decoration />
      </div>
      <StepsDescription />
      <CtaButton item="oddaj rzeczy" />
    </section>
  );
}

export default Steps;
