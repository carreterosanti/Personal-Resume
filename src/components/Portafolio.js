import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";
import {
  portfolioReciclajeTandil,
  portfolioRedisenoWebBacMono,
  portfolioReemplazoDeSmartphone,
  portfolioAlgoritmoDeTrazas
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
          descripcion={portfolioReciclajeTandil.descripcion}
          darkMode={props.darkMode}
          wave={portfolioReciclajeTandil.wave}
        />
        <PortfolioItem
          titulo={portfolioRedisenoWebBacMono.titulo}
          urlTecnologias={portfolioRedisenoWebBacMono.urlTecnologias}
          descripcion={portfolioRedisenoWebBacMono.descripcion}
          darkMode={props.darkMode}
          wave={portfolioRedisenoWebBacMono.wave}
        />
        <PortfolioItem
          titulo={portfolioReemplazoDeSmartphone.titulo}
          urlTecnologias={portfolioReemplazoDeSmartphone.urlTecnologias}
          descripcion={portfolioReemplazoDeSmartphone.descripcion}
          darkMode={props.darkMode}
          wave={portfolioReemplazoDeSmartphone.wave}
        />
        <PortfolioItem
          titulo={portfolioAlgoritmoDeTrazas.titulo}
          urlTecnologias={portfolioAlgoritmoDeTrazas.urlTecnologias}
          descripcion={portfolioAlgoritmoDeTrazas.descripcion}
          darkMode={props.darkMode}
          wave={portfolioAlgoritmoDeTrazas.wave}
        />
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
