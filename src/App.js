//Iconos
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

//Mi foto
import fotOrlando from "./imagenes/orlando-2.jpg";

//Componentes
import Proyecto from "./componentes/Proyecto";
import Curso from "./componentes/Curso";

function App() {
  const proyectos = [
    {
      url: [
        "https://github.com/orlandojaradev/card_validation",
        "https://orlandojaradev.github.io/card_validation/",
      ],
      img: require("./imagenes/proyecto-card.png"),
      titulo: "Validación de Tarjeta",
      descripcion:
        "Sección interactiva para la validación de datos de una tarjeta crédito/débito.",
      tecnologias: ["HTML", "Sass", "Javascript"],
    },
    {
      url: [
        "https://github.com/orlandojaradev/news_homepage",
        "https://orlandojaradev.github.io/news_homepage/",
      ],
      img: require("./imagenes/proyecto-noticias.png"),
      titulo: "Página de Inicio de Noticias",
      descripcion:
        "En esta interfaz se lleva a cabo el diseño Responsive para brindar una mejor experiencia al usuario.",
      tecnologias: ["HTML", "Sass", "Javascript"],
    },
    {
      url: [
        "https://github.com/orlandojaradev/jobs_filter",
        "https://orlandojaradev.github.io/jobs_filter/#top",
      ],
      img: require("./imagenes/proyecto-empleo.png"),
      titulo: "Lista de Empleos",
      descripcion:
        "Lista de empleos en la cual se pueden usar filtros en base a las categorías seleccionadas.",
      tecnologias: ["HTML", "Sass", "React"],
    },
  ];

  const cursos = [
    {
      sitio: "Udemy",
      titulo: [
        "Curso de HTML5 desde cero: El más completo en Español",
        "https://www.udemy.com/course/el-curso-de-html5-desde-cero-mas-completo/",
      ],
      fecha: "enero 2022",
      certificado: ["Certificado", require("./documentos/CursoHTML.pdf")],
    },
    {
      sitio: "Udemy",
      titulo: [
        "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
        "https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4/",
      ],
      fecha: "enero 2022",
      certificado: ["Certificado", require("./documentos/CursoCSS.pdf")],
    },
    {
      sitio: "jonmircha",
      titulo: ["Curso Javascript", "https://jonmircha.com"],
      fecha: "marzo 2022",
      certificado: [null, null],
    },
    {
      sitio: "freeCodeCamp",
      titulo: [
        "Diseño Web Responsivo",
        "https://freecodecamp.org/learn/2022/responsive-web-design/",
      ],
      fecha: "novimebre 2022",
      certificado: ["Certificado", require("./documentos/Responsive.png")],
    },
    {
      sitio: "freeCodeCamp",
      titulo: [
        "Algoritmos de JavaScript y Estructuras de Datos",
        "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      ],
      fecha: "diciembre 2022",
      certificado: ["Certificado", require("./documentos/Javascript.png")],
    },
    {
      sitio: "Mozilla Developer Network",
      titulo: ["MDN Web Docs", "https://developer.mozilla.org/es/"],
      fecha: "Forever ;)",
      certificado: [null, null],
    },
  ];

  return (
    <div className="contenedor-principal">
      <header className="header">
        <div className="foto-contenedor">
          <img src={fotOrlando} alt="Foto de Orlando" />
        </div>
        <h1>Hola, Soy Orlando</h1>
        <p className="profesion">Desarrollador Frontend</p>
        <p className="origen">Vivo en la Comarca Lagunera, México.</p>
        <div className="contacto">
          <h3>CONTACTO</h3>
          <div className="contacto-iconos">
            <a
              href="mailto:orlandojara92@outlook.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <AiOutlineMail className="icono email" /> Email
            </a>
            <a
              href="https://mx.linkedin.com/in/orlandojaradev"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaLinkedin className="icono linked-in" /> LinkedIn
            </a>
          </div>
        </div>
        <nav className="menu">
          <a className="link-seccion" href="#top">
            Inicio
          </a>
          <a className="link-seccion" href="#seccion1">
            Proyectos
          </a>
          <a className="link-seccion" href="#seccion2">
            Educación
          </a>
        </nav>
      </header>
      <p className="carta">
        Tengo experiencia en construcción de interfaces de usuario.
        <i> ¡Échale un vistazo a mis proyectos!</i> en los que implemento
        principalmente <strong>HTML</strong>, <strong>CSS</strong>,
        <strong> Javascript</strong> y <strong>React</strong>. Seguro que
        podemos hacer un buen equipo. <i>¡Sólo tienes que contactarme!</i>
      </p>
      <main className="contenedor-secciones">
        <section id="seccion1" className="proyectos">
          <h2>Proyectos</h2>
          <div class="contenedor-proyectos">
            {proyectos.map((el) => {
              return (
                <Proyecto
                  url={el.url}
                  img={el.img}
                  titulo={el.titulo}
                  descripcion={el.descripcion}
                  tech={el.tecnologias}
                />
              );
            })}
          </div>
        </section>
        <section id="seccion2" className="educacion">
          <h2>Educación</h2>
          <span class="metodo">100% Autodidacta</span>
          <div class="contenedor-cursos">
            {cursos.map((el) => {
              return (
                <Curso
                  sitio={el.sitio}
                  titulo={el.titulo}
                  fecha={el.fecha}
                  certificado={el.certificado}
                />
              );
            })}
          </div>
        </section>
      </main>
      <footer>
        <span className="autor">Creado por Orlando Jara - 2023 </span>
      </footer>
    </div>
  );
}

export default App;
