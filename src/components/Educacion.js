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
      <h2>Formación Académica</h2>

      <div className="flex-start-center">
        <p style={{ fontSize: "18px" }}>
          <strong>Ingeniería de Sistemas</strong> - Universidad Nacional del
          Centro de la Provincia de Buenos Aires, Tandil
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
      <p
        style={{
          marginTop: "-12px",
          marginLeft: "6px",
          color: "grey",
          marginBottom: "0px"
        }}
      >
        2014 - presente
      </p>

      <div className="flex-start-center">
        <p style={{ fontSize: "18px" }}>
          <strong>Educación primaria y secundaria</strong> - Colegio San
          Agustín, Mar del Plata
        </p>
      </div>
      <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
        2002 - 2013
      </p>

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
