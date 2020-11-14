import React from "react";

import Navigation from "./Navigation";
import OpenSection from "./OpenSection";

function HeaderNav() {
  return (
    <>
      <section className="header__nav">
        <Navigation />
        <OpenSection />,
      </section>
    </>
  );
}

export default HeaderNav;
