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
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra I</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Los niños pueden mencionar todos los lugares donde tienen que
            esperar y lo que hacen mientras tanto. La idea es que, además de
            reconocer la letra <strong>&quot;I&quot;</strong>, puedan compartir
            si se sienten impacientes o inquietos, y cómo enfrentan o resuelven
            esa sensación. Compartir sus experiencias puede ser una manera de
            aprender de los demás y descubrir otras estrategias para manejar la
            situación.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Es importante ayudar a los niños a reconocer su inquietud o
            impaciencia y apoyarlos con juegos o actividades que pueden realizar
            mientras esperan, algunas sugerencias son:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              ¿Cuántos colores reconoces en las personas y objetos que nos
              rodean?
            </li>
            <li>Mira las letras en carteles o letreros</li>
            <li>Cuenta cuántas personas hay antes</li>
            <li>¿Cuántas personas hay después?</li>
            <li>¿Cuántas cosas lleva la persona de enfrente en el carrito?</li>
            <li>
              Platicar cómo aprendiste a esperar en diferentes situaciones
              cuando eras niño
            </li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Baruch, R. (2019).{" "}
              <em>La Oruga muy impaciente. Cuento para niños.</em> Scholastic en
              Español.
            </li>
            <li>
              Quintin, N. (2023).{" "}
              <em>
                El árbol de la paciencia: libros para pequeños exploradores del
                siglo XXI.
              </em>{" "}
              Publicación independiente.
            </li>
            <li>
              <a
                href="https://www.guiainfantil.com/articulos/ocio/fabulas/la-paciencia-de-la-hormiga-taichi-fabula-para-ninos/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                Guía Infantil - La paciencia de la hormiga Taichí (fábula para
                niños)
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
