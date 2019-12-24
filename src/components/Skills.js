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
      imgSkill: "android-icon.png",
      alt: "Icono Android",
      nivel: "75",
      color: "#3ddc84"
    },
    {
      imgSkill: props.darkMode
        ? "dark-mode-github-icon.png"
        : "github-icon.png",
      alt: "Icono Github",
      nivel: "70",
      color: props.darkMode ? "#F7F7F7" : "#24292E"
    }
  ];

  const iconosSkills = listadoSkill.map(element => (
    <svg className={props.darkMode ? "dark-mode-svg-skills" : "svg-skills"}>
      <circle className="progress-bar" stroke={element.color} />
      <circle
        className={
          props.darkMode
            ? "dark-mode-circular-background"
            : "circular-background"
        }
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
