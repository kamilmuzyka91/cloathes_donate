import React from "react";

import Decoration from "./Decoration";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

function AboutUs() {
  return (
    <section className="aboutUs" id="section_3">
      <div className="aboutUs__entry">
        <h5 className="aboutUs__title">O nas</h5>
        <Decoration />
        <p className="aboutUs__info">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img className="aboutUs__signature" src={Signature} alt="signature" />
      </div>
      <img className="aboutUs__photo" src={People} alt="our face" />
    </section>
  );
}

export default AboutUs;
