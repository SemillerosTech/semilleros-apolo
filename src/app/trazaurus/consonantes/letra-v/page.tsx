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
            Los productos que tenemos a la mano vienen de un proceso específico,
            muchos de los niños no tienen idea de cuántas cosas suceden para que
            los objetos o productos que hay en casa lleguen a la mesa. Este
            conocimiento es lento de aprender y de comprender, comenzamos el
            aprendizaje con procesos de animales para irlos ayudando a entender
            el mundo que los rodea y a que reconozcan los procesos que se
            involucran para que la comida llegue a su mesa.
          </p>
          <p>
            Pueden explorar otros productos que vienen de otros animales que
            ellos conocen, además de continuar con el aprendizaje de las letras
            podemos reconocer si ellos saben algo más sobre lo que comen o se
            usa en casa.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Ayudar a los niños a reconocer los procesos para que los alimentos
            que consumen llegue a la mesa, permite que puedan entender la
            complejidad de cada uno, además de saber que no es rápido ni
            sencillo como parece, eso permite también que aprendan a que algunos
            de esos productos requieren de mayor tiempo, de este modo
            estimulamos su curiosidad sobre el mundo que los rodea, pero también
            poco a poco la comprensión y paciencia sobre algunas situaciones
            cotidianas.
          </p>
          <p>
            Ir platicando sobre cada producto en el super o el mercado va no
            sólo aumentando su conocimiento sobre el mundo, sino también su
            vocabulario, ya que muchas palabras todavía le resultan extrañas o
            poco familiares.
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
