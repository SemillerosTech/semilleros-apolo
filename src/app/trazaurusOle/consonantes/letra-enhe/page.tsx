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
            La lectura de esta letra es más difícil, pero es importante mostrar
            nuevas palabras para aumentar vocabulario y destreza. Se puede leer
            en grupo para que se apoyen y practiquen.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Leer juntos es un reto complejo, pero importante para avanzar en
            lectoescritura y autoestima. Leer cuentos en voz alta estimula
            interés y crea momentos de convivencia.
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
