import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra S</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            En edad preescolar, algunos niños no socializan rápidamente o son
            tímidos. Es importante reconocer los ritmos en los que se acercan a
            otros, y hablar sobre aprender a estar solos y acompañados.
          </p>
          <p className="mb-2">
            Esta actividad, de hablar si conocen a alguien que le guste estar
            solo, puede facilitar el reconocimiento de quienes tienen dificultad
            para socializar, y apoyarlos con paciencia y juegos que faciliten la
            integración.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            A veces los niños son tímidos para socializar y los adultos
            presionamos por temor a la soledad o a que no aprendan a tener
            amigos. Si reconocen que su hijo(a) no puede acercarse fácilmente a
            otros, es importante acudir a lugares donde haya otros niños con
            frecuencia.
          </p>
          <p className="mb-2">
            No se debe presionar a que se acerque, sino permitirle estar en el
            lugar hasta que encuentre el ritmo para hacerlo. En caso de tener
            mayores dudas sobre esta parte de su desarrollo, acérquense a la
            escuela para poder crear una estrategia que apoye su cercanía y
            socialización.
          </p>
          <p>
            Aprender a estar solo es también una buena herramienta que
            desarrollará posteriormente en la primaria.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://saposyprincesas.elmundo.es/consejos/psicologia-infantil/como-ayudar-hijos-socializacion"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Cómo ayudar a los hijos en la socialización – Sapos y Princesas
              </a>
            </li>
            <li>
              <a
                href="https://www.rededuca.net/blog/educacion-y-docencia/socializacion-ninos-ninas#:~:text=Se%20recomienda%20que%20desde%20peque%C3%B1os,en%20las%20tareas%20del%20hogar."
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Socialización en niños y niñas – RedEduca
              </a>
            </li>
            <li>
              <a
                href="https://www.imageneseducativas.com/15-juegos-de-clase-para-desarrollar-habilidades-sociales-en-ninos/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                15 juegos de clase para desarrollar habilidades sociales –
                Imágenes Educativas
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
