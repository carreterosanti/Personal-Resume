import React, { useState } from "react";
import Modal from "./Modal";

export default function Certificados(props) {
  const [showCertificado, setShowCertificado] = useState(false);

  function controllShowCertificado() {
    setShowCertificado((prevState) => {
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
            <strong>Introduction to "Spartacus"</strong> - openSAP
          </p>
          <a
            href="https://open.sap.com/verify/xuden-kocod-pizoz-borys-gepub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icono-side-right clickable"
              src={require(props.darkMode
                ? "./images/dark-mode-certificate-icon.png"
                : "./images/certificate-icon.png")}
              alt="Url Certificado"
            />
          </a>
        </div>
        <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
          Agosto de 2020
        </p>
      </div>
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
            onClick={controllShowCertificado}
            alt="Imagen Certificado"
            title="Imagen Certificado"
          />
        </div>
        <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
          Tandil, Agosto de 2016
        </p>
      </div>

      <div
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
