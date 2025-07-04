import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra L</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Comenten en el salón cuántas artesanías conocen los niños y la
            cercanía que pueden tener con ellas, y hablemos de la paciencia para
            enseñar que pueden tener algunos adultos o compañeros.
          </p>
          <p className="mb-2">
            Es una etapa donde la capacidad de asombro permite que observen y
            aprendan cosas de otras personas con facilidad por imitación.
            Platicar que aprenden observando ayuda a que se sientan parte de la
            familia o de la comunidad.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Si en la familia alguien practica o desarrolla algún tipo de
            manualidad o artesanía, será interesante acercar a los niños a la
            observación y práctica de la misma. Este acercamiento a las
            manualidades o a las labores del hogar permite que el niño(a) se
            sienta parte importante de la familia.
          </p>
          <p className="mb-2">
            Es importante considerar que la elaboración o lo que aprendan no va
            a estar realizado de manera correcta, pero tenerles paciencia es una
            forma de enseñar a ser amables con otros durante su proceso de
            aprendizaje, y fortalece el vínculo familiar y con las costumbres
            del entorno.
          </p>
          <p>
            Pueden ver videos sobre artesanías en México para fortalecer el
            conocimiento de la cultura.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://alebrijes.net/cuentos-de-alebrijes-pedro-el-artesano/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cuentos de alebrijes - Pedro el artesano
              </a>
            </li>
            <li>
              <a
                href="https://foem.edomex.gob.mx/sites/foem.edomex.gob.mx/files/catalogo/Y-tu-que-sabes%282%29.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ¿Y tú qué sabes? - FOEM
              </a>
            </li>
            <li>
              <a
                href="https://relatosehistorias.mx/artesanos"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Relatos e historias en México - Artesanos
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
