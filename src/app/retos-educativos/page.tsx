import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import React from "react";
import retosEducativos from "../../../public/retos-educativos.jpg";

const page = () => {
  return (
    <SubModuleLayout
      sectionTitle="Retos Educativos"
      bannerImg={retosEducativos}
    >
      <section className="space-y-10">
        <h2 className="font-semibold">
          Los Cuatro Retos Educativos que Abordamos
        </h2>

        <p>
          Semilleros de Sentido, A.C. se enfoca en cuatro retos educativos
          cruciales que afectan el bienestar emocional de niños y adolescentes
          en México:
        </p>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            1. Prevención del suicidio infantil y adolescente
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;El que tiene un por qué para vivir, puede soportar casi
            cualquier cómo&quot;
            <span className="font-normal">
              (Nietzsche, citado por Frankl, 1946/1991, p. 109)
            </span>
            .
          </blockquote>
          <p>
            Desarrollamos herramientas para la detección temprana de señales de
            riesgo y para fortalecer los recursos internos que permiten a niños
            y adolescentes encontrar alternativas al pensamiento suicida.
            Nuestra aproximación logoterapéutica les ayuda a descubrir
            significado y propósito incluso en medio de circunstancias
            dolorosas.
          </p>
        </article>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            2. Prevención de conductas autodestructivas
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;La libertad del ser humano implica que puede cambiar en
            cualquier momento&quot;
            <span className="font-normal">(Frankl, 2004, p. 154)</span>.
          </blockquote>
          <p>
            Nuestro enfoque ayuda a identificar y transformar conductas como
            autolesiones, trastornos alimenticios, adicciones tempranas y otros
            comportamientos de riesgo, mediante el fortalecimiento de la
            autoestima y la responsabilidad personal.
          </p>
        </article>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            3. Disminución de la violencia
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;Entre estímulo y respuesta hay un espacio. En ese espacio está
            nuestro poder de elegir nuestra respuesta. En nuestra respuesta yace
            nuestro crecimiento y nuestra libertad&quot;
            <span className="font-normal">(Frankl, 2004, p. 179)</span>.
          </blockquote>
          <p>
            Trabajamos para reducir la violencia escolar, familiar y digital a
            través de herramientas que desarrollan la empatía, el respeto por la
            unicidad del otro, y la capacidad de resolver conflictos de manera
            constructiva.
          </p>
        </article>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            4. Prevención de la depresión y ansiedad
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;No es la angustia en sí misma lo patológico, sino la actitud
            incorrecta que adoptamos hacia ella&quot;
            <span className="font-normal">(Frankl, 2003, p. 202)</span>.
          </blockquote>
          <p>
            Ofrecemos estrategias logoterapéuticas específicas para que niños y
            adolescentes puedan enfrentar los desafíos emocionales
            contemporáneos, reconocer sus recursos internos y desarrollar la
            actitud adecuada ante la adversidad.
          </p>
        </article>
      </section>
    </SubModuleLayout>
  );
};

export default page;
