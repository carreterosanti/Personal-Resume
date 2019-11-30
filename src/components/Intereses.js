import React from "react";

export default function Intereses(props) {
  const listadoIntereses = [
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-crossfit-icon.png"
        : "crossfit-icon.png",
      label: "Crossfit"
    },
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-design-icon.png"
        : "design-icon.png",
      label: "Diseño"
    },
    {
      srcInteresImg: props.darkMode ? "dark-mode-car-icon.png" : "car-icon.png",
      label: "Autos"
    },
    {
      srcInteresImg: props.darkMode ? "dark-mode-ski-icon.png" : "ski-icon.png",
      label: "Esquí"
    },
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-coffee-icon.png"
        : "coffee-icon.png",
      label: "Café"
    }
  ];

  const iconosIntereses = listadoIntereses.map(element => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img
        className="interes-icon"
        src={require("./images/" + element.srcInteresImg)}
      />
      <h4 style={{ margin: "1px 0px", fontWeight: "450" }}>{element.label}</h4>
    </div>
  ));

  return (
    <div className="middle-section">
      <h2>Hobbies & Intereses</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px"
        }}
      >
        {iconosIntereses}
      </div>

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
