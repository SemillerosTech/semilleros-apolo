// LetraN.tsx
import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra Ñ</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            La lectura de esta letra representa un mayor grado de dificultad a
            los anteriores pero es importante mostrar nuevas letras y nuevas
            palabras para ir aumentando el vocabulario y su destreza para la
            identificación de las letras. Podría ejercitarse el que como docente
            leas una parte de la lectura y ellos decidan quien quiere leer en
            voz alta porque ya se siente capaz. También puede ser divertido leer
            todos juntos para que puedan ir practicando como es leer en grupo,
            de esta forma aquellos que todavía se les complica la lectura puedan
            sentirse parte del grupo y no estar evidenciado frente a otros.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Conocer nuevas palabras y leerlas es un reto muy complejo para un
            niño de preescolar, es importante que comiences a leer con ellos
            para que se acostumbren a escuchar nuevas cosas, esto permite que
            puedan avanzar en el proceso de lectoescritura y que cuando entren a
            la primaria puedan avanzar mucho más.
          </p>

          <p>
            La paciencia en este proceso es importante para fortalecer su
            autoestima para su desarrollo escolar. Leerle en voz alta y de
            diferentes cuentos puede ayudarle a estimular su interés por la
            lectura y compartir momentos juntos. Te dejamos algunos links con
            ejercicios para que puedas aplicarlos en casa juntos.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/ikNaKXzN88M?si=KUebTOv7HmhXKGBW"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video educativo 1
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/Wm9A95mX5N8?si=ljFSXCubBFgAgOhf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video educativo 2
              </a>
            </li>
            <li>
              <a
                href="https://www.colorincolorado.org/es/aprender-leer/vocabulario-jardin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorín Colorado - Vocabulario
              </a>
            </li>
            <li>
              <a
                href="https://educacionbasica.sep.gob.mx/wp-content/uploads/2022/12/FICHERO-LECTURA-Y-ESCRITURA-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                SEP - Fichero Lectura y Escritura
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
