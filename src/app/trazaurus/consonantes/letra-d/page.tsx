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
            objetivos de la edad preescolar. Puede ser un tema que genere
            angustia o preocupación, por lo que hablar del dentista y otros
            doctores permite compartir experiencias y reforzar la importancia de
            la limpieza.
          </p>
          <p>
            Usar láminas de doctores y hábitos apoya el conocimiento de la letra
            y permite identificar a quienes aún necesitan apoyo en esta área.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              El ejemplo es la mejor forma de aprendizaje. Hazle saber que te
              bañaste, limpiaste, lavaste los dientes, etc.
            </li>
            <li>
              Usa canciones para hacer del aseo un momento divertido y
              educativo.
            </li>
            <li>
              Apóyate en cuentos para abordar visitas al doctor o hábitos de
              higiene.
            </li>
            <li>
              Este acompañamiento puede durar todo preescolar, aprovéchalo con
              todos tus hijos.
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
