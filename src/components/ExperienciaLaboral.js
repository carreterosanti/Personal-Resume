import React from "react";

export default function ExperienciaLaboral(props) {
  return (
    <div className="middle-section">
      <h2>Experiencia Laboral </h2>
      <div className="work-experience-div">
        <div style={{ flexGrow: 2 }}>
          {" "}
          <p>
            Ejemplo - During my job experience, I had practical skills with
            interesting technologies, tasks, people. In the whole role of my
            engineering practice include building and supporting web SaaS
            solutions based on Linux/Unix platform in a cloud (AWS) and
            on-premise, experience on server infrastructure migration,
            monitoring and securing, LAMP, and Linux Server
            setup/administration. Takes the form part in automating, supporting
            and to ensure CI/CD in product developing.
          </p>
        </div>
        <div style={{ flexGrow: 1, margin: "0px 60px" }}>
          <img
            className="work-experience-icon"
            src={require(props.darkMode
              ? "./images/dark-mode-element47-icon.png"
              : "./images/element47-icon.png")}
            alt="Profile picture."
          />
        </div>
      </div>

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
