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
            Puedes apoyarte de láminas de diferentes insectos y que reconozcan
            no sólo las letras, sino también la importancia de avisar a los
            adultos en el caso de especies que sí son venenosas. Además de que
            comenten entre ellos si las conocen o las han visto en documentales
            especiales, puede ser un buen momento para utilizar un documental
            corto para aumentar su conocimiento e interés en el tema.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Los insectos están presentes en nuestro hogar en cualquier lugar del
            país y en cualquier clima, son una parte importante del ecosistema y
            aunque no son tan reconocidos en ese tema, puede ser un momento
            oportuno para favorecer el conocimiento del niño y de la familia en
            el tema de insectos a través de documentales, revistas
            especializadas en el tema o medios interactivos.
          </p>
          <p>
            Además del reconocimiento del ecosistema, es vital reconocer
            visualmente aquellos insectos de la zona donde viven que pueden ser
            venenosos o que los niños pueden presentar alergias, para ayudarlos
            a no acercarse a ellos y buscar a algún adulto para que pueda
            resolver la situación. La curiosidad en algunos niños de esta edad
            los lleva a ser arriesgados y acercarse demasiado sin medir las
            consecuencias.
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
