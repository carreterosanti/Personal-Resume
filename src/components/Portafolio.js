import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";

export default function Portfolio(props) {
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
          titulo="Reciclaje Tandil Android App"
          src={require("./images/reciclados-tandil-app.png")}
          alt="Capturas de pantalla correspondientes a la aplicacion para Android: Reciclados Tandil App"
          urlTecnologias={["android-icon.png", "java-icon.png"]}
        />

        <PortfolioItem
          titulo="Rediseño Web Bac Mono"
          src={require("./images/redesign-web-bac-mono.png")}
          alt="Capturas de pantalla correspondientes a la aplicacion para Android: Reciclados Tandil App"
          urlTecnologias={["react-icon.png", "js-icon.png", "css-icon.png"]}
        />

        <PortfolioItem
          titulo="Reemplazo de Smartphone"
          src={require("./images/reemplazo-de-smartphones.png")}
          alt="Capturas de pantalla correspondientes a la aplicacion para Android: Reciclados Tandil App"
          urlTecnologias={["java-icon.png", "java-fx-icon.png"]}
        />
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
