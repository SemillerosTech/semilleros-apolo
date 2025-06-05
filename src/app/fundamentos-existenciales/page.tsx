import React from "react";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import fundamentosExistenciales from "../../../public/fichas-tecnicas.jpg";

const page = () => {
  return (
    <SubModuleLayout
      sectionTitle="Fichas Técnicas"
      bannerImg={fundamentosExistenciales}
    >
      <section className="space-y-10">
        <h2 className="font-semibold">Nuestos fundamentos existenciales</h2>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            Todo niño y adolescente tiene un potencial espiritual intacto que
            puede ser cultivado
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;La dimensión espiritual o noológica es la dimensión
            específicamente humana, es la parte esencial y constitutiva del
            hombre&quot;
            <span className="font-normal">(Frankl, 1994, p. 144-150)</span>.
          </blockquote>
          <p>
            La logoterapia reconoce que la espiritualidad forma parte del núcleo
            humano, y por ello considera que niños y adolescentes poseen esta
            capacidad desde el inicio.
          </p>
        </article>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            La búsqueda de sentido es natural en todas las edades, no solo en
            adultos
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;El sinsentido de la vida no respeta sexo, edad, ni condición
            social&quot;
            <span className="font-normal">(Frankl, 2003, p. 33)</span>.
          </blockquote>
          <p>
            La necesidad de encontrar significado no es exclusiva de la adultez;
            desde edades tempranas, los seres humanos pueden y deben explorar su
            propósito de vida.
          </p>
        </article>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            Los niños no son "adultos incompletos" sino seres plenos con
            capacidad de encontrar propósito
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;No es que pierdan el sentido por una cuestión de desarrollo,
            es la capacidad de poder reflexionar lo que tenemos que desarrollar
            desde pequeños&quot;
            <span className="font-normal">(Del Valle Puente, 2023, p. 54)</span>
            .
          </blockquote>
          <p>
            Reconocer a los niños como seres completos permite acompañarlos
            desde su propia vivencia existencial, favoreciendo su autonomía y
            crecimiento interior.
          </p>
        </article>

        <article>
          <h2 className="text-4xl font-semibold mb-3">
            La logoterapia ofrece herramientas concretas para que ellos
            descubran su propio sentido
          </h2>
          <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-400 pl-4">
            &quot;Una vez que me encontré con las lecturas de Frankl, no lo he
            soltado desde entonces, ha sido de mucha ayuda poder enseñarles
            nuevos lenguajes que amplían los horizontes de la existencia&quot;
            <span className="font-normal">(Del Valle Puente, 2023, p. 4)</span>.
          </blockquote>
          <p>
            A través de metodologías inspiradas en la logoterapia, es posible
            facilitar espacios donde niñas, niños y adolescentes descubran
            formas auténticas de vivir con sentido.
          </p>
        </article>
      </section>
    </SubModuleLayout>
  );
};

export default page;
