import React, { useState } from "react";
import "./components-style.css";
import ListadoMaterias from "./ListadoMaterias";

export default function Educacion(props) {
  const [showListadoMaterias, setShowListadoMaterias] = useState(false);

  function controllShowListadoMaterias() {
    setShowListadoMaterias(prevState => {
      return !prevState;
    });
  }

  return (
    <div className="middle-section">
      <h2>Educación</h2>

      <div className="flex-start-center">
        <p style={{ fontSize: "18px" }}>
          <strong>Ingeniería de Sistemas</strong> - Universidad Nacional del
          Centro de la Provincia de Buenos Aires
        </p>
        <img
          className="icono-side-right clickable"
          src={require(props.darkMode
            ? "./images/dark-mode-check-list-icon.png"
            : "./images/check-list-icon.png")}
          alt="Brochure Icon"
          onClick={controllShowListadoMaterias}
        />
      </div>

      <ListadoMaterias
        show={showListadoMaterias}
        closeControl={controllShowListadoMaterias}
        darkMode={props.darkMode}
      />

      <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
        2014 - presente
      </p>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
