import React, { useState } from "react";
import "./components-style.css";

export default function Educacion() {
  const [showListadoMaterias, setShowListadoMaterias] = useState(false);

  function controllShowListadoMaterias() {
    setShowListadoMaterias(prevState => {
      return !showListadoMaterias;
    });
  }

  return (
    <div className="middle-section">
      <h2>Educación</h2>
      <br />
      <div className="flex-start-center">
        <p style={{ fontSize: "18px" }}>
          <strong>Ingeniería de Sistemas</strong> - Universidad Nacional del
          Centro de la Provincia de Buenos Aires
        </p>
        <img
          style={{ height: "30px", width: "30px", marginLeft: "25px" }}
          src={require("./images/check-list-icon.png")}
          alt="Brochure Icon"
          onClick={controllShowListadoMaterias}
        />
      </div>

      <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
        2014 - presente
      </p>
    </div>
  );
}
