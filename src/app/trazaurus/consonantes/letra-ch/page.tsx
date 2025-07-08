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
            La lectura lleva mas contenido que las que se han manejado hasta
            ahora, es importante que los niños comiencen a ver textos más largos
            para poder manejar la cantidad de letras a las que se enfrentarán
            eventualmente. Esta actividad se puede dividir en grupos para que
            puedan y empiecen a leer juntos, aunque no comprendan todas las
            palabras, el objetivo es comenzar a trabajar en parejas o tríos y
            que puedan apoyarse entre ellos para la lectura y el reconocimiento
            de las letras. Además de ampliar su vocabulario y comenzar a notar
            si algunos ya iniciaron la comprensión lectora.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Buscar videos para conocer acerca de nuestros productos
            tradicionales es enriquecer la vida cultural e histórica de los
            niños, los videos pequeños permiten que comprendan rápidamente una
            historia y qye puedan enriquecerla o comentarla con actividades como
            ir a comprar chocolate en el mercado, o tomar chocolate en algún
            lugar cercano a la casa. Combinar las lecturas con experiencias
            ayuda a la comprensión del mundo en el que viven y aumentan su
            vocabulario e integración a la familia.
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
