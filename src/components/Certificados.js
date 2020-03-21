import React, { useState } from "react";
import Modal from "./Modal";

export default function Certificados(props) {
  const [showCertificado, setShowCertificado] = useState(false);

  function controllShowCertificado() {
    setShowCertificado(prevState => {
      return !prevState;
    });
  }

  const imgCertificado = (
    <div style={{ height: "100%", display: "flex", justifyContent: "center" }}>
      <img
        className="certificado-img"
        src={require("./images/certificadoIBMModeladoDeSistemasConRational.png")}
        alt="Brochure Icon"
      />
    </div>
  );

  return (
    <div className="middle-section">
      <h2>Certificados</h2>
      <div className="contenido-section">
        <div className="flex-start-center">
          <p style={{ fontSize: "18px" }}>
            <strong>
              Modelado de Sistemas Orientados a Objeto con Rational
            </strong>{" "}
            - Universidad Nacional del Centro de la Provincia de Buenos Aires
          </p>
          <img
            className="icono-side-right clickable"
            src={require(props.darkMode
              ? "./images/dark-mode-certificate-icon.png"
              : "./images/certificate-icon.png")}
            alt="Brochure Icon"
            onClick={controllShowCertificado}
          />
        </div>
        <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
          Tandil, Agosto de 2016
        </p>
      </div>
      <div
        id="portafolio"
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
      <Modal
        darkMode={props.darkMode}
        title="Modelado de Sistemas Orientados a Objeto con Rational"
        content={imgCertificado}
        show={showCertificado}
        closeControl={controllShowCertificado}
      />
    </div>
  );
}
