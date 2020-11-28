import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__top">
          <li className="nav__element__top">
            <Link className="nav__link__top" to="/logowanie">
              Zaloguj
            </Link>
          </li>
          <li className="nav__element__top">
            <Link className="nav__link__top" to="/rejestracja">
              Załóż konto
            </Link>
          </li>
        </ul>
        {/* bottom menu */}
        <ul className="navigation__bottom">
          <li className="nav__element__bottom">
            <Link className="nav__link__bottom" to="/">
              Start
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link smooth to="#section_2">
              <Link className="nav__link__bottom" to="/">
                O co chodzi
              </Link>
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link smooth to="#section_3">
              <Link className="nav__link__bottom" to="/">
                O nas
              </Link>
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link smooth to="#section_4">
              <Link className="nav__link__bottom" to="/">
                Fundacja i organizacje
              </Link>
            </Link>
          </li>
          <li className="nav__element__bottom">
            <Link smooth to="#section_5">
              <Link className="nav__link__bottom" to="/">
                Kontakt
              </Link>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
