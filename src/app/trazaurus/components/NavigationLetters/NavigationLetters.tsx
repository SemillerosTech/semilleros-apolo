import React from "react";
import Image from "next/image";
import rino from "../../../../../public/trazarus/rino.png";
import moradin from "../../../../../public/trazarus/moradin.png";
import { consonantes, vocales } from "../../constants";
import Link from "next/link";
import LetterTiles from "../LetterTiles/LetterTiles";

const NavigationLetters = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-trazaurusbanner bg-blend-multiply after:bg-black/50 after:absolute after:top-0 after:left-0 after:w-full after:h-full relative after:z-0">
        <div className="px-4 mx-auto  text-center py-24 lg:scroll-py-36 z-10 relative">
          <h1 className="mb-4 text-6xl  tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Material Complementario
          </h1>
          <p className="font-semibold mb-8 text-lg text-white lg:text-xl sm:px-16 lg:px-48">
            Donde la aventura continua, estás en el sentido correcto! <br />
          </p>
          <Link
            className="text-white bg-trazaurusBlue rounded-full py-3 px-10 font-bold mt-4 text-xl"
            href="#vocales"
          >
            Encuentra tu letra aquí
          </Link>
        </div>
      </section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <section className="py-20 px-4">
          <h2 className="mb-4 text-center">
            ¿Qué es <b className="text-trazaurusOrange">Trazaurus</b>?
          </h2>

          <Image
            src={rino}
            alt="Rino"
            className="w-full lg:w-1/2 mx-auto my-6"
          />

          <p className="text-center">
            <b className="text-trazaurusOrange">TRAZAURUS</b> es una serie
            educativa creada para acompañar el proceso de lectoescritura de
            niñas y niños desde un enfoque lúdico, visual y significativo. Está
            alineada con los principios de la Nueva Escuela Mexicana {"(NEM)"},
            la cual promueve la vinculación entre el conocimiento académico y la
            experiencia vivencial de cada comunidad. A través de actividades que
            pueden compartirse en casa y en el aula, Trazaurus enriquece el
            desarrollo comunitario y familiar, favoreciendo la participación
            activa de los estudiantes en su propio aprendizaje. Además,
            incorpora personajes —los Dinos de Trazaurus— que se convierten en
            compañeros constantes durante toda la serie, generando conexión
            emocional y continuidad en su formación.
          </p>
        </section>

        <section className="py-20 px-4">
          <h2 className="mb-4 text-center">
            ¿Cómo me ayuda <b className="text-trazaurusPurpple">Trazaurus</b>?
          </h2>

          <Image
            src={moradin}
            alt="Rino"
            className="w-full lg:w-1/2 mx-auto my-6"
          />

          <p className="text-center">
            La serie <b className="text-trazaurusPurpple">TRAZAURUS </b>
            fortalece el reconocimiento de vocales y consonantes mediante
            actividades lúdicas que amplían el vocabulario y la comprensión del
            entorno. También apoya la identificación y el trazo de todas las
            letras, en mayúsculas y minúsculas, con indicadores de trazo que
            guían al estudiante paso a paso. Las actividades están diseñadas
            para vivenciar el uso de cada letra, reforzando así su aplicación
            práctica. Además, Trazaurus fomenta la conciencia fonológica a
            través de la escucha activa y participativa de lecturas asociadas a
            cada letra, contenidas en el libro de lecturas de la serie,
            promoviendo así una comprensión más profunda del lenguaje.
          </p>
        </section>
      </div>

      <section id="vocales" className="container mx-auto py-10 px-4">
        <h2 className="mb-4 text-center">
          Selecciona tu <b className="text-trazaurusBlue">VOCAL</b> para
          comenzar
        </h2>

        <LetterTiles letters={vocales} />

        <h2 className="mb-4 text-center mt-20">
          Selecciona tu <b className="text-trazaurusPurpple">CONSONANTE </b>
          para comenzar
        </h2>

        <LetterTiles letters={consonantes} />
      </section>
    </>
  );
};

export default NavigationLetters;
