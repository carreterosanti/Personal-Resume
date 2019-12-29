import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";
import { listadoProyectosPortfolio } from "./data-materias.js";
import InfoProyecto from "./InfoProyecto";

export default function Portfolio(props) {
  const [showInfoProyecto, setInfoProyecto] = useState(false);

  function controllShowInfoProyecto() {
    setInfoProyecto(prevState => {
      return !prevState;
    });
  }

  const listadoProyectos = listadoProyectosPortfolio.map(element => (
    <PortfolioItem
      titulo={element.titulo}
      urlTecnologias={element.urlTecnologias}
      descripcion={element.descripcion}
      darkMode={props.darkMode}
      wave={element.wave}
      onClick={controllShowInfoProyecto}
    />
  ));

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
        {listadoProyectos}
      </div>

      <InfoProyecto
        show={showInfoProyecto}
        closeControl={controllShowInfoProyecto}
        darkMode={props.darkMode}
      />

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
