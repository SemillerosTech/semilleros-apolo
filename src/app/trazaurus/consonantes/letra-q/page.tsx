import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra Q</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Es una gran oportunidad para revisar aves tradicionales de nuestro
            país y presentárselas a los niños a través de medios digitales para
            que puedan disfrutar de la belleza de los animales y aprovechar para
            platicar sobre la protección de especies en peligro de extinción.
            Aunque el tema puede no ser comprensible para todos, de alguna
            manera es un tema de protección del medio ambiente, algo que
            definitivamente se irá desarrollando a lo largo de sus vidas.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Este tema es importante para poder comenzar la lectura en casa de
            textos más grandes y complejos, como son las leyendas o los mitos,
            de las cuales hay muchísimas en nuestro país. Te dejamos algunas
            bibliografías para que puedas consultar lecturas o videos que apoyen
            el conocimiento de la biodiversidad de nuestro país.
          </p>

          <p>
            Existen también aviarios y zoológicos donde pueden aprender acerca
            de la conservación de las especies y su importancia en el planeta.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/Rsfr4qJ0X0E?si=uKA31BdbVIrqKjWt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video sobre aves
              </a>
            </li>
            <li>
              <a
                href="https://nuevaescuelamexicana.sep.gob.mx/detalle-ficha/9755/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ficha educativa
              </a>
            </li>
            <li>
              <a
                href="https://www.biodiversidad.gob.mx/especies/aves-de-mexico"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aves de México
              </a>
            </li>
            <li>
              <a
                href="https://www.gob.mx/conabio/prensa/aves-de-la-ciudad-de-mexico-una-sinfonia-de-colores"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aves CDMX
              </a>
            </li>
            <li>
              <a
                href="https://pronatura-noroeste.org/educacion/preescolar.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pronatura Noroeste - Educación
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
