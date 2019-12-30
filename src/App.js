import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Certificados from "./components/Certificados";
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Intereses from "./components/Intereses";
import InformacionPie from "./components/InformacionPie";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  const setMode = () => {
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
      <ExperienciaLaboral darkMode={darkMode} />
      <Intereses darkMode={darkMode} />
      <InformacionPie />
    </div>
  );
}

export default App;
