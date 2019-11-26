import React from "react";
import { listadoMaterias, listadoOptativas } from "./data-materias";

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

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  console.log("Entro al listado de Materias", showHideClassName);

  return (
    <div className={showHideClassName}>
      <div
        className={
          props.darkMode
            ? "modal-content dark-mode"
            : "modal-content light-mode"
        }
      >
        <div className="top-div-model">
          <h3 style={{ marginTop: "0px" }}>Ingeniería de Sistemas</h3>
          <img
            style={{
              height: "25px",
              width: "25px"
            }}
            src={require(props.darkMode
              ? "./images/dark-mode-close-icon.png"
              : "./images/close-icon.png")}
            alt="Boton para cerrar ventana"
            onClick={props.closeControl}
          />
        </div>
        <div style={{ overflowY: "scroll", padding: "20px", maxWidth: "100%" }}>
          <div>
            <h3 className="h3-sub-titulo">Materias</h3>
            <div className="div-listado-materias">{listaMaterias}</div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3 className="h3-sub-titulo">Optativas</h3>
            <div className="div-listado-materias">{listaOptativas}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
