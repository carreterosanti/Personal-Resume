import React from "react";

export default function InformacionPie() {
  return (
    <div className="bottom-section">
      <a
        href="https://drive.google.com/file/d/14Hl7srjXj6DgEZdZ1g_GXow7YXEojxpQ/view?usp=sharing"
        className="clickable"
        style={{ maxHeight: "32px" }}
        target="_blank"
      >
        <img
          className="bottom-icon"
          src={require("./images/download-resume-pdf-icon.png")}
          alt="Descargar CV"
          title="Descargar CV"
        />
      </a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <div
          className="complete-line-for-small-with"
          style={{ display: "flex", alignItems: "center" }}
        >
          <a
            href="mailto:santiago.carretero@outlook.com"
            className="clickable"
            style={{ maxHeight: "32px" }}
            target="_blank"
          >
            <img
              className="bottom-icon"
              src={require("./images/mail-icon.png")}
              alt="Enviar mail a santiago.carretero@outlook.com"
              title="Enviar mail a santiago.carretero@outlook.com"
            />
          </a>
          <a
            href="mailto:santiago.carretero@outlook.com"
            className="clickable-text"
            style={{ fontSize: "16px", color: "#f7f7f7" }}
            target="_blank"
          >
            <p style={{ margin: "0px" }}>santiago.carretero@outlook.com</p>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/santiagocarretero"
          className="clickable"
          style={{ maxHeight: "32px" }}
          target="_blank"
        >
          <img
            className="bottom-icon"
            src={require("./images/linkedIn-icon.png")}
            alt="LinkedIn"
            title="LinkedIn"
          />
        </a>
        <a
          href="https://vsco.co/carreterosanti"
          className="clickable"
          style={{ maxHeight: "32px" }}
          target="_blank"
        >
          <img
            className="m-bottom-icon"
            src={require("./images/vsco-icon.png")}
            alt="VSCO"
            title="VSCO"
          />
        </a>
      </div>
    </div>
  );
}
