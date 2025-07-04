import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra K</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Hablar de aquello que más nos gusta comer puede favorecer los temas
            sobre nutrición y sobre el plato del buen comer. Esto nos permite
            conocer sus gustos sobre comida y que también podamos ver si están
            dispuestos a aprender de otros y de lo saludable que son las frutas.
            Realizar dibujos en común puede ayudar mucho al manejo de nuevos
            proyectos y de convivir juntos, además de aprender a compartir
            espacios de trabajo y aprender normas de convivencia en el salón de
            clases.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Las frutas son fuente de minerales y de vitaminas, conocer el gusto
            de los niños y niñas sobre las frutas y los alimentos puede ayudar a
            aumentar su paladar o a ir conociendo también el entorno escolar
            donde se desarrolla, y poder saber si los gustos de otros compañeros
            pueden ayudar a probar nuevos alimentos, sobre todo las frutas y
            verduras dentro de la alimentación diaria. Usar cuentos o videos
            sobre los beneficios del buen comer, o las diferentes frutas o
            verduras, también pueden ayudar a los padres a poder variar la
            alimentación familiar y a probar nuevos sabores. Es importante que
            la familia busque integrar al niño o niña al momento de cocinar
            nuevos sabores.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.guiainfantil.com/ocio/cuentos-infantiles/la-huerta-cuento-para-ninos-que-no-quieren-comer-frutas-o-verduras/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cuento "La Huerta"
              </a>
            </li>
            <li>
              <a
                href="https://dif.slp.gob.mx/wp-content/uploads/2023/03/Temaconociendoverdurasyfrutasaumentandosuconsumo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Temas sobre frutas y verduras
              </a>
            </li>
            <li>
              <a
                href="https://platodelbuencomer.com.mx/cuentos-de-los-alimentos-del-plato-del-buen-comer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cuentos del Plato del Buen Comer
              </a>
            </li>
            <li>
              <a
                href="https://www.personal.unam.mx/Docs/Cendi/frutas.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documento UNAM sobre frutas
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
