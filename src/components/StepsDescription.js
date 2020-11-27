import React from "react";

import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

function StepsDescription() {
  return (
    <div className="steps__shipping">
      <div className="steps__item">
        <img className="small__icon" src={Icon1} alt="t-shirt" />
        <h4 className="small__title">Wybierz rzeczy</h4>
        <span className="small__line"></span>
        <p className="small__description">ubrania, zabawki, sprzęt i inne</p>
      </div>

      <div className="steps__item">
        <img className="steps__icon" src={Icon2} alt="bag" />
        <h4 className="small__title">Spakuj je</h4>
        <span className="small__line"></span>
        <p className="small__description">skorzystaj z worków na śmieci</p>
      </div>

      <div className="steps__item">
        <img className="steps__icon" src={Icon3} alt="magnifier" />
        <h4 className="small__title">Zdecyduj komu chcesz pomóc</h4>
        <span className="small__line"></span>
        <p className="small__description">wybierz zaufane miejsce</p>
      </div>

      <div className="steps__item">
        <img className="steps__icon" src={Icon4} alt="shipment" />
        <h4 className="small__title">Zamów kuriera</h4>
        <span className="small__line"></span>
        <p className="small__description">
          kurier przyjedzie w dogodnym terminie
        </p>
      </div>
    </div>
  );
}

export default StepsDescription;
