import React from "react";
import "./components-style.css";
import WaveGenerator from "./WaveGenerator";
import { wavesReciclajeTandil } from "./data-file";

export default function PortfolioItem(props) {
  const imparUltimoItem = props.ultimoEImpar
    ? "dark-mode-portfolio-last-item-card clickable"
    : "49%";
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
        props.darkMode
          ? props.ultimoEImpar
            ? "dark-mode-portfolio-last-item-card grow"
            : "dark-mode-portfolio-item-card grow"
          : props.ultimoEImpar
          ? "portfolio-last-item-card grow"
          : "portfolio-item-card grow"
      }
      onClick={props.onClick}
    >
      <div className="div-left-content-last-item-card">
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
          maxWidth: "200px",
          minHeight: "200px",
          alignItems: "center",
          position: "relative"
        }}
      >
        <svg width="100%" height="100%" fill="none" alignItems="top">
          <WaveGenerator wave={props.wave} />
        </svg>
        <div style={{ position: "absolute", bottom: 0 }}>
          <img
            style={{
              maxWidth: "18px",
              margin: "25px"
            }}
            src={
              props.darkMode
                ? require("./images/dark-mode-more-info-icon.png")
                : require("./images/more-info-icon.png")
            }
          />
        </div>
      </div>
    </div>
  );
}
