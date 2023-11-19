import React from "react";
import "./components-style.css";

export default function Perfil(props) {
  console.log(window.innerWidth);
  return (
    <div className="top-section">
      <h2>Perfil</h2>
      <div className="contenido-section">
        <p>
          Ingeniero de sistemas especializado en proyectos{" "}
          <strong>SAP Commerce Cloud</strong>.
        </p>
        <p>
          Como experimentado desarrollador front-end y líder técnico de
          proyectos SAP Commerce Composable Storefront (a.k.a. SAP Spartacus),
          he participado en{" "}
          <strong>
            más de 7 proyectos de gran envergadura y complejidad tanto B2C como
            B2B
          </strong>
          .
        </p>
        <p>
          De actitud proactiva para trabajar en equipo, con atributos de
          abstracción y enfoque en la composición de soluciones. Apasionado por
          el desarrollo de sistemas vanguardistas, atractivos, intuitivos y
          funcionales.
        </p>
      </div>

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
