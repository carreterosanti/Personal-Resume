import React from "react";

export default function Skills(props) {
  const listadoSkill = [
    {
      imgSkill: "java-icon.png",
      alt: "Icono Java Lenguaje de Programación",
      nivel: "90",
      color: "#1565C0"
    },
    {
      imgSkill: "css-icon.png",
      alt: "Icono CSS Lenguaje de Programación",
      nivel: "60",
      color: "#0277BD"
    },
    {
      imgSkill: "js-icon.png",
      alt: "Icono JavaScript Lenguaje de Programación",
      nivel: "60",
      color: "#F0DB4F"
    },
    {
      imgSkill: "react-icon.png",
      alt: "Icono React Lenguaje de Programación",
      nivel: "60",
      color: "#00D8FF"
    },
    {
      imgSkill: "github-icon.png",
      alt: "Icono Github",
      nivel: "70",
      color: "#24292E"
    }
  ];

  const iconosSkills = listadoSkill.map(element => (
    <svg className="svg-skills" width="160" height="160">
      <circle className="progress-bar" stroke={element.color} />
      <circle
        className="circular-background"
        stroke-dashoffset={"calc(314.1592% * (" + element.nivel + " / 100))"}
      />
      <image
        href={require("./images/" + element.imgSkill)}
        className="svg-image"
      />
    </svg>
  ));

  return (
    <div className="middle-section">
      <h2>Skills</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "space-around",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: "16px"
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
