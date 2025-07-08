// LetraH.tsx
import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const LetraH = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra H</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Es importante que cada niño pueda elaborar un rehilete, que es uno
            de los juguetes tradicionales mexicanos, además de que puedan
            hacerlo con material reciclado que se pida con anterioridad a los
            papás. Estos juguetes hechos por ellos permiten que conecten de
            manera directa con la tradición del país y que puedan mejorar su
            psicomotricidad fina, así como descubrir todos los materiales que se
            pueden reciclar o que al menos no contaminan.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Investiguen juntos cuantos juguetes mexicanos tradicionales existen
            y en donde se venden, es importante recordar que estos juguetes
            conectan con las tradiciones de nuestro país, y que algunos de ellos
            se pueden realizar en casa con materiales a la mano. Existen varios
            videos de elaboración y es una excelente oportunidad de que puedan
            convivir juntos aunque el juguete no quede perfecto, la intención de
            conocer otras partes de la historia del país y de los gustos de la
            familia es importante para reforzar su desarrollo escolar y
            personal.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.elsiglodetorreon.com.mx/noticia/2013/el-juguete-tradicional-mexicano.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artículo sobre juguetes tradicionales
              </a>
            </li>
            <li>
              <a
                href="https://www.mexicodesconocido.com.mx/juguetes-tradicionales-mexicanos.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Juguetes Mexicanos - México Desconocido
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=JuVWjaEIBJE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video sobre elaboración de rehilete
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default LetraH;
