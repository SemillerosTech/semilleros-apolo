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
            Las cosas que usamos a diario parecen aparecer mágicamente en casa,
            pero aprender que llevan un proceso de producción estimula la
            curiosidad para descubrir cómo se hacen.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            En esta etapa persiste el pensamiento mágico, que hace creer que las
            cosas existen por sí solas. Compartir videos de cómo se hacen
            zapatos, bolsas, platos y otros objetos puede aumentar la curiosidad
            e interés.
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
