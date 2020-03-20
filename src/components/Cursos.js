import React from "react";
import CursosItem from "./CursosItem";

export default function Cursos(props) {
  return (
    <div className="middle-section">
      <h2>Cursos</h2>
      <div className="contenido-section">
        <CursosItem
          titulo="Learn React - A comprehensive introduction"
          plataforma="Scrimba"
          darkMode={props.darkMode}
          linkref="https://scrimba.com/g/glearnreact"
        />
        <CursosItem
          titulo="HTML & CSS - crash course"
          plataforma="Scrimba"
          darkMode={props.darkMode}
          linkref="https://scrimba.com/g/ghtmlcss"
        />
        <CursosItem
          titulo="Learn modern JavaScript"
          plataforma="Scrimba"
          darkMode={props.darkMode}
          linkref="https://scrimba.com/g/ges6"
        />
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
