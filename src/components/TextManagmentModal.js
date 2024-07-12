// src/components/TextManagementModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/TextManagementModal.scss";

const TextManagementModal = ({
  isOpen,
  onRequestClose,
  jsonData,
  onAddText,
  onEditText,
  onDeleteText,
}) => {
  const [newText, setNewText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddText = () => {
    if (newText.trim()) {
      onAddText(newText);
      setNewText("");
    }
  };

  const handleEditText = (index) => {
    setEditIndex(index);
    setEditText(jsonData[index]);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null && editText.trim()) {
      onEditText(editIndex, editText);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Text Management"
      className="text-management-modal"
      overlayClassName="text-management-overlay"
    >
      <h2>Zarządzanie tekstem</h2>
      <div>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Nowy tekst"
        />
        <button onClick={handleAddText}>Dodaj tekst</button>
      </div>
      <div>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Edytowany tekst"
        />
        <button onClick={handleSaveEdit}>Zapisz edycję</button>
      </div>
      <ul>
        {jsonData.map((text, index) => (
          <li key={index}>
            <span>{text}</span>
            <button onClick={() => handleEditText(index)}>Edytuj</button>
            <button onClick={() => onDeleteText(index)}>Usuń</button>
          </li>
        ))}
      </ul>
      <button onClick={onRequestClose} className="close-button">
        Zamknij
      </button>
    </Modal>
  );
};

export default TextManagementModal;
