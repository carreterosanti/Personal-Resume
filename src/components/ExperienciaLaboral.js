import React from "react";

export default function ExperienciaLaboral(props) {
  return (
    <div className="middle-section">
      <h2>Experiencia Laboral </h2>
      <div className="contenido-section">
        <div className="work-experience-div">
          <div style={{ flexGrow: 2 }}>
            <p>
              Durante la temporada de invierno de 2018 partícipe del programa de
              intercambio “Work and Travel”, en Aspen CO Estados Unidos, donde
              trabajé como “back server” en el restaurante Element 47.
            </p>
            <p>
              A pesar de que es una experiencia laboral en el ámbito
              gastronómico y no en el desarrollo de software, puedo destacar que
              formar parte de un equipo de trabajo en una empresa donde los
              estándares de calidad del servicio son altos, me permitió
              desarrollarme en aspectos laborales como el trabajo colaborativo,
              la resolución de problemas y el compromiso con el conocimiento
              sobre el producto y servicio involucrado. Por último también puedo
              resaltar que me ayudó a perfeccionarme en el idioma Inglés.
            </p>
          </div>
          <div style={{ flexGrow: 1, margin: "0px 30px" }}>
            <a href="https://www.thelittlenell.com/dining/element-47">
              <img
                className="work-experience-icon"
                src={require(props.darkMode
                  ? "./images/dark-mode-element47-icon.png"
                  : "./images/element47-icon.png")}
                alt="Profile picture."
              />
            </a>
          </div>
        </div>
        <p style={{ marginTop: "-12px", marginLeft: "6px", color: "grey" }}>
          Diciembre 2017 - Marzo 2018
        </p>
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
