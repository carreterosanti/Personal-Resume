import React from "react";

export default function Skills(props) {
  const listadoSkill = [
    {
      imgSkill: "java-icon.png",
      alt: "Logo Java Lenguaje de Programación",
      nivel: "90",
      color: "#1565C0",
      nombre: "Java",
    },

    {
      imgSkill: "android-icon.png",
      alt: "Logo Android",
      nivel: "75",
      color: "#3ddc84",
      nombre: "Android SDK",
    },
    {
      imgSkill: "css-icon.png",
      alt: "Logo CSS Lenguaje de Programación",
      nivel: "60",
      color: "#0277BD",
      nombre: "CSS",
    },
    {
      imgSkill: "react-icon.png",
      alt: "Logo React Lenguaje de Programación",
      nivel: "60",
      color: "#00D8FF",
      nombre: "React.js",
    },
    {
      imgSkill: "js-icon.png",
      alt: "Logo JavaScript Lenguaje de Programación",
      nivel: "60",
      color: "#F0DB4F",
      nombre: "JavaScript",
    },
    {
      imgSkill: "vue-icon.png",
      alt: "Logo Vue.js",
      nivel: "60",
      color: "#F0DB4F",
      nombre: "Vue.js",
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
