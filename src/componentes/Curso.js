import React from "react";

function Curso({ sitio, titulo, fecha, certificado }) {
  return (
    <article className="curso-contenedor">
      <a
        className="sitio"
        href={titulo[1]}
        alt={`Página de ${sitio}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <h3>{sitio}</h3>
      </a>
      <div>
        <span className="aprendizaje">{titulo[0]} - </span>
        <span className="fecha">{fecha}</span>
      </div>
      <a
        className="curso"
        href={certificado[1]}
        download={`${titulo[0]} - Orlando`}
      >
        {certificado[0]}
      </a>
    </article>
  );
}

export default Curso;
