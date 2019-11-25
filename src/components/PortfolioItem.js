import React from "react";
import "./components-style.css";

export default function PortfolioItem(props) {
  const iconosTecnologias = props.urlTecnologias.map(element => (
    <img
      className="s-skill-img"
      src={require("./images/" + element.toString())}
      alt="Icono Java Lenguaje de Programación"
    />
  ));

  return (
    <div className="portfolio-item-card">
      <div className="portfolio-item-img">
        <img
          className="portfolio-img"
          style={{ width: "100%", height: "100%" }}
          alt={props.alt}
          src={props.src}
        />
      </div>

      <h3 className="portfolio-item-titulo">{props.titulo}</h3>

      <p className="portfolio-item-descripcion">Descripcion del proyecto</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "16px",
          marginRight: "12px",
          marginBottom: "16px"
        }}
      >
        {iconosTecnologias}
      </div>
    </div>
  );
}
