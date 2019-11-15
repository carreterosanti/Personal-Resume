import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";

export default function Portfolio() {
  return (
    <div className="middle-section">
      <h2>Portafolio</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "18px",
          marginBottom: "32px"
        }}
      >
        <PortfolioItem
          titulo="Reciclaje Tandil Android App"
          src={require("./images/reciclados-tandil-app.png")}
          alt="Capturas de pantalla correspondientes a la aplicacion para Android: Reciclados Tandil App"
        />

        <PortfolioItem
          titulo="Rediseño Web Bac Mono"
          src={require("./images/redesign-web-bac-mono.png")}
          alt="Capturas de pantalla correspondientes a la aplicacion para Android: Reciclados Tandil App"
        />

        <PortfolioItem
          titulo="Reemplazo de Smartphone"
          src={require("./images/reemplazo-de-smartphones.png")}
          alt="Capturas de pantalla correspondientes a la aplicacion para Android: Reciclados Tandil App"
        />
      </div>
    </div>
  );
}
