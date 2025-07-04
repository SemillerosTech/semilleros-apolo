import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra T</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Estimular a que canten y hagan arrullos es una manera de contactar
            con la emoción de estar seguro y de aprender a cuidar a otros.
            Además de que el canto relaja y permite una expresión libre que da
            seguridad, algunos no cantarán pero podrán aprender a arrullar algún
            muñeco. Escuchar arrullos de muchos tipos favorece la comprensión de
            las costumbres en nuestro país.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Arrullar es una costumbre muy frecuente con bebés, pero en niños de
            preescolar puede significar sentirse cercanos de nuevo a mamá o
            papá, especialmente si existen otros hermanos pequeños. El arrullo
            es una canción que relaja y permite que el niño se sienta de nuevo
            amado y seguro, facilitando su crecimiento físico y psicológico.
          </p>
          <p>
            Hay muchas canciones de distintos lugares del mundo para arrullar.
            Puede ser un buen momento para explorar juntos estas canciones y
            aprender de otras culturas.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://conafecto.conafe.gob.mx/recursos/materiales/pdf/CANTOS-Y-ARRULLOS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cantos y arrullos - CONAFE
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/7JEAagacOa4?si=Y2veD6-E566vfLg1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Un canto de amor para mi corazón
              </a>
            </li>
            <li>
              <a
                href="https://mexicana.cultura.gob.mx/en/repositorio/resultados?word=arrullos"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Arrullos tradicionales - Mexicana Cultura
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/9yPQJBTIMwE?si=CPNPiuNuE_ga1sbp"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cantos ancestrales, arrullos e historias
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
