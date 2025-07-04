import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra P</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Inventar cuentos con imágenes y luego contarlos puede favorecer la
            comunicación y disminuir el estrés frente a la lectoescritura. Esto
            permite también que intercambien historias y que si algunos ya
            quieren escribir puedan hacerlo sin temor a las correcciones, pues
            el objetivo es que se interesen por comunicarse a través de las
            letras.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Leerles con frecuencia antes de dormir o respetar sus primeras
            letras aunque no digan nada concreto es una manera de ayudarlos a
            sentirse más relajados frente al aprendizaje constante de tantas
            letras. Puedes dejar que algunos cuentos sean rayados o dibujados
            por ellos, pues quieren copiar o calcar algunos dibujos.
          </p>
          <p>
            Inventar cuentos juntos mientras están en un restaurante o viajando
            en transporte puede ayudar a aumentar su vocabulario y a usar los
            objetos o personas que les son familiares o comunes.
          </p>
        </article>

        <article className="mb-12">
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.ayudaparamaestros.com/2020/09/4-herramientas-para-crear-cuentos.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                4 herramientas para crear cuentos - Ayuda para maestros
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/xlIbmAj4KR4?si=gcNECxArNOP2PHvt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Video: Herramientas para contar cuentos
              </a>
            </li>
            <li>
              <a
                href="https://www.redalyc.org/journal/356/35656002015/html/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Artículo académico sobre la escritura creativa
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
