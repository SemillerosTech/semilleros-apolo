import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra V</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Los productos que consumimos provienen de diversos procesos. Muchos
            niños desconocen los pasos para que los alimentos lleguen a su mesa.
            Iniciar con procesos de origen animal puede facilitar el aprendizaje
            y ampliar su visión del entorno.
          </p>
          <p>
            Explora junto a los niños otros productos derivados de animales que
            conozcan. Refuerza su curiosidad por el mundo natural mientras
            continúan con el aprendizaje de las letras.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Mostrarles a los niños los procesos de producción de los alimentos
            los ayuda a comprender el esfuerzo detrás de cada producto. Esto
            fomenta la paciencia y el respeto por los tiempos naturales.
          </p>
          <p>
            Al hacer las compras, hablen sobre el origen de los productos para
            ampliar su vocabulario y su conocimiento del entorno. Este ejercicio
            también puede fortalecer los lazos familiares.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/944VYmLw138?si=PLdGEAhibYpbX2w3"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Video - ¿De dónde vienen los alimentos?
              </a>
            </li>
            <li>
              <a
                href="https://mundosustentable.com.mx/animales-que-nos-dan-alimentos-y-sus-derivados/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Animales y productos derivados - Mundo Sustentable
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
