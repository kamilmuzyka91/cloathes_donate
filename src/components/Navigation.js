import React from "react";
import { NavLink } from "react-router-dom";

import WelcomeSection from "./WelcomeSection";

function Navigation() {
  return (
    
    <section className="navigation">
      <ul className="navigation__login">
        <li className="navigation__login__link">
          <NavLink className="navigation__menu__link" to="/logowanie">
            Zaloguj
          </NavLink>
        </li>
        <li className="navigation__login__link">
          <NavLink className="navigation__menu__link" to="/rejestracja">
            Załóż konto
          </NavLink>
        </li>
      </ul>
      <ul className="navigation__menu">
        <li>
          <NavLink className="navigation__menu__link" to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu__link" to="/o_co_chodzi">
            O co chodzi?
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu__link" to="/o_nas">
            O nas
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu__link" to="/fundacja_i_organizacje">
            Fundacja i organizacje
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu__link" to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </ul>
      <WelcomeSection/>,
    </section>
  );
}

export default Navigation;
