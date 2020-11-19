import React from "react";

import Decoration from "./Decoration";
import CtaWhoWeHelp from "./CtaWhoWeHelp";
import data from "../dataFromBackend";
// import data from "../dataFromBackend";

const WhoWeHelp = ({ describe, name, target, items }) => {
  const handleClick = () => {
    return console.log("dupa");
  };

  return (
    <section className="whoWeHelp" id="section_4">
      <div className="whoWeHelp__open">
        <h1 className="whoWeHelp__title">Kompu pomagamy ? {name}</h1>
        <Decoration />
      </div>
      <CtaWhoWeHelp onClick={handleClick} />
      <div className="whoWeHelp__descryption">{data.fundation.name}</div>
    </section>
  );
};

export default WhoWeHelp;

// dopisz komponent renderujący
// descryption/ fundacje
// fundacje zapisz w objekcie i użyj li
// za pomocą map() np 07_Dzien_4/02_Props/05_Zadanie_5
