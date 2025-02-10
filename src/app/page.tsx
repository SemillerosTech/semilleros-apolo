import "animate.css";
import Image from "next/image";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import banner from "../../public/semilleros-de-sentido-logo-terapia-en-accion-banner.jpg";
import bannerMobile from "../../public/banner-mobile.jpg";
import quienesomos from "../../public/quienes-somos-logoterapia.png";
import objetivo from "../../public/objetivo-logoterapia-semilleros-de-sentido.png";
import semilla from "../../public/icons/semilla.png";
import backshapes from "../../public/back-shapes.svg";
import beneficios from "../../public/beneficios-para-el-alumno.png";
import donativo from "../../public/donativo.png";
import cambiemos from "../../public/cambiemos-al-mundo.png";
import contactanos from "../../public/contactanos.png";
import NewsLetterForm from "./components/NewsLetterForm/NewsLetterForm";

export default function Home() {
  return (
    <>
      <Header />
      <Image
        src={backshapes}
        alt="Imagenes de fondo "
        className="fixed -z-10 w-2/3 right-20 opacity-30 top-10"
      />
      {/* MAIN BANNER */}
      <section className="h-fit animate__animated animate__fadeInLeft">
        <Image
          src={banner}
          alt="Menu principal"
          className="hidden md:block w-full"
        />

        <Image
          src={bannerMobile}
          alt="Menu principal"
          className="md:hidden w-full"
        />
      </section>

      <section
        id="quienes-somos"
        className="container mx-auto text-center py-20 px-10 relative z-0 "
      >
        {/* QUIENES SOMOS */}
        <div id="quienes-somos">
          <h1>SEMILLEROS DE SENTIDO</h1>

          <Image
            src={quienesomos}
            alt="Menu principal"
            className="w-8/12 md:w-3/12 mx-auto my-10 drop-shadow-md floating-image"
          />
          <p>
            Somos una <b>asociación civil en México</b> dedicada a promover los
            principios de la{" "}
            <b>
              Logoterapia de Viktor E. <br className="hidden md:block" />
              Frankl.
            </b>{" "}
            Trabajamos para inspirar la
            <b> búsqueda de propósito y significado en la vida, </b>
            enfocándonos <br className="hidden md:block" />
            especialmente en niños, adolescentes y el ámbito educativo,
            fomentando el crecimiento personal y el
            <br className="hidden md:block" /> empoderamiento.
          </p>
        </div>

        {/* OBEJTIVO */}

        <div
          id="objetivo"
          className="flex flex-col md:flex-row items-center justify-center my-20 gap-10"
        >
          <Image
            src={objetivo}
            alt="Menu principal"
            className="w-10/12 md:w-2/6 my-10 floating-image"
          />

          <div className="w-10/12 md:w-2/6 flex flex-col">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className=" my-3">Objetivo del Programa</h2>

            <p>
              Ofrecemos <b>talleres gratuitos</b> dentro del plantel para
              fortalecer las habilidades socioemocionales de los alumnos,
              proporcionando herramientas prácticas para gestionar sus
              emociones.
            </p>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="container mx-auto  py-20 relative z-0"
      >
        {/* BENEFICIOS */}
        <div className="flex flex-col md:flex-row  items-center justify-center my-20 gap-10">
          <div className="w-10/12 md:w-5/12 flex flex-col order-2 md:order-1 text-center md:text-left">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto md:right-20 relative animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className=" my-3">Beneficios para el alumno</h2>

            <ul className=" list-disc marker:text-main">
              <li>
                <b>Autoestima y manejo emocional:</b> Fomentar la autoconfianza
                y el autocontrol.
              </li>

              <li>
                <b>Empatía y habilidades sociales:</b> Crear un ambiente de
                respeto y colaboración.
              </li>
              <li>
                <b>Fortaleza:</b> Prepararlos para enfrentar los desafíos
                escolares y personales.
              </li>
            </ul>
          </div>

          <Image
            src={beneficios}
            alt="Menu principal"
            className="w-10/12 md:w-2/6 my-10 floating-image order-1 md:order-2"
          />
        </div>
      </section>

      <section id="donativo" className="container mx-auto text-center px-5">
        <Image
          src={semilla}
          alt="Menu principal"
          className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
        />
        <h2 className=" my-3">Donativo para tu escuela</h2>

        <p className="mb-20">
          Tu escuela recibirá un donativo valorado en <b>$45,000 MXN</b> en
          talleres, <br className="hidden md:block" />
          conferencia y <b>asesorías psicológicas exclusivas</b> para los
          maestros, alumnos y <br className="hidden md:block" />
          padre de familia.
        </p>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto w-5/6 md:w-3/6">
            <ul className="text-left list-disc marker:text-main">
              <li>
                <b>Talleres para maestros:</b> Estrategias para el bienestar
                emocional en el aula, técnicas de comunicación empática.
              </li>

              <li>
                <b>Talleres para padres:</b> Los padres recibirán talleres
                enfocados en estrategias de comunicación efectiva con sus hijos,
                apoyo emocional y bienestar familiar, uso responsable de la
                tecnología, desarrollo socioemocional de los niños, manejo de
                crisis y situaciones de estrés, y fomento de la autoestima y
                autonomía en los hijos.
              </li>
              <li>
                <b>Conferencia:</b> Actualización en HERRAMIENTAS
                SOCIOEMOCIONALES, manejo de crisis emocionales en los maestros
                recordar TU SENTIDO DE VIDA.
              </li>
              <li>
                <b>TALLERES:</b>
                HERRAMIENTAS personalizadas para los docentes en relación con la
                salud mental en el contexto escolar y personal.
              </li>
            </ul>
          </div>

          <div className="w-5/6 mt-5 md:mt-auto md:w-2/6">
            <Image
              src={donativo}
              alt="Menu principal"
              className="w-auto mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-main text-white text-center p-5 ">
        <h3 className="text-5xl drop-shadow-md">
          CONTAMOS CON EL APOYO DE EMPRESAS QUE EMPATIZAN CON LA CAUSA{" "}
        </h3>
      </section>

      <section id="fases" className="container mx-auto text-center py-20 ">
        <Image
          src={semilla}
          alt="Menu principal"
          className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
        />
        <h2 className=" mt-3">FASES DEL PROGRAMA</h2>

        <h3 className="text-4xl mb-20">
          Etapas del Programa de Apoyo Socioemocional en el Aula
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src={cambiemos}
            alt="Menu principal"
            className="w-full md:w-2/6"
          />

          <ol className="w-5/6 md:w-1/2 text-left list-decimal marker:text-main ml-5 md:ml-20  text-2xl mt-10 md:mt-auto">
            <li className="mb-20">
              {" "}
              <b> Conferencia de apertura:</b> Presentación de conceptos clave
              como la logoterapia y su aplicación en el entorno escolar.
            </li>

            <li className="mb-20">
              <b> Evaluación inicial: </b>Aplicación de pruebas emocionales para
              entender el estado socioemocional de los alumnos.
            </li>

            <li className="mb-20">
              <b>Talleres para alumnos:</b> 15 sesiones prácticas para que los
              estudiantes desarrollen habilidades emocionales en el aula.
            </li>

            <li className="mb-20">
              <b>Capacitación para docentes: </b>Talleres y asesorías en
              técnicas de bienestar emocional, comunicación empática y manejo de
              emociones en el aula.
            </li>

            <li>
              <b>Evaluación final y seguimiento:</b> Evaluación de avances y
              retroalimentación para fortalecer la gestión emocional en el aula.
            </li>
          </ol>
        </div>
      </section>

      <section
        id="contacto"
        className="container mx-auto text-center pt-20 hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-1/2 flex items-end order-2 md:order-1">
            <Image
              src={contactanos}
              alt="Contactanos"
              className="w-[80%] mx-auto"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className=" mt-3 mb-10">CONTACTANOS</h2>
            <p className="mb-5">
              Nos importa mucho lo que nos quieras comunicar
            </p>
            <NewsLetterForm />

            {/* TOAST MENSAJE ENVIADO */}
            <div
              className="flex items-center w-full p-4 mb-4 text-white bg-green-500 rounded-lg shadow-sm hidden"
              role="alert"
            >
              <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ms-3 text-2xl font-normal">
                Mensaje enviado exitosamente
              </div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                data-dismiss-target="#toast-success"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
