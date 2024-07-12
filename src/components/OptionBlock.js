import React from "react";
import "../styles/OptionBlock.scss";

const OptionBlock = ({ setSelectedOption }) => (
  <div className="option-block">
    <h2>Blok Pierwszy</h2>
    <div className="radio-button">
      <input
        type="radio"
        id="option1"
        name="option"
        onChange={() => setSelectedOption(0)}
      />
      <label htmlFor="option1">Opcja pierwsza</label>
    </div>
    <div className="radio-button">
      <input
        type="radio"
        id="option2"
        name="option"
        onChange={() => setSelectedOption(1)}
      />
      <label htmlFor="option2">Opcja druga</label>
    </div>
    <div className="radio-button">
      <input
        type="radio"
        id="option3"
        name="option"
        onChange={() => setSelectedOption(Math.floor(Math.random() * 4) + 2)}
      />
      <label htmlFor="option3">Opcja losowa</label>
    </div>
  </div>
);

export default OptionBlock;
