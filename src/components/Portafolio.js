import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";
import { listadoProyectosPortfolio, listadoReferencias } from "./data-file.js";
import InfoProyecto from "./InfoProyecto";

export default function Portfolio(props) {
  const [showInfoProyecto, setInfoProyecto] = useState(false);
  const [tituloInfoProyecto, setTituloInfoProyecto] = useState();
  const [descripcionInfoProyecto, setDescripcionInfoProyecto] = useState([]);
  const [participacionInfoProyecto, setParticipacionInfoProyecto] = useState(
    []
  );
  const [desarrolloInfoProyecto, setDesarrolloInfoProyecto] = useState();
  const [
    linkRepositorioInfoProyecto,
    setlinkRepositorioInfoProyecto
  ] = useState();
  const [imagenInfoProyecto, setImagenInfoProyecto] = useState([]);
  const [linkWebInfoProyecto, setLinkWebInfoProyecto] = useState();

  function controllInfoProyecto(
    titulo,
    descripcion,
    participacion,
    desarrollo,
    linkRepositorio,
    imagen,
    linkWeb
  ) {
    setTituloInfoProyecto(titulo);
    setDescripcionInfoProyecto(descripcion);
    setParticipacionInfoProyecto(participacion);
    setDesarrolloInfoProyecto(desarrollo);
    setlinkRepositorioInfoProyecto(linkRepositorio);
    setImagenInfoProyecto(imagen);
    setLinkWebInfoProyecto(linkWeb);
  }

  function controllShowInfoProyecto() {
    setInfoProyecto(prevState => {
      return !prevState;
    });
  }

  const ultimoItemProyectoImpar =
    listadoProyectosPortfolio.length % 2
      ? listadoProyectosPortfolio.length - 1
      : undefined;

  const listadoProyectos = listadoProyectosPortfolio.map((element, i) => {
    var esUltimoEImpar =
      ultimoItemProyectoImpar !== undefined && ultimoItemProyectoImpar === i
        ? true
        : false;

    return (
      <PortfolioItem
        titulo={element.titulo}
        urlTecnologias={element.urlTecnologias}
        descripcion={element.descripcion}
        darkMode={props.darkMode}
        wave={element.wave}
        ultimoEImpar={esUltimoEImpar}
        onClick={() => {
          controllInfoProyecto(
            element.titulo,
            element.descripcionExtendida,
            element.participacion,
            element.desarrollo,
            element.linkRepositorio,
            element.urlImagenes,
            element.linkWeb
          );
          return controllShowInfoProyecto();
        }}
      />
    );
  });

  return (
    <div className="middle-section">
      <h2>Portafolio</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "18px",
          marginBottom: "32px"
        }}
      >
        {listadoProyectos}
      </div>

      <InfoProyecto
        show={showInfoProyecto}
        closeControl={controllShowInfoProyecto}
        darkMode={props.darkMode}
        titulo={tituloInfoProyecto}
        descripcion={descripcionInfoProyecto}
        participacion={participacionInfoProyecto}
        desarrollo={desarrolloInfoProyecto}
        linkRepositorio={linkRepositorioInfoProyecto}
        imagen={imagenInfoProyecto}
        linkWeb={linkWebInfoProyecto}
      />

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
