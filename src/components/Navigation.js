import React from "react";
import { NavLink } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <>
      <nav className="header__navigation">
        <ul className="header__navigation__top">
          <li className="nav__element__top">
            <NavLink className="nav__link__top" to="/logowanie">
              Zaloguj
            </NavLink>
          </li>
          <li className="nav__element__top">
            <NavLink className="nav__link__top" to="/rejestracja">
              Załóż konto
            </NavLink>
          </li>
        </ul>
        {/* bottom menu */}
        <ul className="header__navigation__bottom">
          <li className="nav__element__bottom">
            <NavLink className="nav__link__bottom" to="/">
              Start
            </NavLink>
          </li>

          <li className="nav__element__bottom">
            <NavLink className="nav__link__bottom" to="/o_co_chodzi">
              O co chodzi?
            </NavLink>
          </li>
          <li className="nav__element__bottom">
            <NavLink className="nav__link__bottom" to="/o_nas">
              O nas
            </NavLink>
          </li>
          <li className="nav__element__bottom">
            <NavLink className="nav__link__bottom" to="/fundacja_i_organizacje">
              Fundacja i organizacje
            </NavLink>
          </li>
          <li className="nav__element__bottom">
            <NavLink className="nav__link__bottom" to="/kontakt">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
