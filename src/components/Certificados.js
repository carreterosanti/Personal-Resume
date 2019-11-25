import React from "react";

export default function Certificados() {
  return (
    <div className="middle-section">
      <h2>Certificados</h2>
      <div className="flex-start-center">
        <p style={{ fontSize: "18px" }}>
          <strong>Modelado de Sistemas Orientados a Objeto con Rational</strong>{" "}
          - Universidad Nacional del Centro de la Provincia de Buenos Aires
        </p>
        <img
          style={{ height: "30px", width: "30px", marginLeft: "25px" }}
          src={require("./images/certificate-icon.png")}
          alt="Brochure Icon"
        />
      </div>
      <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
        Tandil, Agosto de 2016
      </p>
    </div>
  );
}
