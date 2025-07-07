// LetraLl.tsx
import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const LetraLl = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra Ll</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Que los niños dibujen las llaves que conocen nos permite saber qué
            tanta interacción tienen con objetos relacionados con su casa; las
            llaves tienen un objetivo para su uso, es importante ayudarlos a
            relacionar objetos con objetivos sobre su uso.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Jugar con los objetos del hogar y que los niños puedan dibujarlos,
            manipularlos y usarlos les ayuda a comprender mejor para qué sirven.
            Estimula su vocabulario, su imaginación y curiosidad.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.ejemplos.co/analogias-por-funcion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analogías por función
              </a>
            </li>
            <li>
              <a
                href="https://www.redmagisterial.com/med/17710-actividad-relacionar-objetos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Actividad para relacionar objetos
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/TNTraBPsu-o?si=ELwlboj0t8mMeOxy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video educativo
              </a>
            </li>
            <li>
              <a
                href="https://www.orientacionandujar.es/2017/05/17/categorizacion-reconocemos-objetos-cotidianos-uso-mas-comun-imagenes/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
              >
                Objetos cotidianos
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default LetraLl;
