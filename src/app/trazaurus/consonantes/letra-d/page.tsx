import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra D</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Aprender sobre los principales hábitos de higiene es uno de los
            objetivos de la edad preescolar; sin embargo, puede ser un tema que
            genere angustia o preocupación en los niños, es importante
            aprovechar que se habla del dentista, para que puedan compartir a
            qué doctores han ido, además de reforzar la importancia de los
            hábitos de limpieza que ya muchos de ellos manejan. Las manos, el
            baño, la ropa limpia, los dientes, el cabello, etc.
          </p>
          <p>
            Usar láminas de otros doctores y de los hábitos puede ayudar no sólo
            al conocimiento de la letra, sino también a reconocer quienes de
            ellos no han logrado consolidar estos hábitos para apoyarlos con el
            conocimiento de su importancia para la vida.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>

          <p className="mb-2">
            El niño preescolar puede tener poco ánimo para tener sus hábitos de
            higiene presentes y hacerlo constante, para que puedan hacerlo de
            mejor manera se recomienda lo siguiente:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              El mejor ejemplo para aprender a esta edad sobre los hábitos es
              verlos en los adultos que los rodean todos los dias, procura
              hacerle saber a tus hijos que te bañaste, lavaste los dientes, las
              manos, limpiaste tu cuarto y permite que te acompañen a hacerlo.
              Aprenden del ejemplo.
            </li>
            <li>
              Hay muchos canales con canciones para bañarse, limpiarse los
              dientes, doblar la ropa, recoger juguetes o limpiar la casa,
              aunque estén pequeños y no lo hagan de la mejor manera, son
              momentos importantes para lograr que comience el aprendizaje y que
              logren esta autonomía antes de pasar a la primaria.
            </li>
            <li>
              Existen cuentos para acompañar estos procesos, así como también
              existen cuentos para las visitas a los diferentes doctores que se
              enfrentan en la infancia, es importante usar estos recursos antes
              de comenzar las visitas y como herramientas para ayudar al niño al
              manejo emocional de estas situaciones.
            </li>
            <li>
              Recuerda que este proceso de acompañamiento puede durar todo
              preescolar, así que puedes hacerlo con más pequeños para comenzar
              esta estimulación.
            </li>
          </ul>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/C9EIb46KNV8?si=YAgPTEYsqe8Dzipc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Video: Hábitos de higiene
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/1N51oz9r7sQ?si=B4DsghuRbXVYBxLq"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Canción para lavarse
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/SvVnZod_9-8?si=aihr82u8OrvZSAEt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Hábitos saludables
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/8oczejZx5TM"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Importancia de la limpieza
              </a>
            </li>
            <li>
              <a
                href="https://cuentosparadormir.com/infantiles/cuentos-de-doctores#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cuentos sobre doctores
              </a>
            </li>
            <li>
              <a
                href="https://www.gob.mx/cms/uploads/attachment/file/55898/cuentoositobenito.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cuento Osito Benito - Gob.mx
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
