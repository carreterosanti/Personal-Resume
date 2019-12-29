import React from "react";
import Modal from "./Modal";
import {
  listadoMaterias,
  listadoOptativas,
  listadoReferencias
} from "./data-file";

export default function ListadoMaterias(props) {
  const colorPorCondicion = condicion => {
    if (condicion === "Aprobada pasada") {
      return "#4CAF50";
    } else if (condicion === "Aprobada a pasar") {
      return "#2196F3";
    } else if (condicion === "Final restante") {
      return "#EC407A";
    } else if (condicion === "Cursada restante") {
      return "#78909C";
    }
  };

  const listaMaterias = listadoMaterias.map(element => (
    <div className="div-item-materia">
      <div
        className="circulo-condicion-materia"
        style={{ backgroundColor: colorPorCondicion(element.condicion) }}
      ></div>
      <p style={{ fontSize: "18px" }}>{element.nombreMateria}</p>
    </div>
  ));

  const listaOptativas = listadoOptativas.map(element => (
    <div className="div-item-materia">
      <div
        className="circulo-condicion-materia"
        style={{
          backgroundColor: colorPorCondicion(element.condicion),
          flex: "1"
        }}
      ></div>
      <p style={{ fontSize: "18px" }}>{element.nombreMateria}</p>
    </div>
  ));

  const listaReferencias = listadoReferencias.map(element => (
    <div className="div-item-referencia">
      <div
        className="circulo-condicion-materia-small"
        style={{
          backgroundColor: colorPorCondicion(element.condicion),
          flex: "1"
        }}
      ></div>
      <p style={{ fontSize: "12px" }}>{element.nombreMateria}</p>
    </div>
  ));

  const contenidoListadoMaterias = (
    <div>
      <div>
        <h3 className="h3-sub-titulo">Materias</h3>
        <div className="div-listado-materias">{listaMaterias}</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3 className="h3-sub-titulo">Optativas</h3>
        <div className="div-listado-materias">{listaOptativas}</div>
      </div>
      <div
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
      <div className="div-listado-referencias">{listaReferencias}</div>
    </div>
  );

  return (
    <Modal
      darkMode={props.darkMode}
      title="Ingenieria de Sistemas"
      content={contenidoListadoMaterias}
      show={props.show}
      closeControl={props.closeControl}
    />
  );
}
