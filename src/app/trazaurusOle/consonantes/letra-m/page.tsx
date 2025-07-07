import React from "react";
import "../../trazaurus.css";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const page = () => {
  return (
    <PageWrapper backButton={true}>
      <section className="p-6 max-w-6xl mx-auto text-gray-800">
        <h1 className="mb-6 w-screen text-trazaurusBlue">Letra M</h1>

        <article className="mb-8">
          <h2 className="mb-2">Actividades complementarias para el aula:</h2>
          <p className="mb-2">
            Es importante que los niños realicen el sonido de la{" "}
            <strong>m</strong> con la boca y que lo identifiquen en diferentes
            lugares de las palabras. Además, poder hablar de monstruos y miedos
            puede fortalecer la confianza en los adultos que los cuidan y
            ayudarles a tener mejores estrategias para enfrentarlos.
          </p>
          <p className="mb-2">
            Se pueden usar cuentos para combatir el miedo, así como actividades
            donde dibujen sus temores o miedos y los dejen en algún frasco o
            lugar cerrado. Esto fortalece además el manejo de sus emociones a
            temprana edad.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="mb-2">Padres de familia:</h2>
          <p className="mb-2">
            Los miedos son parte de las emociones. Los monstruos son comunes en
            la edad preescolar, pues la imaginación aún carece de realidad:
            realmente creen en la existencia de ruidos y sombras que los acechan
            en la noche.
          </p>
          <p className="mb-2">
            Es importante asegurar que puedan hablar de sus miedos con libertad.
            Ayuda también el uso de dibujos y cuentos, incluso anécdotas de
            ustedes como adultos sobre situaciones que les dieron miedo de
            niños. Esto fortalece la comunicación familiar y ayuda a enfrentar
            el miedo como una emoción que existe y que es normal a cualquier
            edad.
          </p>
        </article>

        <article>
          <h2 className="mb-2">Bibliografía recomendada:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Bradbury, R. {"(2006)"}. <em>Encender la noche</em>, cuento para
              niños, Editorial Kokinos.
            </li>
            <li>
              Kasza, K. {"(2018)"}. <em>Choco encuentra una mamá</em>, cuento
              para niños, Editorial Kapelusz.
            </li>
            <li>
              Maneru, M. {"(2022)"}.
              <em>Mis primeras emociones: cuando tengo miedo</em>, cuento para
              niños, Editorial Silver Dolphin (en español).
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default page;
