import React from "react";

export default function Skills() {
  return (
    <div className="middle-section">
      <h2>Skills</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "space-around",
          marginTop: "16px"
        }}
      >
        <img
          className="b-skill-img"
          src={require("./images/java-icon.png")}
          alt="Icono Java Lenguaje de Programación"
        />

        <img
          className="b-skill-img"
          src={require("./images/css-icon.png")}
          alt="Icono CSS Lenguaje de Programación"
        />
        <img
          className="m-skill-img"
          src={require("./images/js-icon.png")}
          alt="Icono JavaScript Lenguaje de Programación"
        />
        <img
          className="m-skill-img"
          src={require("./images/react-icon.png")}
          alt="Icono React Lenguaje de Programación"
        />
      </div>
    </div>
  );
}
