import React from "react";

export default function InformacionPie() {
  return (
    <div className="bottom-section">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <img className="bottom-icon" src={require("./images/mail-icon.png")} />
        <p style={{ color: "#f7f7f7" }}>santiago.carretero@outlook.com - </p>
        <img
          className="bottom-icon"
          src={require("./images/linkedIn-icon.png")}
        />
        <img
          className="m-bottom-icon"
          src={require("./images/vsco-icon.png")}
        />
      </div>
    </div>
  );
}
