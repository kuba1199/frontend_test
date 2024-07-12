import React from "react";
import "../styles/Header.scss";
import htmllogoHeader from "../images/html_logo.png";

const Header = ({ name }) => (
  <header className="header">
    <a href="/" className="header__logo">
      <img src={htmllogoHeader} alt="Logo" />
    </a>
    <div className="header__title">
      Zadanie rekrutacyjne <br /> {name}
    </div>
  </header>
);

export default Header;
