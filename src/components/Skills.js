import React from "react";

export default function Skills(props) {
  const listadoSkill = [
    {
      imgSkill: "java-icon.png",
      alt: "Icono Java Lenguaje de Programación",
      nivel: "90",
      color: "#1565C0",
      nombre: "Java"
    },

    {
      imgSkill: "js-icon.png",
      alt: "Icono JavaScript Lenguaje de Programación",
      nivel: "60",
      color: "#F0DB4F",
      nombre: "JavaScript"
    },
    {
      imgSkill: "css-icon.png",
      alt: "Icono CSS Lenguaje de Programación",
      nivel: "60",
      color: "#0277BD",
      nombre: "CSS"
    },
    {
      imgSkill: "react-icon.png",
      alt: "Icono React Lenguaje de Programación",
      nivel: "60",
      color: "#00D8FF",
      nombre: "React.js"
    },
    {
      imgSkill: "android-icon.png",
      alt: "Icono Android",
      nivel: "75",
      color: "#3ddc84",
      nombre: "Android SDK"
    },
    {
      imgSkill: props.darkMode
        ? "dark-mode-github-icon.png"
        : "github-icon.png",
      alt: "Icono Github",
      nivel: "70",
      color: props.darkMode ? "#F7F7F7" : "#24292E",
      nombre: "Github"
    }
  ];

  const iconosSkills = listadoSkill.map(element => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 20px"
      }}
    >
      <img
        src={require("./images/" + element.imgSkill)}
        className="svg-image"
      />
      <p style={{ marginTop: "5px" }}>{element.nombre}</p>
    </div>
  ));

  return (
    <div className="middle-section">
      <h2>Tecnologías de Interés</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "25px"
        }}
      >
        {iconosSkills}
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
