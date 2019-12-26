import React from "react";
import "./components-style.css";

export default function Perfil(props) {
  console.log(window.innerWidth);
  return (
    <div className="top-section">
      <h2>Perfil</h2>
      <p>
        Ejemplo - During my job experience, I had practical skills with
        interesting technologies, tasks, people. In the whole role of my
        engineering practice include building and supporting web SaaS solutions
        based on Linux/Unix platform in a cloud (AWS) and on-premise, experience
        on server infrastructure migration, monitoring and securing, LAMP, and
        Linux Server setup/administration. Takes the form part in automating,
        supporting and to ensure CI/CD in product developing.
      </p>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
