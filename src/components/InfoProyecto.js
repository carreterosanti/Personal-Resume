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

  console.log(props.linkWeb);
  const bottomInfoProyecto =
    props.linkWeb !== "" ? (
      <div className="div-bottom-info-proyecto">
        <div
          style={{ marginRight: "10px" }}
          className="div-bottom-info-proyecto"
        >
          <a
            style={{ width: "25px", height: "25px", marginRight: "5px" }}
            href={props.linkWeb}
          >
            <img
              className="bottom-info-proyecto-icon clickable"
              src={require(props.darkMode
                ? "./images/dark-mode-www-icon.png"
                : "./images/www-icon.png")}
              alt="Brochure Icon"
            />
          </a>

          <a
            style={props.darkMode ? { color: "#fafafa" } : { color: "#414141" }}
            className="small-text-mobile-a"
            href={props.linkWeb}
          >
            Link {props.titulo}
          </a>
        </div>
        <div className="div-bottom-info-proyecto">
          <a
            style={{ width: "25px", height: "25px", marginRight: "5px" }}
            href={props.linkRepositorio}
          >
            <img
              className="bottom-info-proyecto-icon clickable"
              src={require(props.darkMode
                ? "./images/dark-mode-repository-code-icon.png"
                : "./images/repository-code-icon.png")}
              alt="Brochure Icon"
            />
          </a>

          <a
            style={props.darkMode ? { color: "#fafafa" } : { color: "#414141" }}
            className="small-text-mobile-a"
            href={props.linkRepositorio}
          >
            Repositorio Proyecto {props.titulo}
          </a>
        </div>
      </div>
    ) : (
      <div className="div-bottom-info-proyecto">
        <div className="div-bottom-info-proyecto">
          <a
            style={{ width: "25px", height: "25px", marginRight: "5px" }}
            href={props.linkRepositorio}
          >
            <img
              className="bottom-info-proyecto-icon clickable"
              src={require(props.darkMode
                ? "./images/dark-mode-repository-code-icon.png"
                : "./images/repository-code-icon.png")}
              alt="Brochure Icon"
            />
          </a>

          <a
            style={props.darkMode ? { color: "#fafafa" } : { color: "#414141" }}
            className="small-text-mobile-a"
            href={props.linkRepositorio}
          >
            Repositorio Proyecto {props.titulo}
          </a>
        </div>
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
