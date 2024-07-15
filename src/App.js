import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import initialJsonData from "./data.json"; 

const loadDataFromLocalStorage = () => {
  const data = localStorage.getItem("jsonData");
  return data ? JSON.parse(data) : initialJsonData;
};

const saveDataToLocalStorage = (data) => {
  localStorage.setItem("jsonData", JSON.stringify(data));
};

function App() {
  const [name, setName] = useState(" ");
  const [jsonData, setJsonData] = useState(loadDataFromLocalStorage());

  useEffect(() => {
    saveDataToLocalStorage(jsonData);
  }, [jsonData]);

  const handleReset = () => {
    setName("Jan Kowalski");
  };

  const handleAppendName = () => {
    if (!name.includes(" Jan Kowalski")) {
      setName((prevName) => prevName + " Jan Kowalski");
    }
  };

  const handleAddText = (text) => {
    const newJsonData = [...jsonData, text];
    setJsonData(newJsonData);
  };

  const handleEditText = (index, newText) => {
    const newJsonData = jsonData.map((item, i) =>
      i === index ? newText : item
    );
    setJsonData(newJsonData);
  };

  const handleDeleteText = (index) => {
    const newJsonData = jsonData.filter((_, i) => i !== index);
    setJsonData(newJsonData);
  };

  return (
    <div className="App">
      <Header name={name} />
      <h1>Nagłowek H1</h1>
      <main>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Nagłówek H1</h1>
        </div>
        <MainContent
          jsonData={jsonData}
          onAddText={handleAddText}
          onEditText={handleEditText}
          onDeleteText={handleDeleteText}
        />
      </main>
      <Footer onReset={handleReset} onAppendName={handleAppendName} />
    </div>
  );
}

export default App;
