"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import Image from "next/image";
import empleosBanner from "../../../public/consultorio.jpg";
import logoteca from "../../../public/logoteca.jpg";
import logoterapia from "../../../public/logoterapia.jpg";


const page = () => {
  const jobs = [
    {
      title: "Coordinador/a de Proyectos Educativos",
      location: "QRO - Híbrido",
      timeType: "Tiempo completo",
      posted: "Publicado ayer",
      ref: "EDU-001",
      href: "#",
      description:
        "Lidera iniciativas que fortalezcan competencias socioemocionales y pedagógicas en comunidades educativas.",
      role: "Coordinar equipos, medir impacto y convertir ideas en acción con enfoque en comunidades educativas.",
      benefits: [
        "Prestaciones de ley",
        "Oportunidades de formación",
        "Ambiente colaborativo",
      ],
    },
    {
      title: "Facilitador/a de Formación Docente",
      location: "CDMX - Remoto",
      timeType: "Medio tiempo",
      posted: "Publicado esta semana",
      ref: "EDU-009",
      href: "#",
      description:
        "Diseña y facilita talleres para docentes centrados en prácticas pedagógicas innovadoras y cultura de paz.",
      role: "Planear y facilitar sesiones de formación docente, dar seguimiento a resultados y retroalimentación.",
      benefits: [
        "Horario flexible",
        "Crecimiento profesional",
        "Trabajo remoto",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(jobs[2] ?? jobs[0]);
  return (
    <>
      <SubModuleLayout
        sectionTitle="Únete a nuestro equipo"
        bannerImg={empleosBanner}
      >
        <section className="flex flex-col md:flex-row gap-6 py-20 items-center">
          <div className="w-full lg:w-1/2">
            <h1>Empleos Semilleros de Sentido</h1>
            <p className="text-base text-gray-900">
              Únete a nuestro equipo y siembra sentido en las comunidades
              educativas. Sé parte de iniciativas con propósito, aprende junto a
              un equipo comprometido y ayuda a transformar realidades a través
              de la educación.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <Image src={logoteca} alt="Empleos Semilleros de Sentido" />
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-6 py-20 items-center">
          <div className="w-full lg:w-1/2">
            <Image src={logoterapia} alt="Empleos Semilleros de Sentido" />
          </div>

          <div className="w-full lg:w-1/2">
            <h1>Somos Semilleros de Sentido</h1>
            <p className="text-base text-gray-900">
              Somos una organización sin fines de lucro que busca promover la
              educación y el desarrollo de las comunidades educativas. Aquí,
              cada idea se convierte en oportunidad y cada proyecto en impacto
              real. Si te mueve transformar vidas a través de la educación, este
              es tu lugar: crecerás, aprenderás y dejarás huella junto a un
              equipo que cree en el poder de los pequeños cambios para lograr
              grandes transformaciones.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 py-20 items-center bg-blue-50 px-20 rounded-lg">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl">
              ¿Por qué ser parte de Semilleros de Sentido?
            </h2>
            <h3>Nuestro equipo es la prioridad #1</h3>
            <p className="text-base text-gray-900 mt-2">
              Creemos en el valor de crecer juntos y hacer cosas increíbles. En
              Semilleros de Sentido impulsamos el aprendizaje continuo, la
              colaboración y el liderazgo con propósito. Valoramos la
              retroalimentación, tomamos riesgos de manera inteligente y
              trabajamos cada día para que las cosas sucedan en las comunidades
              educativas.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <h1 className="text-[3.60rem] leading-none text-center">
              Trabajando con <br />
              <span className="font-bold text-[6.25rem]"> propósito</span>
            </h1>
          </div>
        </section>

        <article className="py-20">
          <div className="flex">
            <div className="flex flex-col w-5/12">
              <h3 className="text-4xl">Empleos</h3>
              {jobs.map((job) => (
                <article
                  key={job.ref}
                  onClick={() => setSelectedJob(job)}
                  className=" bg-white py-5 min-h-[200px] border-b cursor-pointer hover:bg-white/60"
                >
                  <h3 className="text-4xl">
                    <Link
                      href={job.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedJob(job);
                      }}
                    >
                      {job.title}
                    </Link>
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2 text-sm text-primary">
                    <span>{job.location}</span>
                    <span className="text-gray-500">|</span>
                    <span>{job.timeType}</span>
                    <span className="text-gray-500">|</span>
                    <span>{job.posted}</span>
                    <span className="text-gray-500">|</span>
                    <span>Ref: {job.ref}</span>
                  </div>
                  <p className="mt-3 text-gray-900 text-sm">
                    {job.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="w-7/12  border-b">
              <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-[var(--main)] p-4 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">{selectedJob.title}</h2>
                <button className="px-4 py-2 rounded-lg bg-[var(--main)] text-white hover:opacity-90">
                  Solicitar
                </button>
              </header>

              <form
                className="p-6 space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <section className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">
                      Ubicación
                    </label>
                    <input
                      readOnly
                      value={selectedJob.location}
                      className="mt-1 w-full rounded-md border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">
                      Tipo de jornada
                    </label>
                    <input
                      readOnly
                      value={selectedJob.timeType}
                      className="mt-1 w-full rounded-md border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">
                      Publicado
                    </label>
                    <input
                      readOnly
                      value={selectedJob.posted}
                      className="mt-1 w-full rounded-md border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">
                      ID de requisición
                    </label>
                    <input
                      readOnly
                      value={selectedJob.ref}
                      className="mt-1 w-full rounded-md border-gray-300 bg-gray-50"
                    />
                  </div>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl">Descripción</h3>
                  <p className="text-sm text-gray-800">
                    {selectedJob.description}
                  </p>
                  <h4 className="text-lg font-semibold mt-4">
                    ¿Qué harás en este rol?
                  </h4>
                  <p className="text-sm text-gray-800">{selectedJob.role}</p>

                  <h4 className="text-lg font-semibold mt-4">
                    ¿Qué ofrecemos?
                  </h4>
                  <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
                    {selectedJob.benefits?.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <p className="text-xs text-gray-600 mt-4">
                    Este rol es clave para el crecimiento de KAVAK en esta etapa
                    de innovación, consolidación y expansión. Al postularte,
                    aceptas nuestros Términos y Condiciones y Política de
                    Privacidad, disponibles en www.kavak.com
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl">Tus datos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="mt-1 w-full rounded-md border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="tucorreo@correo.com"
                        className="mt-1 w-full rounded-md border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="55 0000 0000"
                        className="mt-1 w-full rounded-md border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">
                        CV / Hoja de vida
                      </label>
                      <input
                        type="file"
                        className="mt-1 w-full rounded-lg border border-[var(--main)]/40 bg-white/70 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-[var(--main)] file:text-white file:px-4 file:py-2 hover:file:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--main)]/40"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm text-gray-600">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Cuéntanos por qué eres ideal para este rol"
                        className="mt-1 w-full rounded-md border-gray-300"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-[var(--main)] text-white hover:opacity-90"
                    >
                      Enviar solicitud
                    </button>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </article>
      </SubModuleLayout>
    </>
  );
};

export default page;

const BenefitsItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-xl border border-[var(--main)] p-6 bg-white/70">
    <h4 className="text-2xl mb-2">{title}</h4>
    <p>{desc}</p>
  </div>
);

const AreaCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl border border-[var(--main)] p-6 bg-white/70">
    <h4 className="text-2xl mb-2">{title}</h4>
    <ul className="list-disc pl-5 space-y-1">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  </div>
);

const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <blockquote className="rounded-xl border border-[var(--main)] p-6 bg-white/70">
    <p className="italic mb-3">“{quote}”</p>
    <p className="font-semibold text-[var(--main)]">{author}</p>
  </blockquote>
);
