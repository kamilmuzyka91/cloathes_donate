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
              to="section_1"
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
              to="section_2"
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
              to="section_3"
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
              to="section_4"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Fundacja i organizacje
            </Link>
          </li>
          <li className="nav__element__bottom">
            <NavLink to="/contact">
             
              <Link
                className="nav__link__bottom"
                activeClass="active"
                to="section_5"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Kontakt
              </Link>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
