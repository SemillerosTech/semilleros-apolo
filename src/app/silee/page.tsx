import React from "react";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import banner from "../../../public/quienes-somos.jpg";

import "animate.css";

const SileePage = () => {
  return (
    <SubModuleLayout
      sectionTitle="Método SILEE"
      bannerImg={banner}
    >
      <div className="p-6 space-y-16 max-w-5xl mx-auto mb-20">
        <div className="relative animate__animated animate__fadeInUp">
          <div className="absolute inset-0 bg-cyan-50 -rotate-1 rounded-3xl" />
          <blockquote className="relative italic text-xl md:text-3xl text-gray-700 border-l-8 border-[var(--main)] pl-6 md:pl-10 py-8 md:py-12 pr-6 md:pr-10">
            &quot;Un libro abierto, una conversación verdadera y un niño que descubre que sus preguntas importan.&quot;
          </blockquote>
        </div>

        <section className="space-y-6 animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            ¿Qué es SILEE?
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            SILEE (Sistema Integral de Literatura de Encuentro Existencial) es un sistema que acompaña a los niños, dentro de su propia escuela, a través de la lectura compartida y el diálogo.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Es mucho más que una clase de lectura: es un espacio donde un niño nombra lo que siente, hace las preguntas que de verdad le importan y descubre que su voz tiene lugar.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Lo hemos visto en el aula: cuando un niño se encuentra con una historia que lo refleja, algo cambia en cómo se mira a sí mismo y en cómo mira a los demás.
          </p>
        </section>

        <section className="space-y-6 animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            El hilo que no se rompe
          </h2>
          <h3 className="text-2xl font-semibold text-[var(--secondary)]">
            Una tradición viva, de Sócrates a nuestros días
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            SILEE recupera un hilo que lleva siglos vivo y vuelve a tejerlo.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Es un hilo robusto porque lo han trenzado muchas miradas. Filósofos y educadores, desde épocas y lugares distintos, llegaron a la misma certeza: que el niño es el protagonista de su propia formación y que los libros son el puente para ampliar su mundo. De Sócrates y los humanistas del Renacimiento &mdash;Erasmo, Montaigne, Comenius&mdash; a la tradición pedagógica que sigue viva hoy: Montessori y el respeto al ritmo del niño, Freire y la lectura que libera, Petit y el libro como refugio, Chambers y la conversación que nace de cada cuento.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            SILEE recoge ese hilo y lo teje con una mirada &mdash;heredada de Viktor Frankl&mdash; que ve en cada niño a una persona con preguntas propias y con la capacidad de buscar su propio sentido. Por eso tiene una hondura que solo el tiempo puede dar: recupera lo que ha formado a los seres humanos durante siglos. Y lo lleva a donde más hace falta.
          </p>
        </section>

        <section className="space-y-6 animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            El niño en el centro
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            En SILEE, el niño es el centro de todo lo que hacemos.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Es nuestro punto de partida y nuestro punto de interés. Todo está pensado desde su mirada: los libros que elegimos, las preguntas que abrimos, el ritmo que respetamos.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            La transformación se vive en el niño, a su tiempo y a su manera. Él es, siempre, el protagonista.
          </p>
        </section>

        <section className="space-y-10 animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            Los cuatro pilares
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "La literatura como encuentro",
                desc: "Los libros son espejos donde el niño se reconoce y ventanas hacia otras vidas. Cada historia es una ocasión para encontrarse."
              },
              {
                num: "02",
                title: "El diálogo que abre",
                desc: "Aquí conversamos. A partir de una historia se abre una charla donde cada voz importa y todas las preguntas caben. El niño aprende que pensar en voz alta, junto a otros, es seguro y valioso."
              },
              {
                num: "03",
                title: "La libertad y la responsabilidad",
                desc: "El niño elige, opina, disiente. Descubre que es protagonista de lo que lee y de lo que piensa, y que esa libertad viene acompañada del cuidado de su propia mirada y de los demás. En ese ejercicio empieza, poco a poco, a buscar su propio sentido."
              },
              {
                num: "04",
                title: "El acompañamiento",
                desc: "El adulto en SILEE acompaña: sostiene un espacio seguro donde las emociones difíciles pueden nombrarse con confianza y las preguntas grandes son bienvenidas."
              }
            ].map((pilar, i) => (
              <div key={i} className="flex flex-col gap-4 bg-white p-8 rounded-3xl shadow-xl shadow-cyan-100/50 border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-[var(--main)] font-bold text-2xl">
                  {pilar.num}
                </div>
                <h4 className="text-xl font-bold text-[var(--secondary)]">{pilar.title}</h4>
                <p className="text-gray-600">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            Qué florece en el niño
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
            Lo que sembramos con los libros florece de maneras que se pueden ver. En las aulas donde SILEE trabaja, maestros y familias notan que los niños:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Comprenden más hondo. Van más allá de decodificar: conectan lo que leen con su propia vida.",
              "Encuentran palabras para lo que sienten. Amplían su vocabulario emocional y aprenden a nombrar lo que antes guardaban en silencio.",
              "Desarrollan empatía. Al habitar la vida de los personajes, entienden mejor a quienes los rodean.",
              "Piensan por sí mismos. Hacen preguntas más profundas y se atreven a sostener su propia opinión.",
              "Descubren en los libros un refugio. En palabras de niños de quinto de primaria: «los libros son medicina».",
              "Y también leen mejor. La comprensión, la ortografía y el vocabulario mejoran como fruto natural del encuentro."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg shadow-cyan-100/30 border border-gray-100">
                <div className="w-2 h-2 mt-3 rounded-full bg-[var(--main)] shrink-0" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 animate__animated animate__fadeInUp animate__delay-4s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            Voces
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--secondary)] mb-6">Lo que dicen los niños</h3>
              <div className="space-y-4">
                <blockquote className="italic text-xl text-gray-700 border-l-8 border-[var(--main)] pl-8 py-4">
                  &laquo;El libro es medicina.&raquo; <span className="not-italic text-sm text-gray-500">&mdash; Niño de 5.º de primaria</span>
                </blockquote>
                <blockquote className="italic text-xl text-gray-700 border-l-8 border-[var(--main)] pl-8 py-4">
                  &laquo;Los libros son un refugio para la vida.&raquo; <span className="not-italic text-sm text-gray-500">&mdash; Niña de 5.º de primaria</span>
                </blockquote>
                <blockquote className="italic text-xl text-gray-700 border-l-8 border-[var(--main)] pl-8 py-4">
                  &laquo;Las palabras nuevas abren el mundo.&raquo; <span className="not-italic text-sm text-gray-500">&mdash; Niño de 5.º de primaria</span>
                </blockquote>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--secondary)] mb-6">Lo que dicen los maestros</h3>
              <div className="space-y-4">
                <blockquote className="italic text-xl text-gray-700 border-l-8 border-[var(--main)] pl-8 py-4">
                  &laquo;Es hermoso verlos: cómo, ante la aparente apatía, se abren a leer.&raquo; <span className="not-italic text-sm text-gray-500">&mdash; Maestra de primaria</span>
                </blockquote>
                <blockquote className="italic text-xl text-gray-700 border-l-8 border-[var(--main)] pl-8 py-4">
                  &laquo;Ahora me dicen: &ldquo;Maestra, te quiero contar el libro&rdquo;.&raquo; <span className="not-italic text-sm text-gray-500">&mdash; Maestra de tercero de primaria</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 animate__animated animate__fadeInUp animate__delay-4s">
          {[
            {
              title: "Para los niños",
              desc: "Un espacio seguro donde sus preguntas tienen cabida y leer se vuelve aventura."
            },
            {
              title: "Para las familias",
              desc: "Una forma nueva de conversar con sus hijos y momentos de conexión profunda."
            },
            {
              title: "Para los maestros",
              desc: "Un aula más viva y herramientas para acompañar lo que va más allá del currículo."
            },
            {
              title: "Para la escuela",
              desc: "Una comunidad que crece en empatía, reflexión y sentido."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-cyan-100/50 border border-gray-100 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        <div className="relative animate__animated animate__fadeInUp animate__delay-4s">
          <div className="absolute inset-0 bg-cyan-50 -rotate-1 rounded-3xl" />
          <blockquote className="relative italic text-xl md:text-3xl text-gray-700 border-l-8 border-[var(--main)] pl-6 md:pl-10 py-8 md:py-12 pr-6 md:pr-10">
            SILEE llega a abrir un espacio donde un niño descubre que existe, que importa y que su vida tiene sentido.
            <br /><br />
            SILEE se vive. Es una experiencia, y la única manera de conocerla de verdad es vivirla.
            <br /><br />
            Si quieres que florezca en tu escuela, conversemos.
          </blockquote>
        </div>
      </div>
    </SubModuleLayout>
  );
};

export default SileePage;
