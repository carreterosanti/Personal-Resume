import React from "react";

export default function WaveGenerator(props) {
  const generatedWaves = props.wave.map(element => (
    <>
      <linearGradient
        id={element.idGradiente}
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
      >
        {element.coloresGradientes.map((gradiente, index) => (
          <stop
            offset={index * (100 / element.coloresGradientes.length) + "%"}
            stop-color={gradiente}
          />
        ))}
      </linearGradient>
      <path
        fill={"url(#" + element.idGradiente + ")"}
        fill-opacity="0.9"
        d={element.d}
      ></path>
    </>
  ));

  return <>{generatedWaves}</>;
}
