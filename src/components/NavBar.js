import React from "react";
import "./components-style.css";

export default function NavBar(props) {
  return (
    <div className="main-nav-bar-div">
      <div className="main-name-div">
        <h1 className="main-name">Santiago Carretero</h1>
        <div style={{ display: "flex" }}></div>
        <p>
          Mar del Plata, Argentina - 26/12/1995 -{" "}
          <a
            href="mailto:santiago.carretero@outlook.com"
            style={{ fontSize: "16px", color: "#333", textDecoration: "none" }}
          >
            santiago.carretero@outlook.com
          </a>
        </p>
      </div>

      <img
        className="profile-image"
        src={require("./images/profile-picture.jpg")}
        alt="Profile picture."
        onClick={props.setDarkMode}
      />
    </div>
  );
}
