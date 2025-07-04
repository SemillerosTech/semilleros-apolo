import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra CH</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            La lectura lleva más contenido que las que se han manejado hasta
            ahora, es importante que los niños comiencen a ver textos más largos
            para manejar la cantidad de letras a las que se enfrentarán. Esta
            actividad se puede hacer en grupos para apoyarse y ampliar
            vocabulario.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Buscar videos sobre productos tradicionales enriquece la cultura e
            historia de los niños. Combinar lecturas con experiencias cotidianas
            como comprar o tomar chocolate ayuda a la comprensión y al
            vocabulario.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/4cWtW2f7bLM?si=EDhWjw1GbIy142OV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Historia del chocolate (Video)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/943kC6XHUq8?si=RAAWO0v_eqymqMy_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Historia del chocolate (Video)
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
