import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <>
      <PageWrapper backButton={true}>
        <section className="p-6 max-w-6xl mx-auto text-gray-800">
          <h1 className="mb-6 w-screen text-trazaurusBlue">Letra U</h1>

          <article className="mb-8">
            <h2 className="mb-2">Actividades complementarias para el aula:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                ¿Qué significa para los niños la unión? Aunque es una palabra no
                reconocida por todos, es importante platicar todas sus
                variantes. Además, trabajar sobre temas como la cercanía, el
                cariño, el afecto y cómo se demuestran.
              </li>
              <li>
                Reconocer palabras que contengan la letra{" "}
                <strong>&quot;U&quot;</strong> tanto al inicio como en medio.
                Además, fortalecer el conocimiento de las demás vocales antes de
                pasar a las consonantes.
              </li>
            </ul>
          </article>

          <article className="mb-8">
            <h2 className="mb-2">Padres de familia:</h2>
            <p className="mb-2">
              Para los niños es importante reconocer a sus seres cercanos, qué
              los hace sentirse unidos y con quiénes tienen confianza. Todo el
              bloque de vocales ha tenido diferentes actividades o lecturas, por
              lo que es importante que puedan repetir la elaboración de alguna
              de ellas para reforzar el aprendizaje de las vocales y su
              reconocimiento y discriminación, facilitando así la combinación
              con las consonantes.
            </p>
            <p>
              Recuerda que la repetición, con algunos otros elementos como
              revistas, cuentos, el periódico, los letreros, las placas de los
              autos, paquetes de comida o del súper, permite que, además de
              familiarizarse con las letras, puedan encontrarlas en diferentes
              tipografías y contextos.
            </p>
          </article>

          <article className="mb-8">
            <h2 className="mb-2">Bibliografía recomendada:</h2>
            <ul className="list-disc list-inside text-blue-600 space-y-2">
              <li>
                <a
                  href="https://laescuelaencasa.mx/escuela-en-casa/alumnos-primaria/socioemocional/archivos/CuentosValores.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Cuentos sobre valores - Escuela en Casa
                </a>
              </li>
              <li>
                <a
                  href="https://aprendiendolasvocalesenpreescolar.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Blog - Aprendiendo las vocales en preescolar
                </a>
              </li>
              <li>
                <a
                  href="https://www.redalyc.org/pdf/798/79890103.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Montealegre, R. y Forero, L. (2006). Desarrollo de la
                  lectoescritura: adquisición y dominio
                </a>
              </li>
            </ul>
          </article>
        </section>
      </PageWrapper>
    </>
  );
};

export default page;
