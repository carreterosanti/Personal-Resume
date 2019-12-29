import React from "react";
import Modal from "./Modal";

export default function InfoProyecto(props) {
  console.log(props.imagen);

  const contenido = (
    <div style={{ display: "flex" }}>
      <div
        style={{
          maxWidth: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <p style={{ marginTop: "0px" }}>{props.descripcion}</p>
        <div>
          <h3 class="h3-small-sub-titulo">Participación</h3>
          <p style={{ marginTop: "6px" }}>{props.participacion}</p>
        </div>
        <div>
          <h3 class="h3-small-sub-titulo">Desarrollo</h3>
          <p style={{ marginTop: "6px" }}>{props.desarrollo}</p>
        </div>

        <a style={{ color: "#1565C0" }} href={props.linkRepositorio}>
          Repositorio Proyecto {props.titulo}
        </a>
      </div>
      <div
        style={{
          minHeight: "100%",
          minWidth: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          style={{ maxHeight: "500px" }}
          src={props.imagen}
          alt="Imagen Proyecto"
        />
      </div>
    </div>
  );

  return (
    <Modal
      darkMode={props.darkMode}
      title={props.titulo}
      content={contenido}
      show={props.show}
      closeControl={props.closeControl}
    />
  );
}
