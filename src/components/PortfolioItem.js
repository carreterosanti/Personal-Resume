import React from "react";
import "./components-style.css";
import WaveGenerator from "./WaveGenerator";
import { wavesReciclajeTandil } from "./data-materias";

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
    >
      <div
        style={{
          minWidth: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
      >
        <h3 className="portfolio-item-titulo">{props.titulo}</h3>
        <p className="portfolio-item-descripcion">Descripcion del proyecto</p>
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
          minWidth: "40%",
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

/* 
          <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="#151d30" />
            <stop offset="50%" stop-color="#1c2c43" />
            <stop offset="100%" stop-color="#273951" />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="
                m 200 0 
                c -70,30
                  -350,40
                  0,200 "
          ></path>

          <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="#139d8d" />
            <stop offset="50%" stop-color="#139d8d" />
            <stop offset="100%" stop-color="#36ec7e" />
          </linearGradient>

          <path
            fill="url(#grad2)"
            d="
                m 200 50 
                c 0,100
                  -350,60
                  0,180 "
          ></path>

          <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="#ffa601" />
            <stop offset="25%" stop-color="#ff7d43" />
            <stop offset="50%" stop-color="#f95d6a" />
            <stop offset="75%" stop-color="#d55087" />
            <stop offset="100%" stop-color="#a05095" />
          </linearGradient>

          <path
            fill="url(#grad3)"
            d="
                m 200 10 
                c -100,40
                  -100,30
                  0,80 "
          ></path>
*/
