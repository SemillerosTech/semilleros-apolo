import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra N</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            El tema de las nieves y de las cosas dulces que gustan a los niños
            de esta edad nos permite comentar la importancia de la nutrición
            saludable y del consumo de productos libres de conservadores.
            También fomenta la tradición de consumir productos locales que
            pueden encontrar en su colonia.
          </p>
          <p>
            Dibujar lo que les gusta y compartirlo fortalece su expresión,
            mientras reconocen elementos del lugar donde viven.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            El gusto por lo dulce es común en la infancia, pero el consumo debe
            ser saludable. Es recomendable retomar productos naturales y
            locales, y compartirlos en familia. Estos momentos pueden facilitar
            la expresión emocional.
          </p>
          <p>
            Cocinar juntos también fortalece vínculos y permite aprender hábitos
            saludables.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://mediacampus.cuaieed.unam.mx/node/1116"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Nutrición infantil - UNAM
              </a>
            </li>
            <li>
              <a
                href="https://www.gob.mx/siap/articulos/se-te-antoja-una-nieve-prueba-los-sabores-del-campo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sabores del campo - gob.mx
              </a>
            </li>
            <li>
              <a
                href="https://www.muyinteresante.com.mx/historia/38725.html#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Historia del consumo dulce en México
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
