import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra GÙE-GUI</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p>
            Poder platicar sobre accidentes puede no traer recuerdos que les
            gusten, pero es importante reconocer que esas situaciones tienen su
            propio aprendizaje, pues además de conocer el dolor, ahora muchos de
            sus compañeros tienen idea de qué hacer si se caen o se lastiman,
            algunos inclusive se saben medicamentos o remedios caseros. Que los
            puedan dibujar y cómo lo resolvieron permite que tengan un mayor
            conocimiento de qué hacer en situaciones en las que no hay adultos
            conocidos cercanos a ellos. Pueden inclusive saber si son alérgicos
            a algún medicamento o qué tipo de sangre tienen, conocimientos
            importantes para cualquier edad.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p>
            Tener accidentes forma parte de la vida de todos los días, por eso
            es importante empezar a enseñarles cómo cuidarse y cómo avisar de
            estos accidentes. En general, el miedo al doctor es normal en la
            edad de preescolar, por lo tanto, es importante ir hablando de la
            importancia del cuidado personal y de que al doctor también se le
            visita cuando nos sentimos bien para aprender a cuidarnos mejor. Los
            accidentes tienen aprendizajes específicos y ayudan a conocer
            nuestros límites y capacidades frente al movimiento y a las
            situaciones inespecíficas. Existen cuentos que les ayudan a ir
            conociendo estas situaciones antes de que pasen y cómo avisar a los
            adultos para pedir ayuda en esos momentos. Inclusive pueden aprender
            a reportar los accidentes de los compañeros o de familiares.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.banorte.com/cms/CONDUSEF/2022/Marzo/Los-accidentes-no-avisan-WEB-BANORTE.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Los accidentes no avisan - Banorte
              </a>
            </li>
            <li>
              <a
                href="https://www.eird.org/herramientas/esp/Juegos/colorin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Juegos educativos EIRD
              </a>
            </li>
            <li>
              <a
                href="https://www.fundacionmapfre.org/educacion-divulgacion/seguridad-vial/actividades-educativas/recursos-materiales-educativos/coleccion-literatura-infantil-juvenil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fundación MAPFRE
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
