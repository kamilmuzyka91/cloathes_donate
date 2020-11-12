import React from "react";

import HomeHeroImage from "../assets/HomeHeroImage.jpg";
import Navigation from "./Navigation";

function Header() {
  return (
    <section className="header">
      <img
        className="header__img"
        src={HomeHeroImage}
        alt="cloathes"
        width="860px"
        height="900px"
      />
      <Navigation />
    </section>
  );
}

export default Header;
