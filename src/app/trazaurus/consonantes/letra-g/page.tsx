import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra G</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Hablar de las relaciones con otros vecinos o familiares cercanos,
            así como experiencias de otros pueblos o comunidades, puede ayudar a
            los niños a relacionar palabras diferentes o a reconocer las
            experiencias de otras personas como narraciones importantes para no
            sólo aumentar su vocabulario, sino además fortalecer su desarrollo
            socio-emocional y de aprendizaje de la riqueza de otras personas
            cercanas a nuestra vida, de aprender sobre el pasado y de ir
            aprendiendo cómo cambian las cosas que están cerca de nosotros.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Una actividad importante en esta edad es que el niño está dispuesto
            a escuchar historias de aventuras o de personas cercanas a las que
            reconoce con cariño y respeto. Esto permite fortalecer su relación
            familiar o de cariño con esas personas, haciendo comunidad, pero
            también favorece sus capacidades de escucha y de atención.
          </p>

          <p>
            Aunque no lo llegue a pedir, puedes platicarle como padres aquellas
            experiencias de tu comunidad cuando eras niño, y mostrarle a través
            de dibujos o videos los cambios que han sucedido en el tiempo, esta
            actividad puede abarcar objetos, casas, carros, artículos de
            tecnología, películas, caricaturas, ropa, calzado, etc. La lista
            depende de aquellas cosas que les llamen la atención como familia.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://nem.redmagisterial.com/red-magia/planea/147192"
                target="_blank"
                rel="noopener noreferrer"
              >
                Red Magisterial
              </a>
            </li>
            <li>
              <a
                href="https://ru.historicas.unam.mx/handle/20.500.12525/439"
                target="_blank"
                rel="noopener noreferrer"
              >
                UNAM - Históricas
              </a>
            </li>
            <li>
              <a
                href="https://nem.redmagisterial.com/red-magia/planea/221459"
                target="_blank"
                rel="noopener noreferrer"
              >
                Red Magisterial - Planea
              </a>
            </li>
            <li>
              <a
                href="https://nuevaescuelamexicana.sep.gob.mx/detalle-ficha/9701/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nueva Escuela Mexicana
              </a>
            </li>
            <li>
              <a
                href="https://www.culturagenial.com/es/leyendas-mexicanas-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cultura Genial - Leyendas Mexicanas
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
