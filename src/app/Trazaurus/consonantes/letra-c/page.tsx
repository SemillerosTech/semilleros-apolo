import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra C</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Los insectos pueden no ser del agrado de los niños, pero dentro del
            tema de ecología y cuidado del medio ambiente es importante
            reconocer la necesidad de protección de algunas especies y su
            importancia en la educación medioambiental.
          </p>
          <p>
            Puedes apoyarte de láminas de diferentes insectos para que
            reconozcan no sólo las letras, sino también la importancia de avisar
            a los adultos en el caso de especies que sí son venenosas. Pueden
            compartir si las conocen o las han visto en documentales.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Los insectos están presentes en cualquier lugar del país. Son parte
            esencial del ecosistema. Aprovecha el interés infantil por el tema
            para usar documentales, revistas o medios interactivos y fomentar su
            conocimiento.
          </p>
          <p>
            También es importante ayudar a los niños a reconocer insectos
            peligrosos o que provocan alergias para evitar accidentes. La
            curiosidad natural de esta etapa puede ser guiada hacia el respeto y
            la seguridad.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a
                href="https://www.nationalgeographicla.com/animales/2022/11/los-secretos-de-los-insectos-por-que-son-fundamentales-para-el-planeta-y-como-evitar-que-desaparezcan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                National Geographic - Los secretos de los insectos
              </a>
            </li>
            <li>
              <a
                href="https://www.gaceta.unam.mx/insectos-ingrediente-clave-de-la-gastronomia-mexicana/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Gaceta UNAM - Insectos en la gastronomía
              </a>
            </li>
            <li>
              <a
                href="https://www.gob.mx/agricultura/es/articulos/hay-una-mosca-en-mi-sopa-insectos-comestibles-156649"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Gob.mx - Insectos comestibles
              </a>
            </li>
            <li>
              <a
                href="https://www.agrotec.com.mx/la-importancia-de-los-insectos-en-el-ecosistema/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Agrotec - Importancia de los insectos
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
