import React from "react";
import "./components-style.css";

export default function PortfolioItem(props) {
  return (
    <div className="portfolio-item-card" style={{ maxWidth: "30%" }}>
      <div className="portfolio-item-img">
        <img
          style={{ width: "100%", height: "100%" }}
          alt={props.alt}
          src={props.src}
        />
      </div>

      <h3 className="portfolio-item-titulo">{props.titulo}</h3>

      <p className="portfolio-item-descripcion">Descripcion del proyecto</p>
      <div></div>
    </div>
  );
}
