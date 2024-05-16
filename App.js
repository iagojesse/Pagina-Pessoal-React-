// src/App.js
import React from "react";
import ContactForm from "./components/ContactForm";
import { Button } from "./components/Button"; // Atualizado para refletir o nome correto
import "./App.css"; // Estilos globais

function App() {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return (
    <div className="App">
      <Button text="Contato" onClick={() => handleButtonClick("Contato")} />
      <Button text="Portfolio" onClick={() => handleButtonClick("Portfolio")} />
      <Button text="Curriculo" onClick={() => handleButtonClick("Curriculo")} />
      <ContactForm />
    </div>
  );
}

export default App;
