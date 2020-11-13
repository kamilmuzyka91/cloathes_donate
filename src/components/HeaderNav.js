import React from "react";
import { NavLink } from "react-router-dom";
import OpenSection from "./OpenSection";
// import { Link, animateScroll as scroll } from "react-scroll";

import Navigation from "./Navigation";
import WelcomeSection from "./OpenSection";

function HeaderNav() {
  return (
    <>
      <nav className="header__navigation">
        <Navigation />
        <OpenSection />,
      </nav>
    </>
  );
}

export default HeaderNav;
