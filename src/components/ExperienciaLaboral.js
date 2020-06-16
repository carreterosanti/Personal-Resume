import React from "react";

export default function ExperienciaLaboral(props) {
  return (
    <div className="middle-section">
      <h2>Experiencia Laboral</h2>
      <div className="contenido-section">
        <div className="flex-start-center">
          <p style={{ fontSize: "18px" }}>
            <strong>Frontend Developer</strong> /{" "}
            <a
              className={
                props.darkMode
                  ? "dark-mode clickable-text"
                  : "light-mode clickable-text"
              }
              href="https://www.qubikdigital.com/"
              target="_blank"
            >
              Qubik Digital
            </a>
          </p>
        </div>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
            color: "grey",
            marginBottom: "0px",
          }}
        >
          Mayo 2020 - Actualidad
        </p>
      </div>
      <div className="contenido-section">
        <div className="flex-start-center">
          <p style={{ fontSize: "18px" }}>
            <strong>Freelance Developer</strong> / Sincronización Sistema de
            Gestión y Tienda Online
          </p>
        </div>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
          }}
        >
          Aplicación Java desarrollada para una empresa privada, la cual deseaba
          sincronizar automáticamente y en forma periódica, las ventas y
          artículos de su tienda online de Tienda Nube, con su sistema de
          gestión Centum Suite. Mi participación dentro del proyecto comprendió
          el desarrollo íntegro del mismo, desde la captura de requerimientos,
          diseño, implementación y configuración para la ejecución automática de
          la aplicación.
        </p>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
            color: "grey",
            marginBottom: "0px",
          }}
        >
          Febrero 2020 - Marzo 2020
        </p>
      </div>
      <div
        id="portafolio"
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
