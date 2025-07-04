import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra X</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Conocer México es un reto constante, así que cualquier página o
            recurso didáctico para preescolar puede apoyar lo que ellos conocen
            de su propio país. Lo importante es que se puedan usar lecturas de
            pueblos originarios y que ellos conozcan lo menos común que existe
            de nuestro país. Una actividad que les ayuda a conocer su país es
            que sepan cuántas cosas de su casa están hechas en México.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Hay muchas actividades dentro de tu ciudad o estado para que
            conozcan toda la diversidad cultural y de medio ambiente en nuestro
            país. Es importante que busques llevarlos a museos donde hay muchas
            actividades que además de entretenerlos les permiten ir conociendo a
            través del juego su país.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://nuevaescuelamexicana.sep.gob.mx/detalle-ficha/1955/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ficha Nueva Escuela Mexicana
              </a>
            </li>
            <li>
              <a
                href="https://nem.redmagisterial.com/redmagia/21532-Introduccion-al-tema-%22Conociendo-Mexico-y-su-historia%22"
                target="_blank"
                rel="noopener noreferrer"
              >
                Red Magisterial - Conociendo México
              </a>
            </li>
            <li>
              <a
                href="https://educacionespecial.sep.gob.mx/storage/recursos/aprende3/CNLbMN8aTq-ConociendoMexicoEE_26052020.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documento Aprende México
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/aUkNdA28iso?si=bXfWiqHKGrpjPrt8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video Didáctico
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
