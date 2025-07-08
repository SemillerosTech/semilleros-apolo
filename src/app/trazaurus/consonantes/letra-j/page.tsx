// LetraJ.tsx
import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const LetraJ = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra J</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Las labores domésticas o de acomodo de objetos son una manera de que
            los niños desarrollen sentido de pertenencia a sus espacios,
            lugares, juguetes; es también una manera de relacionarse con los
            integrantes de la familia y de promover el desarrollo de habilidades
            de organización y de cuidado.
          </p>

          <p>
            Muchas veces la escuela es el primer lugar donde el cuidado de sus
            cosas cobra importancia y por ser su primera vez pueden darse
            situaciones donde no es tan sencillo hacerlo pues no tienen práctica
            en otros ambientes, esto puede conflictuar el desarrollo de la
            integración e interacción grupal. En estos casos, que otros niños
            hablen de lo que hacen para cuidar sus cosas, puede despertar la
            curiosidad de los demás y asimilar poco a poco que será una
            actividad a desarrollar en la escuela.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Los quehaceres domésticos son tareas interminables dentro de casa, y
            muchas veces son realizados varias veces al día, dependiendo del
            número de miembros de la familia. Los niños de preescolar pueden
            realizar tareas valiosas para la casa, aunque al inicio sean muy
            sencillas o simples; sin embargo, entre más veces se realicen se
            perfeccionan y además le permiten mejorar en otros aspectos como es
            su capacidad de observar las cosas que hay en casa, cuidar sus
            juguetes y aprender a cuidar otros objetos del hogar.
          </p>

          <p>
            {" "}
            También te permite descubrir las cosas que hace con gusto y por sí
            mismo{"(a)"} lo cual hace que puedan hacer equipo efectivo a la hora
            del trabajo doméstico.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://nuevaescuelamexicana.sep.gob.mx/detalle-ficha/4480/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nueva Escuela Mexicana
              </a>
            </li>
            <li>
              <a
                href="https://www.serpadres.es/educacion/46758.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tareas para niños pequeños
              </a>
            </li>
            <li>
              <a
                href="https://tucolegioideal.com/tareas-del-hogar-kinder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tareas de Kinder
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default LetraJ;
