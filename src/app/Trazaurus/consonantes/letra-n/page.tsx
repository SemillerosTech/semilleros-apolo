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
            de esta edad, nos permite que podamos comentar la importancia de la
            nutrición saludable y del consumo de productos libres de
            conservadores, además de continuar con la tradición de consumir
            productos locales que seguramente tienen en su colonia y que son
            saludables.
          </p>
          <p>
            Platicar sobre estos gustos dulces permite que puedan comenzar a
            dibujar las cosas que les gustan, permitiendo compartir sus gustos
            con sus compañeros y con la maestra {"(o)"}. además de que comiencen
            a reconocer elementos del lugar donde viven.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Los gustos de los niños por alimentos dulces es una situación muy
            natural en la infancia, el consumo de estos productos se ha vuelto
            un tema de preocupación para la salud de nuestro país; por lo tanto,
            es importante considerar retomar el consumo de los productos dulces
            naturales que son saludables y que pueden permitir compartir un
            momento en familia después de la comida o a media tarde. Inclusive
            el consumo de algún dulce en medio de una situación triste o
            complicada puede ayudar a la comunicación de esas emociones y a una
            mejor comunicación familiar.
          </p>
          <p>
            Lo dulce puede ser el momento perfecto para aprender a cocinar o
            alimentarse saludablemente,
            <strong>
              hacerlo en familia es un excelente momento para aprender juntos.
            </strong>
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
