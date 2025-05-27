import React from "react";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import logoterapia from "../../../public/logoterapia.jpg";

const page = () => {
  return (
    <SubModuleLayout
      sectionTitle="Logoterapia"
      bannerImg={logoterapia}
      flip={true}
    >
      <div className="p-6 space-y-10">
        <h1 className="text-5xl font-bold">
          Fundamentos: Logoterapia para niños y adolescentes
        </h1>

        <div>
          <h2 className="text-4xl font-semibold">
            ¿Qué es la logoterapia?: Explicación sencilla pero profunda.
          </h2>
          <p className="mb-4">
            La logoterapia es una corriente terapéutica desarrollada por Viktor
            Frankl que pone el énfasis en la búsqueda de sentido como fuerza
            motivadora esencial en el ser humano.
          </p>
          <blockquote className="italic  text-gray-600 text-base mb-4 border-l-4 border-blue-400 pl-4">
            "Para Frankl el sentido, la esperanza o la trascendencia son
            inagotables, las poseemos y sólo es importante reconocer cómo
            fortalecerlas y poderlas usar o utilizar cuando elijamos hacerlo"
            (Del Valle Puente, 2023, p. 87).
          </blockquote>
        </div>

        <div>
          <h2 className="text-4xl font-semibold">
            ¿Por qué es especialmente valiosa para niños y adolescentes?
          </h2>
          <p className="mb-4">
            Los niños y adolescentes cuentan con una sensibilidad especial hacia
            el sentido de la vida, expresada a través de intuiciones profundas
            que aún no han sido condicionadas por estructuras rígidas del
            pensamiento.
          </p>
          <blockquote className="italic  text-gray-600 text-base mb-4 border-l-4 border-blue-400 pl-4">
            "Esta intuición prelógica, prerreflexiva, que no obedece reglas
            físicas y que eso es una manifestación espiritual, ellos la tienen
            muy concreta" (Del Valle Puente, 2023, p. 54).
          </blockquote>
        </div>

        <div>
          <h2 className="text-4xl font-semibold">El legado de Viktor Frankl</h2>
          <p className="mb-4">
            Frankl introdujo la idea de que la dimensión espiritual del ser
            humano es libre e inmortal. Esta parte de nosotros permanece
            accesible, y es fuente de resiliencia y sentido, especialmente
            relevante para quienes aún están formando su identidad.
          </p>
          <blockquote className="italic  text-gray-600 text-base mb-4 border-l-4 border-blue-400 pl-4">
            "Frankl nos dice que la parte espiritual es libre, es inmortal, es
            pre lógica, es pre reflexiva, qué quiere decir con esto, bueno que
            podemos acceder a ella porque está todo el tiempo ahí" (Del Valle
            Puente, 2023, p. 33).
          </blockquote>
        </div>

        <div>
          <h2 className="text-4xl font-semibold">Los tres pilares</h2>
          <p className="mb-4">
            La logoterapia se fundamenta en tres pilares esenciales que pueden
            adaptarse a la realidad infantil y adolescente: la libertad con
            responsabilidad, la voluntad de sentido y la capacidad de encontrar
            sentido incluso en la pérdida.
          </p>
          <blockquote className="italic  text-gray-600 text-base mb-4 border-l-4 border-blue-400 pl-4">
            "Que su libertad-responsabilidad, eso me va a tocar a mi como
            logoterapueta: dejar como piezas internas, como los tres pilares
            bien cimentados; que es capaz de ser libre y responder; que va a ser
            capaz de buscar que lo hace feliz en la vida y que va a ser capaz de
            perder y encontrar el sentido" (Del Valle Puente, 2023, p. 8).
          </blockquote>
        </div>
      </div>
    </SubModuleLayout>
  );
};

export default page;
