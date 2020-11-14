import React from "react";

import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

function Steps() {
  return (
    <section className="steps">
      <img className="steps__icon" src={Icon1} alt="t-shirt" />
      <img className="steps__icon" src={Icon2} alt="bag" />
      <img className="steps__icon" src={Icon3} alt="magnifier" />
      <img className="steps__icon" src={Icon4} alt="shipment" />
    </section>
  );
}

export default Steps;
