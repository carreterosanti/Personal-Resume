import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Perfil />
      <Educacion />
      <Skills />
      <Portafolio />
    </div>
  );
}

export default App;
