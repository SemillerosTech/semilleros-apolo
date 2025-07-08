import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra Z</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Las cosas que usamos todos los dias parecen aparecer de manera
            mágica en la casa, aprender que llevan un proceso de producción
            puede estimular su curiosidad a descubrir como se hacen otras cosas
            que usamos a diario.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            En esta etapa aún se conserva mucho del pensamiento mágico, el cual
            les hace pensar que las cosas que usamos, el dinero y muchos
            procesos no existen, es decir, las cosas existen por sí solas y
            parecen creadas de manera rápida y sin proceso. Pueden compartir
            videos de cómo se hacen los zapatos, las bolsas, los platos, las
            ollas, etc. cosas que están constantemente en casa. El conocimiento
            de esto puede ayudar a los niños a aumentar su curiosidad por el
            mundo y a tener interés en lo que nos rodea.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.gob.mx/cms/uploads/attachment/file/95802/PARAPEQUES-CUENTOS-BETOZAPATOSROTOS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cuento Beto Zapatos Rotos
              </a>
            </li>
            <li>
              <a
                href="https://alasyraices.gob.mx/ebooks/quia1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alas y Raíces - Ebook
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
