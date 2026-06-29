import React from "react";
import Image from "next/image";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import quienesSomos from "../../../public/quienes-somos.jpg";
import semilla from "../../../public/icons/semilla.png";

import "animate.css";

const page = () => {
  return (
    <SubModuleLayout sectionTitle="Quienes somos" bannerImg={quienesSomos}>
      <div className="p-6 space-y-16 max-w-5xl mx-auto mb-20">
        <div className="animate__animated animate__fadeInUp">
          <Image
            src={semilla}
            alt="Semilla"
            className="w-16 mb-6 animate__animated animate__pulse animate__infinite infinite"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--secondary)] mb-6">
            Semilleros de Sentido A.C.
          </h1>
          <div className="h-2 w-32 bg-[var(--main)] rounded-full mb-8" />
          <p className="text-xl leading-relaxed text-gray-700 max-w-3xl">
            Somos una <b>asociación civil en México</b> dedicada a promover los principios de la 
            Logoterapia de Viktor E. Frankl en el ámbito educativo. Trabajamos para inspirar la 
            búsqueda de propósito y significado en la vida, enfocándonos especialmente en niños, 
            adolescentes y comunidades educativas.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-8 animate__animated animate__fadeInUp animate__delay-1s">
          {[
            {
              title: "Misión",
              desc: "Promover el desarrollo integral de niños y adolescentes a través de la logoterapia, brindando herramientas que fortalezcan su sentido de vida, su libertad responsable y su capacidad de trascender."
            },
            {
              title: "Visión",
              desc: "Ser una organización líder en la transformación educativa mediante la formación en valores existenciales, creando comunidades escolares más conscientes, empáticas y orientadas al sentido."
            },
            {
              title: "Valores",
              desc: "Libertad con responsabilidad, respeto a la unicidad de cada persona, acompañamiento compasivo, búsqueda activa de sentido y compromiso con la trascendencia."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-cyan-100/50 border border-gray-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-[var(--main)] font-bold text-2xl mb-4">
                0{i+1}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--secondary)]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6 animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            Nuestra Historia
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Semilleros de Sentido A.C. nace del trabajo y la visión de la <b>Dra. Rosa Adelaida del Valle Puente</b>, 
            psicóloga clínica con más de 28 años de experiencia y logoterapeuta certificada por la Casa Viktor Frankl. 
            Su trayectoria con niños, adolescentes y familias &mdash;plasmada en su libro <b>&ldquo;Niñ@s y adolescentes: 
            Semilleros de Sentido&rdquo;</b>&mdash; dio origen a esta asociación.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Desde entonces, hemos llevado nuestros programas a escuelas de todo México, desarrollando metodologías 
            como <b>SILEE®</b> (Sistema Integral de Literatura de Encuentro Existencial) y <b>Trazaurus</b>, 
            herramientas que integran la lectura, el diálogo y el juego como caminos hacia el autoconocimiento y el sentido de vida.
          </p>
        </section>

        <section className="space-y-10 animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="text-4xl font-semibold text-[var(--main)]">
            Lo que hacemos
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Talleres para alumnos",
                desc: "15 sesiones prácticas donde los estudiantes desarrollan habilidades socioemocionales, pensamiento crítico y trabajo colaborativo."
              },
              {
                title: "Capacitación para docentes",
                desc: "Formación en bienestar emocional, comunicación empática y manejo de emociones en el aula."
              },
              {
                title: "Acompañamiento a familias",
                desc: "Espacios de reflexión y herramientas prácticas para fortalecer el vínculo familiar y la crianza consciente."
              },
              {
                title: "Psicoterapia",
                desc: "Atención psicológica individual y familiar con enfoque humanista y logoterapéutico para niños, adolescentes y adultos."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg shadow-cyan-100/30 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-2 h-2 mt-3 rounded-full bg-[var(--main)] shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-[var(--secondary)] mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="relative animate__animated animate__fadeInUp animate__delay-4s">
          <div className="absolute inset-0 bg-cyan-50 -rotate-1 rounded-3xl" />
          <blockquote className="relative italic text-xl md:text-3xl text-gray-700 border-l-8 border-[var(--main)] pl-6 md:pl-10 py-8 md:py-12 pr-6 md:pr-10">
            &ldquo;Cada niño es un semillero de sentido. Nuestra labor es regar esa semilla para que florezca una vida con propósito.&rdquo;
          </blockquote>
        </div>
      </div>
    </SubModuleLayout>
  );
};

export default page;
