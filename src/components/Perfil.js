import React from "react";
import "./components-style.css";

export default function Perfil(props) {
  console.log(window.innerWidth);
  return (
    <div className="top-section">
      <h2>Perfil</h2>
      <div className="contenido-section">
        <p>
          Desarrollador de software, actualmente finalizando la carrera de grado
          Ingeniería de Sistemas. De actitud proactiva para trabajar en equipo,
          con atributos de abstracción y enfoque en la composición de
          soluciones. Apasionado por el desarrollo de sistemas vanguardistas,
          atractivos, intuitivos y funcionales.
        </p>
      </div>

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
