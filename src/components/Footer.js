import React from "react";
import "../styles/Footer.scss";

const Footer = ({ onReset, onAppendName }) => (
  <footer className="footer">
    <div className="footer__css">
      <div className="footer__css-text">CSS IS AWESOME</div>
    </div>
    <label htmlFor="toggle-options" className="footer__button">
      Pokaż
    </label>
    <input type="checkbox" id="toggle-options" className="footer__checkbox" />
    <div className="footer__options">
      <button onClick={onReset}>Zresetuj ustawienia</button>
      <button onClick={onAppendName}>Pokaż dane osobowe</button>
    </div>
  </footer>
);

export default Footer;
