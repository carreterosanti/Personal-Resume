import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Certificados from "./components/Certificados";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setMode = () => {
    console.log("entro");
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar setDarkMode={setMode} />
      <Perfil darkMode={darkMode} />
      <Educacion darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Certificados darkMode={darkMode} />
      <Portafolio darkMode={darkMode} />
    </div>
  );
}

export default App;
