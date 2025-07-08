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
            largo de preescolar, poder hablar de ellas dentro del aula permite
            el acercamiento entre niños y maestros y favorece la comunicación de
            emociones que pueden estar aprendiendo a reconocer y aunque todavía
            no es edad para que las controlen, el conocerlas puede favorecer sus
            relaciones con los otros.
          </p>
          <p className="mb-2">
            Hablar de emociones es un ejercicio constante dentro del aula, y una
            vez identificadas puede ser material para comenzar a comunicarnos
            cuál es nuestra emoción con la que empezamos la semana o con la que
            hacemos las actividades, permitiendo que también descubras el
            carácter de cada uno de tus alumnos, lo que permite que lo conozcas
            y puedas favorecer su desarrollo escolar.
          </p>
          <p className="mb-2">
            Pueden crear máscaras o caras de cada una de las emociones para
            poder expresarse con facilidad y jugar juegos de roles, lo que cada
            emoción diría, lo que cada emoción haría. Con ello, además favoreces
            reconocer los materiales de preescolar como colores, formas, junto
            con el uso de tijeras y la mejora o incremento de la velocidad de la
            motricidad fina.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Los juegos o cuentos con contenidos emocionales pueden ser un
            momento perfecto para acercarte a tus pequeños y ellos a ti. La
            comunicación de las emociones hacia los padres genera confianza y
            permite que te busquen en los momentos que consideren que no pueden
            resolver alguna situación.
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
