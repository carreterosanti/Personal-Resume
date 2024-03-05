import React from "react";

export default function Skills(props) {
  const listadoSkill = [
    {
      imgSkill: "angular-icon.png",
      alt: "Logo Angular Framework para desarrollo Web",
      nivel: "60",
      color: "#0277BD",
      nombre: "Angular",
    },
    {
      imgSkill: "typescript.png",
      alt: "Logo Typescript",
      nivel: "60",
      color: "#00D8FF",
      nombre: "Typescript",
    },
    {
      imgSkill: "sass.svg",
      alt: "Logo Sass",
      nivel: "60",
      color: "#F0DB4F",
      nombre: "Sass",
    },
    {
      imgSkill: "rxjs.svg",
      alt: "Logo RxJS",
      nivel: "60",
      color: "#F0DB4F",
      nombre: "RxJS",
    },

    {
      imgSkill: "ngrx.svg",
      alt: "Logo NgRx",
      nivel: "75",
      color: "#3ddc84",
      nombre: "NgRx",
    },
  ];

  const iconosSkills = listadoSkill.map((element) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 20px",
      }}
    >
      <img
        src={require("./images/" + element.imgSkill)}
        className="svg-image"
        alt={"Icono Skill " + element.nombre}
      />
      <p style={{ marginTop: "5px" }}>{element.nombre}</p>
    </div>
  ));

  return (
    <div className="middle-section">
      <h2>IT Skills</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "25px",
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
