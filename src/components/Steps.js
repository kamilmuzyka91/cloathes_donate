import React from "react";

import Decoration from "../assets/Decoration.svg";
import StepsDescription from "./StepsDescription";
import CtaButton from "./CtaButton";

function Steps() {
  return (
    <section className="steps">
      <div className="steps__title">
        <h3 className="steps__title__order">Wystarczą 4 proste kroki</h3>
        <img
          className="steps__img"
          src={Decoration}
          alt="cloathes"
          width="860px"
          height="900px"
        />
      </div>
      <StepsDescription />
      <CtaButton item="oddaj rzeczy" />
    </section>
  );
}

export default Steps;
