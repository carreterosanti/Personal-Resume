import React from "react";
import "./components-style.css";

export default function NavBar(props) {
  const fechaNacimientoSantiagoCarretero = new Date(1995, 12, 26);
  function getEdad(fechaNacimiento) {
    var diferenciaMilisegundos = Date.now() - fechaNacimiento.getTime();
    var edad = new Date(diferenciaMilisegundos);
    return Math.abs(edad.getUTCFullYear() - 1970);
  }

  return (
    <div className="main-nav-bar-div">
      <div className="main-name-div">
        <h1 className="main-name">Santiago Carretero</h1>
        <p>
          Mar del Plata, Argentina - {getEdad(fechaNacimientoSantiagoCarretero)}{" "}
          años -{" "}
          <a
            href="mailto:santiago.carretero@outlook.com"
            className="clickable-text"
            style={
              props.darkMode
                ? { fontSize: "16px", color: "#fafafa" }
                : { fontSize: "16px", color: "#333" }
            }
          >
            santiago.carretero@outlook.com
          </a>
        </p>
      </div>
      <img
        className="profile-image swing"
        src={require("./images/profile-picture.jpg")}
        alt="Profile selfie"
        onClick={props.setDarkMode}
      />
    </div>
  );
}
