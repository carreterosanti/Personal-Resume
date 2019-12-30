import React from "react";
import "./components-style.css";
import WaveGenerator from "./WaveGenerator";
import { wavesReciclajeTandil } from "./data-file";

export default function PortfolioItem(props) {
  const iconosTecnologias = props.urlTecnologias.map(element => (
    <img
      className="s-skill-img"
      src={require("./images/" + element)}
      alt="Icono Java Lenguaje de Programación"
    />
  ));

  return (
    <div
      className={
        props.darkMode ? "dark-mode-portfolio-item-card" : "portfolio-item-card"
      }
      onClick={props.onClick}
    >
      <div
        style={{
          minWidth: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
      >
        <h3 className="portfolio-item-titulo">{props.titulo}</h3>
        <p className="portfolio-item-descripcion">{props.descripcion}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "16px",
            marginRight: "12px",
            marginBottom: "16px"
          }}
        >
          {iconosTecnologias}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          minWidth: "30%",
          alignItems: "center"
        }}
      >
        <svg width="200px" height="200px" fill="none" alignItems="top">
          <WaveGenerator wave={props.wave} />
        </svg>
      </div>
    </div>
  );
}
