import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__top">
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
        <ul className="navigation__bottom">
          <li className="nav__element__bottom">
            <Link
              className="nav__link__bottom"
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Start
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link
              className="nav__link__bottom"
              activeClass="active"
              to="aboutWhat"
              spy={true}
              smooth={true}
              duration={1000}
            >
              O co chodzi?
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link
              className="nav__link__bottom"
              activeClass="active"
              to="aboutUs"
              spy={true}
              smooth={true}
              duration={1000}
            >
              O nas
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link
              className="nav__link__bottom"
              activeClass="active"
              to="foundation"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Fundacja i organizacje
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link
              className="nav__link__bottom"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
