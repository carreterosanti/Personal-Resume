import React from "react";
import Modal from "./Modal";

export default function InfoProyecto(props) {
  console.log("$ " + props.imagen);

  const imagenes = props.imagen.map(element => {
    console.log("L" + element);
    return (
      <img
        style={{ maxHeight: "500px", marginRight: "10px" }}
        src={element}
        alt="Imagen Proyecto"
      />
    );
  });

  const contenido = (
    <div class="div-info-proyecto">
      <div class="text-info-proyecto">
        <p style={{ marginTop: "0px" }}>{props.descripcion}</p>
        <div>
          <h3 class="h3-small-sub-titulo">Participación</h3>
          <p class="small-top-margin">{props.participacion}</p>
        </div>
        <div>
          <h3 class="h3-small-sub-titulo">Desarrollo</h3>
          <p class="small-top-margin">{props.desarrollo}</p>
        </div>

        <a style={{ color: "#1565C0" }} href={props.linkRepositorio}>
          Repositorio Proyecto {props.titulo}
        </a>
      </div>
      <div class="slider-img-info-proyecto">{imagenes}</div>
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
