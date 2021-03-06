import React from "react";

export default function CursosItem(props) {
  return (
    <div className="flex-start-center">
      <a
        className={
          props.darkMode
            ? "dark-mode clickable-text"
            : "light-mode clickable-text"
        }
        href={props.linkref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p style={{ fontSize: "18px", margin: "10px 0px" }}>
          <strong>{props.titulo}</strong> - {props.plataforma}
        </p>
      </a>
    </div>
  );
}
