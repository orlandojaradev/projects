import React from "react";
import { GrReactjs } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Proyecto({ url, img, titulo, descripcion, tech }) {
  return (
    <article className="contenedor-proyecto">
      <div className="sombra"></div>
      <div className="contenedor-imagen">
        <img src={img} alt={`Imagen de ${titulo}`} />
      </div>
      <h3>{titulo}</h3>
      <p className="descripcion">{descripcion}</p>
      <div className="contenedor-tecnologias">
        <h4>Creado con:</h4>
        <div>
          {tech.map((el) => {
            if (el === "HTML") {
              return <FaHtml5 className="tecnologia html" />;
            }
            if (el === "Javascript") {
              return <IoLogoJavascript className="tecnologia javascript" />;
            }
            if (el === "React") {
              return <GrReactjs className="tecnologia react" />;
            }
            if (el === "Sass") {
              return <FaSass className="tecnologia sass" />;
            }

            return "";
          })}
        </div>
      </div>
      <div className="contenedor-botones">
        <a href={url[1]} target="_blank" rel="noreferrer noopener">
          <FiExternalLink className="demo" />
        </a>
        <a href={url[0]} target="_blank" rel="noreferrer noopener">
          <FaGithub className="github" />
        </a>
      </div>
    </article>
  );
}

export default Proyecto;
