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
            Para este momento del ciclo escolar, muchos niños ya reconocen las
            letras e inclusive alguno ya puede leer y entender más cosas que
            otros. Lo importante es aumentar su vocabulario e irles contando
            cuentos y narraciones como leyendas o mitos para que puedan ir
            escuchando palabras nuevas y diferentes a ellas. Además de fomentar
            que los libros son grandes compañeros de aprendizaje y de compañía,
            que pueden aliviar dolores y dar respuestas, que ofrecen aventuras y
            hacen que el aburrimiento pueda pasar y aprender desde los dibujos
            hasta las palabras.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Leer cuentos en casa o tener cuentos que ellos puedan manipular e
            inclusive dibujar o rayar, no es destruir un libro, muchas veces
            algunos niños necesitan manipular los objetos y actuar en ellos para
            poder acercarse a conocerlos y usarlos para aprender. Tener libros
            de todas las edades favorece que las letras se puedan reconocer de
            diferentes tamaños, colores y cantidades.
          </p>

          <p>
            Aprender palabras nuevas en esta etapa es importante para poder
            conocer más del mundo que lo rodea y de acercarse a preguntar a los
            adultos o niños de su edad sobre lo que desconocen, favoreciendo la
            comunicación y la confianza para externar sus dudas.
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
