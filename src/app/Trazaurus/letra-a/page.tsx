import React from "react";
import "../trazaurus.css";
import HeaderTrazaurus from "../Layout/Header/HeaderTrazaurus";
import Link from "next/link";
import FooterTrazaurus from "../Layout/Footer/FooterTrazaurus";

const page = () => {
  return (
    <>
      <HeaderTrazaurus />
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra A</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              El alumno puede identificar y dibujar en una hoja las emociones,
              como el amor, la amistad y la alegría, utilizando colores que
              representen cada una de esas emociones.
            </li>
            <li>
              Además, deberá identificar las letras &quot;A&quot; tanto en
              mayúscula como en minúscula en los nombres de sus compañeros, así
              como en su propio nombre completo.
            </li>
            <li>
              Los alumnos pueden mencionar palabras comunes, incluso si no
              comienzan con la letra &quot;A&quot;. El maestro las escribirá en
              el pizarrón, resaltando la presencia de la letra &quot;A&quot;. De
              esta manera, se fortalecerá la discriminación auditiva y visual de
              dicha letra.
            </li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Juega con tu hijo a identificar todas las letras <strong>A</strong>
            en sus diferentes formas y tamaños en los letreros, placas, anuncios
            y material digital que tengas a la mano. Escribe el nombre de
            personas que sean importantes para él/ella y que reconozca la letra
            A.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">
            Libros recomendados para complementar las lecturas:
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Peñalver, C. y Sánchez, S. 2014.
              <em>
                Cuentos para educar con inteligencia emocional. Los niños de
                colores.
              </em>
              Barcelona, España: Penguin Random House Grupo Editorial, S.A.U.
            </li>
            <li>
              Fasquelle, R. P., Nashiki Angulo, R., & Perez Figueroa, M. 2010.
              <em>
                El desarrollo y aprendizaje infantil y su observación. Compendio
                de lecturas de información básica para educadores.
              </em>
              México: Universidad Nacional Autónoma de México.
            </li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Infografía: La importancia de la lectura</h2>
          <p className="mb-4">
            Los libros son un recurso imprescindible para su proceso formativo,
            les permite imaginar, descubrir, viajar y conocer sobre el mundo que
            los rodea. En preescolar se sientan las bases del hábito por la
            lectura y de la comprensión lectora.
          </p>

          <h3 className="mb-2">
            Los beneficios de la lectura en su desarrollo son los siguientes:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Mejora el lenguaje</li>
            <li>Fortalece la concentración</li>
            <li>Alimenta la imaginación</li>
            <li>Desarrolla la memoria</li>
            <li>Facilita la comunicación</li>
            <li>Amplía su vocabulario</li>
            <li>Ayuda a expresar sus sentimientos</li>
          </ul>

          <h3 className="mt-4 mb-2">
            Para fortalecer el hábito es importante:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Poder leerle por las noches unos minutos antes de dormir</li>
            <li>Usar libros con textos e imágenes de todo tipo</li>
            <li>Usar también otros recursos como el periódico o revistas</li>
            <li>
              Platicar que la lectura es una manera de escapar de la rutina y
              calmar el estrés
            </li>
            <li>Es una herramienta para fortalecer los lazos familiares</li>
          </ul>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía:</h2>
          <ul className="pl-4 list-disc list-inside text-blue-600 space-y-1">
            <li>
              <a
                href="https://www.gob.mx/aprendemx/articulos/la-importancia-de-la-lectura-en-las-ninas-ninos-y-adolescentes?idiom=es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                gob.mx - La importancia de la lectura en las niñas, niños y
                adolescentes
              </a>
            </li>
            <li>
              <a
                href="https://mexico.unir.net/noticias/educacion/que-es-lectoescritura/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                UNIR México - ¿Qué es la lectoescritura?
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="p-5">
        <Link
          href="/trazaurus"
          className="block  text-center text-white bg-trazaurusBlue rounded-full py-3 px-10 font-bold mt-4 text-xl w-full"
        >
          Volver
        </Link>
      </section>

      <FooterTrazaurus />
    </>
  );
};

export default page;
