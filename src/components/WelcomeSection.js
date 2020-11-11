import React from "react";

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
        <a href="/#" className="header__welcome__cta--btn">oddaj rzeczy</a>
        <a href="/#" className="header__welcome__cta--btn">zorganizuj zbiórkę</a>
    </div>
    </section>
  );
}

export default WelcomeSection;
