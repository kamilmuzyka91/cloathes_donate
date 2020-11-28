import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NotFound() {
  return (
    <>
      <div className="error">
        <h1 className="page__not__found__title">
          Niestety ale strona o podanym adresie nie istnieje.
        </h1>
        <h2 className="page__not__found__go__back">
          <Link className="error__link" to="/">
            Wróć na stron główną
          </Link>
        </h2>
      </div>
    </>
  );
}

export default NotFound;
