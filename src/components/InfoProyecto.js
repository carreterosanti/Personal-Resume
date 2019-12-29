import React from "react";
import Modal from "./Modal";

export default function InfoProyecto(props) {
  const imagenes = props.imagen.map(element => {
    return (
      <img
        style={{ maxHeight: "500px", marginRight: "10px", maxWidth: "100%" }}
        src={element}
        alt="Imagen Proyecto"
      />
    );
  });

  const parrafoPorElementoDescripcion = props.descripcion.map(element => (
    <p className="none-top-margin">{element}</p>
  ));
  const parrafoPorElementoParticipacion = props.participacion.map(element => (
    <p className="none-top-margin">{element}</p>
  ));
  const parrafoParticipacion =
    props.participacion.length > 0 ? (
      <div>
        <h3 className="h3-small-sub-titulo">Participación</h3>
        {parrafoPorElementoParticipacion}
      </div>
    ) : (
      <div></div>
    );

  const contenido = (
    <div className="div-info-proyecto">
      <div className="text-info-proyecto">
        {parrafoPorElementoDescripcion}
        {parrafoParticipacion}
        <div>
          <h3 className="h3-small-sub-titulo">Desarrollo</h3>
          <p className="small-top-margin">{props.desarrollo}</p>
        </div>
        <a style={{ color: "#1565C0" }} href={props.linkRepositorio}>
          Repositorio Proyecto {props.titulo}
        </a>
      </div>
      <div className="slider-img-info-proyecto">{imagenes}</div>
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
