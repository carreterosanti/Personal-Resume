import React from "react";
import Modal from "./Modal";

export default function InfoProyecto(props) {
  const contenido = (
    <div>
      <p>{props.descripcion}</p>
      <h3 class="h3-small-sub-titulo">Participación</h3>
      <p>{props.participacion}</p>
      <h3 class="h3-small-sub-titulo">Desarrollo</h3>
      <p>{props.desarrollo}</p>
      <a style={{ color: "#1565C0" }} href={props.linkRepositorio}>
        Repositorio Proyecto {props.titulo}
      </a>
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
