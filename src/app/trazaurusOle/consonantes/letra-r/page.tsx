import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra R</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            El reconocimiento de las emociones se vuelve un paso importante a lo
            largo de preescolar. Hablar de ellas permite el acercamiento entre
            niños y maestros y favorece su comunicación.
          </p>
          <p>
            Una vez identificadas, pueden expresar cuál emoción sienten al
            iniciar la semana o al realizar actividades. También se pueden crear
            máscaras con emociones para juegos de roles que ayuden a reconocer y
            gestionar sentimientos.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Los cuentos o juegos que involucran emociones son momentos clave
            para fortalecer la comunicación con los niños. Reconocer y expresar
            sentimientos en familia genera confianza y comprensión mutua.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/xSCCDF0F49Q?si=Aid-ZAVx_ZUgKqJC"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Video - Las emociones y los niños
              </a>
            </li>
            <li>
              <a
                href="http://www.annallenas.com/ilustracion-editorial/el-monstruo-de-colores.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                El monstruo de colores
              </a>
            </li>
            <li>
              <a
                href="https://www.educacionbc.edu.mx/materialdeapoyo/public/site/pdf/educacionbasica/preescolar/libromonstruodecolores.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Libro PDF - El monstruo de colores
              </a>
            </li>
            <li>
              <a
                href="https://portalsej.jalisco.gob.mx/wp-content/uploads/2021/05/Mi-guarida-de-las-emociones-Nathaly-Lorena-Paola-y-Xitlalic.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Mi guarida de las emociones
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
