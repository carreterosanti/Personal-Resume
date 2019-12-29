import React from "react";
import Modal from "./Modal";

export default function InfoProyecto(props) {
  return (
    <Modal
      darkMode={props.darkMode}
      title="Titulo Proyecto"
      content={<div> Hola </div>}
      show={props.show}
      closeControl={props.closeControl}
    />
  );
}
