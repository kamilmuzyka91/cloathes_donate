import React from "react";

import HomeHeroImage from "../assets/HomeHeroImage.jpg";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={HomeHeroImage}
        alt="cloathes"
        width="1000px"
        height="960px"
      />
      <HeaderNav />
    </header>
  );
}

export default Header;
