import React from "react";
import WelcomeSection from "./WelcomeSection";

function Navigation() {
  return (
    <section className="navigation">
      <ul className="navigation__login">
        <li className="navigation__login-link">
          <a href="/#">Zaloguj</a>
        </li>
        <li className="navigation__login-link">
          <a href="/#">Załóż konto</a>
        </li>
      </ul>
      <ul className="navigation__menu">
        <li className="navigation__menu-link">
          <a href="/#">Start</a>
        </li>
        <li className="navigation__menu-link">
          <a href="/#">O co chodzi?</a>
        </li>
        <li className="navigation__menu-link">
          <a href="/#">O nas</a>
        </li>
        <li className="navigation__menu-link">
          <a href="/#">Fundacja i organizacje</a>
        </li>
        <li className="navigation__menu-link">
          <a href="/#">Kontakt</a>
        </li>
      </ul>
      <WelcomeSection />
    </section>
  );
}

export default Navigation;
