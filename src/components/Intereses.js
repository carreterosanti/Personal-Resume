import React from "react";

export default function Intereses(props) {
  const listadoIntereses = [
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-crossfit-icon.png"
        : "crossfit-icon.png",
      label: "Crossfit",
    },
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-design-icon.png"
        : "design-icon.png",
      label: "Diseño",
    },
    {
      srcInteresImg: props.darkMode ? "dark-mode-car-icon.png" : "car-icon.png",
      label: "Autos",
    },
    {
      srcInteresImg: props.darkMode ? "dark-mode-ski-icon.png" : "ski-icon.png",
      label: "Esquí",
    },
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-coffee-icon.png"
        : "coffee-icon.png",
      label: "Café",
    },
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-photography-icon.png"
        : "photography-icon.png",
      label: "Fotografía",
    },
  ];

  const iconosIntereses = listadoIntereses.map((element) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "15px",
      }}
    >
      <img
        className="interes-icon"
        src={require("./images/" + element.srcInteresImg)}
        alt={element.label + " Icon"}
      />
      <p style={{ margin: "5px 0px", fontSize: "16px" }}>{element.label}</p>
    </div>
  ));

  return (
    <div className="middle-section">
      <h2>Hobbies & Intereses</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {iconosIntereses}
      </div>
    </div>
  );
}
