import React from "react";

export default function Intereses(props) {
  const listadoIntereses = [
    {
      srcInteresImg: "css-icon.png"
    },
    {
      srcInteresImg: "js-icon.png"
    },
    {
      srcInteresImg: "react-icon.png"
    },
    {
      srcInteresImg: props.darkMode
        ? "dark-mode-github-icon.png"
        : "github-icon.png"
    }
  ];

  const iconosIntereses = listadoIntereses.map(element => (
    <img
      className="interes-icon"
      src={require("./images/" + element.srcInteresImg)}
    />
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
