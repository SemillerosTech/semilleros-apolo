import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra F</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Hacer una fila para medirse todos es una manera de comprender la
            medida, además de comenzar a explorar el tamaño real que tiene
            nuestro cuerpo en relación a los que nos rodean. Que ellos intenten
            este ejercicio con gente que conocen o con edificios, cuadernos,
            lápices de colores, etc., permitirá la estimulación de la seriación
            y la clasificación, que aunque para algunos sea un tema dominado, es
            un gran logro para iniciar la primaria.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Es importante que aprovechando que en la escuela se habló de
            tamaños, ponerlos a medir juguetes, frutas, personas, peluches,
            cuadernos, libros, ropa, etc. Este ejercicio además de poder dominar
            la clasificación, ayuda a comprender los tamaños y formas que pueden
            tener los mismos objetos, también puede usarse para ampliar su
            vocabulario y conocimiento del entorno.
          </p>
          <p>
            Una sugerencia es hacerlo en la calle, en el mercado, en el super,
            donde pueda pensar si un edificio es más alto que otro, o muebles,
            personas, coches, todos aquellos objetos que podemos mirar en la
            calle, pueden ser medidos o clasificados. Son actividades a
            realizarse en familia y que permiten ir descubriendo que aprende
            rápido y cuáles son sus intereses a esta edad. Este aprendizaje es
            muy importante para poder iniciar la educación básica.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.aprenderjuntos.cl/seriacion/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Seriación - Aprender Juntos
              </a>
            </li>
            <li>
              <a
                href="https://www.guiainfantil.com/educacion/matematicas/fichas-de-seriacion-para-ninos-de-3-4-y-5-anos-ejercicios-educativos/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Fichas de seriación - Guía Infantil
              </a>
            </li>
            <li>
              <a
                href="https://www.redmagisterial.com/med/18086-actividades-de-clasificacion-seriacion-y-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Actividades de clasificación - Red Magisterial
              </a>
            </li>
            <li>
              <a
                href="https://eresmama.com/ejercicios-seriacion-ninos/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ejercicios de seriación - Eres Mamá
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
