import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";
import {
  portfolioReciclajeTandil,
  portfolioRedisenoWebBacMono,
  portfolioReemplazoDeSmartphone
} from "./data-materias.js";

export default function Portfolio(props) {
  const [showInfoProyecto, setInfoProyecto] = useState(false);

  function controllShowInfoProyecto() {
    setInfoProyecto(prevState => {
      return !prevState;
    });
  }

  return (
    <div className="middle-section">
      <h2>Portafolio</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "18px",
          marginBottom: "32px"
        }}
      >
        <PortfolioItem
          titulo={portfolioReciclajeTandil.titulo}
          urlTecnologias={portfolioReciclajeTandil.urlTecnologias}
          darkMode={props.darkMode}
          wave={portfolioReciclajeTandil.wave}
        />

        <PortfolioItem
          titulo={portfolioRedisenoWebBacMono.titulo}
          urlTecnologias={portfolioRedisenoWebBacMono.urlTecnologias}
          darkMode={props.darkMode}
          wave={portfolioRedisenoWebBacMono.wave}
        />

        <PortfolioItem
          titulo={portfolioReemplazoDeSmartphone.titulo}
          urlTecnologias={["java-icon.png", "java-fx-icon.png"]}
          darkMode={props.darkMode}
          wave={portfolioReemplazoDeSmartphone.wave}
        />
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
