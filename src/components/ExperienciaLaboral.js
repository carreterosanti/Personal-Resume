import React from "react";

export default function ExperienciaLaboral(props) {
  return (
    <div className="middle-section">
      <h2>Experiencia Laboral</h2>
      <div className="contenido-section">
        <div className="flex-start-center">
          <p style={{ fontSize: "18px" }}>
            <strong>Front-end Technical Leader</strong> /{" "}
            <a
              className={
                props.darkMode
                  ? "dark-mode clickable-text"
                  : "light-mode clickable-text"
              }
              href="https://www.accenture.com/es-es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accenture España (Contractor)
            </a>
          </p>
        </div>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
          }}
        >
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            Lider técnico frontend en Angular de e-commerce con SAP Commerce
            Composable Storefront (a.k.a. SAP Spartacus).
          </p>

          <p
            style={{
              marginTop: "-8px",
            }}
          >
            Angular:
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2C SAP e-commerce, SAP Composable Storefront (a.k.a. Spartacus):
            Industria Financiera{" "}
            <span role="img" aria-label="España">
              🇪🇸
            </span>
          </p>
        </p>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
            color: "grey",
            marginBottom: "0px",
          }}
        >
          Mayo 2023 - Noviembre 2023
        </p>
      </div>
      <div className="contenido-section">
        <div className="flex-start-center">
          <p style={{ fontSize: "18px" }}>
            <strong>Front-end Developer</strong> /{" "}
            <a
              className={
                props.darkMode
                  ? "dark-mode clickable-text"
                  : "light-mode clickable-text"
              }
              href="https://www.qubikdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qubik Digital
            </a>
          </p>
        </div>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
          }}
        >
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            Desarrollo web en Angular de e-commerce con SAP Commerce Composable
            Storefront (a.k.a. SAP Spartacus).
          </p>

          <p
            style={{
              marginTop: "-8px",
            }}
          >
            Angular:
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2C SAP e-commerce, Spartacus Storefront (Multi store): Grupo
            Piero{" "}
            <span role="img" aria-label="Argentina">
              🇦🇷
            </span>
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2B SAP e-commerce, Spartacus Storefront: Clientes Tienda Molinos
            <span role="img" aria-label="Argentina">
              🇦🇷
            </span>
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2C SAP e-commerce, Spartacus Storefront (Multi store): Cintac{" "}
            <span role="img" aria-label="Chile">
              🇨🇱
            </span>
            - Tupemesa{" "}
            <span role="img" aria-label="Perú">
              🇵🇪
            </span>
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2C SAP e-commerce, Spartacus Storefront (Multi store): Grupo de
            marcas de Yáneken{" "}
            <span role="img" aria-label="Chile">
              🇨🇱
            </span>
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2C SAP e-commerce, Spartacus Storefront: Tienda Molinos{" "}
            <span role="img" aria-label="Argentina">
              🇦🇷
            </span>
          </p>
          <p>Vue.js: </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - B2B SAP e-commerce: Martinez & Valdivieso{" "}
            <span role="img" aria-label="Chile">
              🇨🇱
            </span>{" "}
          </p>
          <p
            style={{
              marginTop: "-8px",
            }}
          >
            - CRM Salesforce: Frávega{" "}
            <span role="img" aria-label="Argentina">
              🇦🇷
            </span>
          </p>
        </p>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
            color: "grey",
            marginBottom: "0px",
          }}
        >
          Mayo 2020 - Mayo 2023
        </p>
      </div>
      <div className="contenido-section">
        <div className="flex-start-center">
          <p style={{ fontSize: "18px" }}>
            <strong>Freelance Developer</strong> / Sincronización Sistema de
            Gestión y Tienda Online
          </p>
        </div>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
          }}
        >
          Aplicación Java desarrollada para una empresa privada, la cual deseaba
          sincronizar automáticamente y en forma periódica, las ventas y
          artículos de su tienda online de Tienda Nube, con su sistema de
          gestión Centum Suite. Mi participación dentro del proyecto comprendió
          el desarrollo íntegro del mismo, desde la captura de requerimientos,
          diseño, implementación y configuración para la ejecución automática de
          la aplicación.
        </p>
        <p
          style={{
            marginTop: "-12px",
            marginLeft: "6px",
            color: "grey",
            marginBottom: "0px",
          }}
        >
          Febrero 2020 - Marzo 2020
        </p>
      </div>
      <div
        id="portafolio"
        className={props.darkMode ? "dark-break-line" : "light-break-line"}
      ></div>
    </div>
  );
}
