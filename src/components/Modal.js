import React from "react";

export default function Modal(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

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
          <h3 style={{ marginTop: "0px" }}>{props.title}</h3>
          <img
            className="clickable"
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
        <div
          style={{ margin: "0px" }}
          className={props.darkMode ? "dark-break-line" : "light-break-line"}
        ></div>
        <div style={{ overflowY: "scroll", padding: "20px", maxWidth: "100%" }}>
          {props.content}
        </div>
      </div>
    </div>
  );
}

/* Requiere recibir mediante props lo siguiente: 
    darkMode={props.darkMode}
    title="Titulo del Model"
    content={contenidoDivPrincipal}
    show={props.show}
    closeControl={props.closeControl} 


    Y definir el siguiente state en el componente que lo invoca
    const [showListadoMaterias, setShowListadoMaterias] = useState(false);

    function controllShowListadoMaterias() {
        setShowListadoMaterias(prevState => {
            return !prevState;
         });
  }
*/
