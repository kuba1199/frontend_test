import React, { useState } from "react";
import "../styles/MainContent.scss";
import OptionBlock from "./OptionBlock";
import TextBlock from "./TextBlock";
import TextManagementModal from "./TextManagmentModal";

const MainContent = ({ jsonData, onAddText, onEditText, onDeleteText }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [textBlocks, setTextBlocks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReplace = () => {
    const newText = jsonData[selectedOption];
    setTextBlocks([newText]);
  };

  const handleAppend = () => {
    const newText = jsonData[selectedOption];
    setTextBlocks((prevTextBlocks) => {
      if (!prevTextBlocks.includes(newText)) {
        return [...prevTextBlocks, newText];
      } else {
        alert("Ta treść już istnieje.");
        return prevTextBlocks;
      }
    });
  };

  return (
    <section className="main-content">
      <div className="main-content__wrap">
        <OptionBlock setSelectedOption={setSelectedOption} />
        <div className="main-content__buttons">
          <h2>Blok Drugi</h2>
          <button onClick={handleReplace}>ZASTĄP</button>
          <button onClick={handleAppend}>DOKLEJ</button>
          <button onClick={() => setIsModalOpen(true)}>
            Zarządzaj tekstami
          </button>
        </div>
      </div>
      <TextBlock textBlocks={textBlocks} />
      <TextManagementModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        jsonData={jsonData}
        onAddText={onAddText}
        onEditText={onEditText}
        onDeleteText={onDeleteText}
      />
    </section>
  );
};

export default MainContent;
