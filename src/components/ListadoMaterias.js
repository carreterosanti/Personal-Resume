import React from "react";

export default function ListadoMaterias(props) {
  const showHideClassNmae = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className="modal">
      <div className="modal-content">Hola</div>
    </div>
  );
}
