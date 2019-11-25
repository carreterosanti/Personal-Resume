import React from "react";

export default function Skills() {
  const listadoSkill = [
    {
      imgSkill: "java-icon.png",
      alt: "Icono Java Lenguaje de Programación",
      nivel: "90"
    },
    {
      imgSkill: "css-icon.png",
      alt: "Icono CSS Lenguaje de Programación",
      nivel: "49"
    },
    {
      imgSkill: "js-icon.png",
      alt: "Icono JavaScript Lenguaje de Programación",
      nivel: "49"
    },
    {
      imgSkill: "react-icon.png",
      alt: "Icono React Lenguaje de Programación",
      nivel: "49"
    },
    {
      imgSkill: "github-icon.png",
      alt: "Icono Github",
      nivel: "55"
    }
  ];

  const iconosSkills = listadoSkill.map(element => (
    <svg className="svg-skills" width="200" height="200">
      <circle className="progress-bar" />
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
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "16px"
        }}
      >
        {iconosSkills}
      </div>
    </div>
  );
}
