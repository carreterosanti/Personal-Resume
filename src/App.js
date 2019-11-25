import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Certificados from "./components/Certificados";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Perfil />
      <Educacion />
      <Skills />
      <Certificados />
      <Portafolio />
    </div>
  );
}

export default App;
