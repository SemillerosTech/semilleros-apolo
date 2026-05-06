import React from "react";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import banner from "../../../public/quienes-somos.jpg";

import "animate.css";

const SilePage = () => {
  return (
    <SubModuleLayout
      sectionTitle="Método Silé"
      bannerImg={banner}
    >
      <div className="p-6 space-y-16 max-w-5xl mx-auto mb-20">
        <div className="animate__animated animate__fadeInUp">
          <h1 className="text-6xl font-bold text-[var(--secondary)] mb-6">
            Método Silé: Educación con Sentido
          </h1>
          <div className="h-2 w-32 bg-[var(--main)] rounded-full mb-8" />
          <p className="text-xl leading-relaxed text-gray-700 max-w-3xl">
            El Método Silé es una propuesta pedagógica innovadora desarrollada por 
            Semilleros de Sentido, que integra los principios de la Logoterapia de Viktor Frankl 
            en el proceso de enseñanza-aprendizaje.
          </p>
        </div>

        <section className="space-y-6 animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            ¿Qué es el Método Silé?
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Su objetivo principal es acompañar a niños 
            y adolescentes en el descubrimiento de su propio sentido de vida, fomentando una 
            identidad sólida y resiliente. No es solo una técnica, es una forma de ver y vivir 
            la educación desde la trascendencia.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-cyan-100/50 border border-gray-100 hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInLeft animate__delay-2s">
            <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">Visión Humanista</h3>
            <p className="text-gray-600">
              Ponemos a la persona en el centro, reconociendo su dimensión espiritual 
              y su capacidad intrínseca de encontrar significado incluso en los retos 
              cotidianos de la educación.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-cyan-100/50 border border-gray-100 hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInRight animate__delay-2s">
            <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">Desarrollo Integral</h3>
            <p className="text-gray-600">
              No solo buscamos la excelencia académica, sino el florecimiento del ser, 
              fortaleciendo la voluntad de sentido y la responsabilidad personal desde 
              edades tempranas.
            </p>
          </div>
        </section>

        <section className="space-y-10 animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            Los Pilares de Silé
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Libertad con Responsabilidad",
                desc: "Enseñamos que cada elección tiene un propósito y una consecuencia, empoderando al alumno como autor de su propia historia."
              },
              {
                title: "Voluntad de Sentido",
                desc: "Fomentamos la motivación intrínseca, ayudando a los estudiantes a conectar sus estudios con sus metas y valores personales."
              },
              {
                title: "Trascendencia en el Aula",
                desc: "Promovemos el servicio y la conexión con los demás como vías fundamentales para experimentar una vida con propósito."
              }
            ].map((pilar, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-[var(--main)] font-bold text-2xl">
                  0{i+1}
                </div>
                <h4 className="text-xl font-bold text-[var(--secondary)]">{pilar.title}</h4>
                <p className="text-gray-600">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative animate__animated animate__fadeInUp animate__delay-4s">
          <div className="absolute inset-0 bg-cyan-50 -rotate-1 rounded-3xl" />
          <blockquote className="relative italic text-3xl text-gray-700 border-l-8 border-[var(--main)] pl-10 py-12 pr-10">
            &quot;El Método Silé no solo educa la mente, sino que despierta el corazón hacia la búsqueda de aquello que hace que la vida valga la pena ser vivida.&quot;
          </blockquote>
        </div>
      </div>
    </SubModuleLayout>
  );
};

export default SilePage;
