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
import Cursos from "./components/Cursos";

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
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1440px" }}>
        <NavBar setDarkMode={setMode} darkMode={darkMode} />
        <Perfil darkMode={darkMode} />
        <ExperienciaLaboral darkMode={darkMode} />
        <Portafolio darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Educacion darkMode={darkMode} />
        <Certificados darkMode={darkMode} />
        <Cursos darkMode={darkMode} />
        <Intereses darkMode={darkMode} />
      </div>
      <InformacionPie />
    </div>
  );
}

export default App;
