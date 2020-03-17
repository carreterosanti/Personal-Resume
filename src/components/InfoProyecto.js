import React from "react";
import Modal from "./Modal";
import ItemBottomInfoProyecto from "./ItemBottomInfoProyecto";

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
    <p className="small-top-margin">{element}</p>
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

  const webInfoProyecto = props.linkWeb !== "" && (
    <div className="div-bottom-info-proyecto">
      <div style={{ marginRight: "10px" }} className="div-bottom-info-proyecto">
        <ItemBottomInfoProyecto
          linkWeb={props.linkWeb}
          darkMode={props.darkMode}
          titulo={props.titulo}
          type="web"
        />
      </div>
    </div>
  );

  const repoInfoProyecto = props.linkRepositorio !== "" && (
    <div className="div-bottom-info-proyecto">
      <ItemBottomInfoProyecto
        linkWeb={props.linkRepositorio}
        darkMode={props.darkMode}
        titulo={props.titulo}
        type="repo"
      />
    </div>
  );

  const bottomInfoProyecto = (
    <div className="div-bottom-info-proyecto">
      {webInfoProyecto}
      {repoInfoProyecto}
    </div>
  );

  const contenido = (
    <div className="div-info-proyecto">
      <div className="text-info-proyecto">
        {parrafoPorElementoDescripcion}
        <div>
          <h3 className="h3-small-sub-titulo">Desarrollo</h3>
          <p className="small-top-margin">{props.desarrollo}</p>
        </div>
        {parrafoParticipacion}
        {bottomInfoProyecto}
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
