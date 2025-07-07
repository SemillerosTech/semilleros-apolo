import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra GUE-GUI</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            El cuidado de la naturaleza y del medio ambiente es un tema de
            preocupación mundial, una manera de hacer consciencia de la
            importancia del respeto de los animales y de no maltratarlos puede
            comenzar con cuentos de este tipo. Los niños pueden comentar si
            conocen historias de animales rescatados o en peligro de extinción y
            comenzar actividades para apoyar el conocimiento sobre el medio
            ambiente. Para ellos los animales cercanos pueden ser un buen inicio
            del cuidado y de la consciencia de evitar el maltrato animal.
            Algunos de ellos pueden descubrir que gustan de cuidar y de ayudar
            con las mascotas en casa. Se les pueden solicitar leyendas de
            diferentes animales para también involucrar a los padres en la
            actividad escolar.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Hablar sobre el cuidado de los animales puede ser importante para
            que comiencen a ayudar y apoyar en el cuidado de mascotas en casa.
            Inclusive es un tema de medio ambiente mundial, además de los temas
            de reciclaje o de reuso, los videos o cuentos sobre leyendas puede
            fomentar que el niño busque información y pueda además de ampliar el
            vocabulario, incrementar su curiosidad sobre temas de medio ambiente
            y de cuidado animal. Están en la edad adecuada para sentir que
            pueden realizar actividades de compromiso con el cuidado de las
            personas o animales que los rodean, y algunos descubrir su gusto por
            el cuidado tanto de plantas como animales.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://yucatantoday.com/blog/leyendas-mayas-de-animales"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leyendas mayas de animales
              </a>
            </li>
            <li>
              <a
                href="https://arbolabc.com/cuentos-de-animales"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cuentos de animales
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/OBQUTNST4-Q?si=zuS4vcc86Q0QN_Zd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video leyendas animales
              </a>
            </li>
            <li>
              <a
                href="https://www.zocalo.com.mx/leyendas-mexicanas-para-ninos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leyendas mexicanas para niños
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
