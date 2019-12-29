import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import "./components-style.css";
import { listadoProyectosPortfolio } from "./data-materias.js";
import InfoProyecto from "./InfoProyecto";

export default function Portfolio(props) {
  const [showInfoProyecto, setInfoProyecto] = useState(false);
  const [tituloInfoProyecto, setTituloInfoProyecto] = useState();
  const [descripcionInfoProyecto, setDescripcionInfoProyecto] = useState();
  const [participacionInfoProyecto, setParticipacionInfoProyecto] = useState();
  const [desarrolloInfoProyecto, setDesarrolloInfoProyecto] = useState();
  const [
    linkRepositorioInfoProyecto,
    setlinkRepositorioInfoProyecto
  ] = useState();
  const [imagenInfoProyecto, setImagenInfoProyecto] = useState([]);

  function controllInfoProyecto(
    titulo,
    descripcion,
    participacion,
    desarrollo,
    linkRepositorio,
    imagen
  ) {
    setTituloInfoProyecto(titulo);
    setDescripcionInfoProyecto(descripcion);
    setParticipacionInfoProyecto(participacion);
    setDesarrolloInfoProyecto(desarrollo);
    setlinkRepositorioInfoProyecto(linkRepositorio);
    setImagenInfoProyecto(imagen);
  }

  function controllShowInfoProyecto() {
    setInfoProyecto(prevState => {
      return !prevState;
    });
  }

  const listadoProyectos = listadoProyectosPortfolio.map(element => {
    return (
      <PortfolioItem
        titulo={element.titulo}
        urlTecnologias={element.urlTecnologias}
        descripcion={element.descripcion}
        darkMode={props.darkMode}
        wave={element.wave}
        onClick={() => {
          controllInfoProyecto(
            element.titulo,
            element.descripcionExtendida,
            element.participacion,
            element.desarrollo,
            element.linkRepositorio,
            element.urlImagen
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
          justifyContent: "space-between",
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
      />

      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
