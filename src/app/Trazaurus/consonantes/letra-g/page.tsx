import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra G</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Hablar de relaciones con vecinos y experiencias de otras comunidades
            ayuda a los niños a aumentar vocabulario y fortalecer su desarrollo
            socioemocional y de aprendizaje.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Compartir historias de aventuras o personas cercanas fortalece
            relaciones y capacidades de escucha. Puedes mostrar dibujos o videos
            de cambios en el tiempo relacionados con objetos o tecnología.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://nem.redmagisterial.com/red-magia/planea/147192"
                target="_blank"
                rel="noopener noreferrer"
              >
                Red Magisterial
              </a>
            </li>
            <li>
              <a
                href="https://ru.historicas.unam.mx/handle/20.500.12525/439"
                target="_blank"
                rel="noopener noreferrer"
              >
                UNAM - Históricas
              </a>
            </li>
            <li>
              <a
                href="https://nem.redmagisterial.com/red-magia/planea/221459"
                target="_blank"
                rel="noopener noreferrer"
              >
                Red Magisterial - Planea
              </a>
            </li>
            <li>
              <a
                href="https://nuevaescuelamexicana.sep.gob.mx/detalle-ficha/9701/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nueva Escuela Mexicana
              </a>
            </li>
            <li>
              <a
                href="https://www.culturagenial.com/es/leyendas-mexicanas-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cultura Genial - Leyendas Mexicanas
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
