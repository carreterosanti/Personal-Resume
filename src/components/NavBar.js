import React from "react";
import "./components-style.css";

export default function NavBar(props) {
  // const fechaNacimientoSantiagoCarretero = new Date(1995, 12, 26);
  // function getEdad(fechaNacimiento) {
  //   var diferenciaMilisegundos = Date.now() - fechaNacimiento.getTime();
  //   var edad = new Date(diferenciaMilisegundos);
  //   return Math.abs(edad.getUTCFullYear() - 1970);
  // }

  return (
    <div className="main-nav-bar-div">
      <div className="main-name-div">
        <h1 className="main-name">Santiago Carretero</h1>
        <p style={{ margin: "10px 0px" }}>Mar del Plata, Argentina</p>
        <p style={{ margin: "10px 0px" }}>25 años</p>
        <a
          href="mailto:santiago.carretero@outlook.com"
          className="clickable-text"
          style={
            props.darkMode
              ? { fontSize: "16px", color: "#fafafa", margin: "10px 0px" }
              : { fontSize: "16px", color: "#333", margin: "10px 0px" }
          }
        >
          santiago.carretero@outlook.com
        </a>
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
