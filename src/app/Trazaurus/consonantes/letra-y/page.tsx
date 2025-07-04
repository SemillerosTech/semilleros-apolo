import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra Y</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Para este momento del ciclo escolar, los niños ya reconocen letras y
            algunos leen. Se debe aumentar vocabulario con cuentos y
            narraciones, fomentando que los libros sean compañeros de
            aprendizaje y compañía.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Leer cuentos en casa y permitir manipularlos ayuda a acercar a los
            niños a los libros. Tener libros variados favorece el reconocimiento
            de letras y fomenta la comunicación y confianza.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://historico.conade.gob.mx/eventos/autoctonos2015/paginas/autoctonos_libro.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Libro Juegos de mi México
              </a>
            </li>
            <li>
              <a
                href="https://www.gob.mx/cms/uploads/attachment/file/690862/Libro-Juegos-de-mi-Mexico-INPI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                INPI - Juegos de mi México
              </a>
            </li>
            <li>
              <a
                href="https://www.guiainfantil.com/articulos/ocio/leyendas/el-sol-y-la-luna-leyenda-mexicana-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guía Infantil - Leyenda
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
