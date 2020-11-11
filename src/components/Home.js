import React from "react";

import Navigation from "./Navigation";
import HomeHeroImage from "../assets/HomeHeroImage.jpg";

function Home() {
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

export default Home;
