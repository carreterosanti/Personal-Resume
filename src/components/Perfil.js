import React from "react";
import "./components-style.css";

export default function Perfil(props) {
  console.log(window.innerWidth);
  return (
    <div className="top-section">
      <h2>Perfil</h2>
      <p>
        Estudiante avanzado de Ingeniería de Sistemas, abocado al diseño y
        desarrollo front-end. De actitud proactiva para trabajar en equipo, con
        atributos de abstraccion y enfoque en la composición de soluciones.
        Desarrollador entusiasta de sistemas vanguardistas, atractivos,
        intuitivos y funcionales.
      </p>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
