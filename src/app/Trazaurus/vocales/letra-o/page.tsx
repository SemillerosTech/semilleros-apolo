import React from "react";
import "../../trazaurus.css";
import HeaderTrazaurus from "../../Layout/Header/HeaderTrazaurus";
import Link from "next/link";
import FooterTrazaurus from "../../Layout/Footer/FooterTrazaurus";

const page = () => {
  return (
    <>
      <HeaderTrazaurus />
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra O</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Es fundamental que los niños reconozcan las diferencias entre sus
            sentidos y aprendan sobre sus propias características. Al comentar
            sobre cada uno de los sentidos y cómo los utilizamos, incluyendo los
            olores y sabores agradables y desagradables, les permite aprender a
            aceptar las diferencias como algo natural y a apreciar los pequeños
            detalles que los rodean.
          </p>
          <p>
            Este ejercicio les ayuda a observar detalles como el color de los
            ojos y el tamaño de las orejas, además de desarrollar la percepción
            de otros sentidos como el gusto, el olfato y el tacto.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Ejercicios de apoyo para fortalecer la lectura:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reconocer sus sentidos y disfrutar para qué sirven</li>
            <li>
              Reconocer las diferencias entre los miembros de la familia:
              tamaño, color de piel, color de ojos, capacidad de la vista o del
              oído, y que en la calle pueda diferenciar que todos son
              diferentes.
            </li>
            <li>
              Aprovecha cualquier cartel o revista para que vaya diferenciando
              las diferentes vocales y que te diga qué otra letra está ahí
              acompañando a la vocal. Aunque no sepa cuál es, se estimula el que
              entienda que las letras van acompañando unas a otras.
            </li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://youtu.be/xIGj3Kcvnr4?si=LixVOA0JYl12chgv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Video - ¿Cuántos sentidos tenemos realmente? (YouTube)
              </a>
            </li>
            <li>
              <a
                href="https://unamglobal.unam.mx/global_tv/sabias-que-hay-mas-de-5-sentidos/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                UNAM Global - ¿Sabías que hay más de 5 sentidos?
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="p-5">
        <Link
          href="/trazaurus"
          className="block text-center text-white bg-trazaurusBlue rounded-full py-3 px-10 font-bold mt-4 text-xl w-full"
        >
          Volver
        </Link>
      </section>

      <FooterTrazaurus />
    </>
  );
};

export default page;
