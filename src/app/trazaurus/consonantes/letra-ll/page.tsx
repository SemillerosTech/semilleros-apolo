// LetraLl.tsx
import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const LetraLl = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra Ll</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Que los niños dibujen las llaves que conocen nos permite saber que
            tanta interacción tienen con objetos relacionados con su casa; las
            llaves tienen un objetivo para su uso, es importante ayudarlos a
            relacionar objetos con objetivos sobre su uso, esta relación también
            existe entre el lápiz y las hojas, el sacapuntas y el lápiz. El
            conocimiento de estos utensilios permite autonomía y mejor manejo no
            solo motriz, sino también cognitivo.
          </p>

          <p>
            Resaltando también que es una posibilidad para aumentar su
            vocabulario.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Los objetos que nos rodean en casa tienen un uso específico y una
            manera de usarse. Es recomendable que juguemos con todos estos
            objetos y que ellos puedan dibujarlos, manipularlos y usarlos para
            que puedan comprender mejor para qué sirven.
          </p>

          <p>
            <b className="text-trazaurusBlue text-xl">Ejemplos.</b> Los lentes
            son para ver, las agujas para coser, las ollas para cocinar, los
            cuchillos para cortar, los focos para ver en la noche. Acercarles
            estos objetos y dibujarlos o preguntar si reconocen alguna otra
            relación ayuda a estimular su vocabulario, su imaginación y
            curiosidad; elementos vitales para su autonomía y crecimiento.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.ejemplos.co/analogias-por-funcion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analogías por función
              </a>
            </li>
            <li>
              <a
                href="https://www.redmagisterial.com/med/17710-actividad-relacionar-objetos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Actividad para relacionar objetos
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/TNTraBPsu-o?si=ELwlboj0t8mMeOxy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video educativo
              </a>
            </li>
            <li>
              <a
                href="https://www.orientacionandujar.es/2017/05/17/categorizacion-reconocemos-objetos-cotidianos-uso-mas-comun-imagenes/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
              >
                Objetos cotidianos
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default LetraLl;
