import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra B</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Se puede recurrir a videos cortos para niños de preescolar sobre la
            biografía de Benito Juárez que sea mucho más sencilla para ellos y
            que complemente la información básica de historia de nuestro país.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Es importante comenzar la visita a los museos aprovechando ciertas
            fechas para que los niños reconozcan los espacios culturales e
            históricos de nuestro país. Existen muchos y diversos museos que
            aunque sean visitas cortas por la edad, toda la familia puede
            aprender algún tema de interés en conjunto.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.gob.mx/agroasemex/articulos/213-aniversario-del-natalicio-de-benito-juarez"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Artículo conmemorativo Benito Juárez
              </a>
            </li>
            <li>
              <a
                href="https://www.guiainfantil.com/embarazo/fertilidad/respeto-al-derecho-ajeno-cuento-corto-sobre-benito-juarez-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cuento corto sobre Benito Juárez
              </a>
            </li>
            <li>
              <a
                href="https://www.inehrm.gob.mx/es/inehrm/juarez"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Biografía oficial INEHRM
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
