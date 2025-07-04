import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <>
      <PageWrapper backButton={true}>
        <section className="p-6 max-w-6xl mx-auto text-gray-800">
          <h1 className="mb-6 w-screen text-trazaurusBlue">Letra E</h1>

          <article className="mb-8">
            <h2 className="mb-2">Actividades complementarias para el aula:</h2>
            <p className="mb-2">
              Es importante ayudarles a reconocer las acciones de las que se
              sienten orgullosos. Estas acciones deben ser pequeñas para que las
              identifiquen fácilmente, como poder vestirse solos, bañarse solos,
              o sacar punta al lápiz. Todo esto fortalece el entusiasmo por el
              esfuerzo. Además, al escribirlas en el pizarrón, se puede destacar
              la letra <strong>&quot;E&quot;</strong> y ayudarles a escuchar a
              otros.
            </p>
            <p>
              Es importante resaltar de manera especial aquellas palabras que no
              conocen, para así incrementar su vocabulario gradualmente.
            </p>
          </article>

          <article className="mb-8">
            <h2 className="mb-2">Padres de familia:</h2>
            <p className="mb-2">
              La lectura abarca una variedad de contenidos, por lo que es
              importante que platiques con tus hijos sobre sus gustos en la
              comida, así como sobre los logros que han alcanzado, como recoger
              sus juguetes, vestirse solos o escribir su nombre. Todas estas
              acciones representan un gran esfuerzo, y sentirse orgulloso de
              ellos contribuye a fortalecer su autoestima.
            </p>
            <p>
              Es fundamental hablar sobre las emociones que experimentamos y
              explorar los distintos nombres y sensaciones que nos provocan.
              Esto brinda seguridad a los niños para confiar en los adultos y
              seguir descubriendo sobre sí mismos. Anímalos a hablar sobre las
              situaciones que les generan enojo o que no salen como esperaban,
              así como sobre los momentos de felicidad cuando las cosas sí salen
              bien. Te puedes apoyar en nuestra bibliografía recomendada.
            </p>
          </article>

          <article className="mb-8">
            <h2 className="mb-2">
              Libros recomendados para complementar la lectura:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Robinson, C. (2020). <em>Tú Importas.</em> Ciudad de México:
                Libros del Zorro Rojo.
              </li>
              <li>
                Nuñez, C. y Valcárcel, R. (2016).{" "}
                <em>Emocionario. Dime lo que sientes.</em> Buenos Aires: V&amp;R
                Editoras.
              </li>
            </ul>
          </article>
        </section>
      </PageWrapper>
    </>
  );
};

export default page;
