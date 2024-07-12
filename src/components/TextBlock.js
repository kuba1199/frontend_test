import React from "react";
import "../styles/TextBlock.scss";

const TextBlock = ({ textBlocks }) => (
  <div className="text-block">
    <h2>Blok z długą nazwą która sama się przytnie...</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
    {textBlocks.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </div>
);

export default TextBlock;
