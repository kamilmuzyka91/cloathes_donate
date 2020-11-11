import React from "react";

import Navigation from "./Navigation";
import HomeHeroImage from "../assets/HomeHeroImage.jpg";

function Home() {
  return (
    <div className="container">
      <section className="header">
        <img src={HomeHeroImage} alt="cloathes" width="860px" height="900px"/>
        <Navigation />
      </section>
    </div>
  );
}

export default Home;
