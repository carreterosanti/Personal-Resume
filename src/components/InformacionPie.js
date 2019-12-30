import React from "react";

export default function InformacionPie() {
  return (
    <div className="bottom-section">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <a
          href="mailto:santiago.carretero@outlook.com"
          style={{ maxHeight: "32px" }}
        >
          <img
            className="bottom-icon"
            src={require("./images/mail-icon.png")}
          />
        </a>

        <p style={{ color: "#f7f7f7", margin: "0px" }}>
          santiago.carretero@outlook.com
        </p>

        <a
          href="https://www.linkedin.com/in/santiagocarretero"
          style={{ maxHeight: "32px" }}
        >
          <img
            className="bottom-icon"
            src={require("./images/linkedIn-icon.png")}
          />
        </a>
        <a href="https://vsco.co/carreterosanti" style={{ maxHeight: "32px" }}>
          <img
            className="m-bottom-icon"
            src={require("./images/vsco-icon.png")}
          />
        </a>
      </div>
    </div>
  );
}