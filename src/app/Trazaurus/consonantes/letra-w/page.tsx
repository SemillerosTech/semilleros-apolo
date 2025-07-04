import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra W</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Hablar de la comida y de las costumbres de otros países es parte del
            conocimiento del mundo que ayuda a ampliar la curiosidad, la
            imaginación y el lenguaje. Es importante usar referencias de niños
            de su edad para ayudar a estimular la curiosidad, como sería la
            música infantil, juegos, juguetes, personajes de animación e
            inclusive dulces típicos o comida especial. Los festejos o fiestas
            también son un modo ameno de conocer otras culturas. Una feria de
            diferentes países con algunas ilustraciones o dibujos puede
            estimular la curiosidad y aumentar habilidades de lenguaje.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            En esta era de la información donde se conocen muchas cosas de otros
            países, a veces la curiosidad sobre sus costumbres, música, comida o
            cosas que les interesen a los niños es una parte fundamental para
            ampliar el mundo y su vocabulario. Acompáñalo en este viaje de
            descubrimiento por medio de redes sociales, usando videos
            educativos, musica, bailes o situaciones que gusten a la familia;
            además sirve para reforzar el conocimiento y la comparativa de las
            diferencias de cada uno de los países y de cómo los podemos ir
            identificando. Esto ayuda a que tengan nuevas actividades familiares
            y que puedan ir conociendo los gustos particulares de sus hij@s.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://blog.vicensvives.com/mundo-cuentos-8-libros-infantiles-conocer-otras-culturas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Libros infantiles para conocer otras culturas
              </a>
            </li>
            <li>
              <a
                href="https://www.conmishijos.com/actividades-para-ninos/cuentos/bellos-cuentos-del-mundo-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cuentos del mundo para niños
              </a>
            </li>
            <li>
              <a
                href="https://www.educaciontrespuntocero.com/libros/libros-de-viajes-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Libros de viajes para niños
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
