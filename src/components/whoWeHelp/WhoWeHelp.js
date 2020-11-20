import React from "react";

import Decoration from "../../components/Decoration";
import WhoWeHelpNav from "./WhoWeHelpNav";

// import Organization from "./Organization";
import Fundation from "./Fundation";
// import Collection from "./Collection";

const WhoWeHelp = ({ describe, target, items }) => {
  // const handleClick = () => {
  //   return console.log("dupa");
  // };

  return (
    <>
      <section className="whoWeHelp container" id="section_4">
        <div className="whoWeHelp__open">
          <h1 className="whoWeHelp__title">Komu pomagamy ?</h1>
          <Decoration />
        </div>
        <WhoWeHelpNav />
        <div className="whoWeHelp__content">
          <Fundation />
          {/* <Organization /> */}
          {/* <Collection /> */}
        </div>
      </section>
    </>
  );
};

export default WhoWeHelp;

// dopisz komponent renderujący
// descryption/ fundacje
// fundacje zapisz w objekcie i użyj li
// za pomocą map() np 07_Dzien_4/02_Props/05_Zadanie_5
