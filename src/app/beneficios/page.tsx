import React from "react";
import Image from "next/image";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import brochure from "../../../public/brochure.jpg";
import quienesomos from "../../../public/quienes-somos-logoterapia.png";
import objetivo from "../../../public/objetivo-logoterapia-semilleros-de-sentido.png";
import semilla from "../../../public/icons/semilla.png";
import beneficios from "../../../public/beneficios-para-el-alumno.png";
import cambiemos from "../../../public/cambiemos-al-mundo.png";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Beneficios" bannerImg={brochure}>
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
    </SubModuleLayout>
  );
};

export default page;
