import React from "react";

import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

function Footer() {
  return (
    <>
    <section className="footer">
        <h6 className="footer__copy">Copyright by Coders Lab</h6>
        <div className="social">
        <img className="Facebook__ikon" src={Facebook} alt="Our facebook" />
        <img className="Instagram__ikon" src={Instagram} alt="Our instagram" />
        </div>
    </section>
    </>
  );
}

export default Footer;
