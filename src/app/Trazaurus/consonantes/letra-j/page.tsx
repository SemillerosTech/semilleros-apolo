// LetraJ.tsx
import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const LetraJ = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra J</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Las labores domésticas son una manera de que los niños desarrollen
            sentido de pertenencia a sus espacios. En la escuela puede iniciarse
            el cuidado de sus cosas, lo cual les da herramientas para convivir y
            mejorar su integración.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Los niños pueden realizar tareas sencillas del hogar, lo cual mejora
            su observación, cuidado de sus cosas y autonomía. También puedes
            identificar qué tareas les gustan más.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://nuevaescuelamexicana.sep.gob.mx/detalle-ficha/4480/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nueva Escuela Mexicana
              </a>
            </li>
            <li>
              <a
                href="https://www.serpadres.es/educacion/46758.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tareas para niños pequeños
              </a>
            </li>
            <li>
              <a
                href="https://tucolegioideal.com/tareas-del-hogar-kinder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tareas de Kinder
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default LetraJ;
