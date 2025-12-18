"use client";
import React, { useState } from "react";
import SubModuleLayout from "@/layout/SubModuleLayout/SubModuleLayout";
import Image from "next/image";
import empleosBanner from "../../../public/consultorio.jpg";
import logoteca from "../../../public/logoteca.jpg";
import logoterapia from "../../../public/logoterapia.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapMarkerAlt,
  faClock,
  faArrowRight,
  faCheckCircle,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// Mock data
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
  {
    title: "Psicólogo/a Clínico",
    location: "QRO - Presencial",
    timeType: "Tiempo completo",
    posted: "Publicado hace 2 días",
    ref: "SAL-003",
    href: "#",
    description:
      "Brinda atención psicológica y acompañamiento emocional a niños, adolescentes y sus familias.",
    role: "Realizar evaluaciones, diagnósticos y planes de intervención terapéutica.",
    benefits: [
      "Supervisión clínica",
      "Capacitación continua",
      "Prestaciones superiores",
    ],
  },
];

const Page = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <SubModuleLayout
      sectionTitle="Únete a nuestro equipo"
      bannerImg={empleosBanner}
    >
      <div className="font-montserrat text-[var(--secondary)]">
        {/* Section 1: Intro */}
        <section className="flex flex-col lg:flex-row gap-12 py-20 items-center max-w-7xl mx-auto px-6">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl leading-tight text-[var(--secondary)]">
              Empleos <span className="text-[var(--main)]">Semilleros</span> de
              Sentido
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Únete a nuestro equipo y siembra sentido en las comunidades
              educativas. Sé parte de iniciativas con propósito, aprende junto a
              un equipo comprometido y ayuda a transformar realidades a través
              de la educación.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#vacantes" className="px-6 py-3 bg-[var(--main)] text-white rounded-full font-bold shadow-lg hover:bg-[var(--secondary)] transition-colors">
                Ver vacantes
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-[var(--main)]/20 rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
            <Image
              src={logoteca}
              alt="Equipo Semilleros"
              className="relative rounded-2xl shadow-xl w-full object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </section>

        {/* Section 2: Culture */}
        <section className="flex flex-col md:flex-row-reverse gap-12 py-20 items-center max-w-7xl mx-auto px-6 bg-gradient-to-l from-blue-50 to-white">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[var(--secondary)]">
              Somos Semilleros de Sentido
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Somos una organización sin fines de lucro que busca promover la
              educación y el desarrollo de las comunidades educativas. Aquí,
              cada idea se convierte en oportunidad y cada proyecto en impacto
              real. Si te mueve transformar vidas a través de la educación, este
              es tu lugar: crecerás, aprenderás y dejarás huella junto a un
              equipo que cree en el poder de los pequeños cambios para lograr
              grandes transformaciones.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative group">
             <div className="absolute -inset-2 bg-[var(--secondary)]/10 rounded-2xl -rotate-2 group-hover:-rotate-1 transition-transform duration-300"></div>
            <Image
              src={logoterapia}
              alt="Cultura Semilleros"
              className="relative rounded-2xl shadow-xl w-full object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </section>

        {/* Section 3: Value Proposition */}
        <section className="py-24 px-6">
          <div className="bg-[var(--secondary)] rounded-3xl p-10 lg:p-20 text-white max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
             
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--main)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--main)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="w-full lg:w-3/5 space-y-8">
                <h2 className="font-montserrat font-extrabold text-3xl lg:text-5xl leading-tight">
                  ¿Por qué ser parte de <br/>
                  <span className="text-[var(--main)]">Semilleros?</span>
                </h2>
                
                <div className="space-y-6">
                   <div className="flex gap-4">
                       <div className="mt-1 bg-[var(--main)] p-2 h-fit rounded-lg shadow-lg">
                           <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-white" />
                       </div>
                       <div>
                          <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                             Nuestro equipo es la prioridad #1
                          </h3>
                          <p className="text-gray-300 leading-relaxed font-light">
                             Impulsamos el aprendizaje continuo, la colaboración y el liderazgo con propósito. 
                          </p>
                       </div>
                   </div>
                   
                   <div className="flex gap-4">
                       <div className="mt-1 bg-[var(--main)] p-2 h-fit rounded-lg shadow-lg">
                           <FontAwesomeIcon icon={faStar} className="w-6 h-6 text-white" />
                       </div>
                       <div>
                          <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                             Impacto Real
                          </h3>
                          <p className="text-gray-300 leading-relaxed font-light">
                             Trabajamos cada día para que las cosas sucedan en las comunidades educativas.
                          </p>
                       </div>
                   </div>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 flex items-center justify-center">
                 <div className="text-center relative">
                    <p className="text-2xl lg:text-3xl font-light tracking-widest uppercase mb-2">Trabajando con</p>
                    <p className="text-[4rem] lg:text-[5.5rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--main)] drop-shadow-xl">
                      propósito
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Jobs & Application */}
        <section className="py-20 max-w-7xl mx-auto px-6" id="vacantes">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Job List */}
            <div className="flex flex-col w-full lg:w-5/12 space-y-6 sticky top-24">
              <h3 className="font-montserrat font-bold text-3xl mb-2 text-[var(--secondary)] flex items-center gap-3">
                 <FontAwesomeIcon icon={faBriefcase} className="text-[var(--main)]" />
                 Vacantes Disponibles
              </h3>
              <p className="text-gray-500 mb-4">Selecciona una vacante para ver más detalles y postularte.</p>
              
              <div className="space-y-4">
                {jobs.map((job) => (
                  <article
                    key={job.ref}
                    onClick={() => setSelectedJob(job)}
                    className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden
                      ${
                        selectedJob.ref === job.ref
                          ? "border-[var(--main)] bg-white shadow-[0_0_20px_rgba(82,190,202,0.15)] ring-1 ring-[var(--main)]"
                          : "border-gray-100 bg-white hover:border-[var(--main)]/30 hover:shadow-lg hover:-translate-y-1"
                      }`}
                  >
                    {selectedJob.ref === job.ref && (
                         <div className="absolute top-0 left-0 w-1 h-full bg-[var(--main)]"></div>
                    )}
                    
                    <div className="flex justify-between items-start mb-3 pl-3">
                      <h4 className={`font-montserrat font-bold text-lg leading-tight transition-colors ${selectedJob.ref === job.ref ? 'text-[var(--main)]' : 'text-[var(--secondary)]'}`}>
                        {job.title}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-500 mb-4 pl-3">
                      <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md text-gray-600">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[var(--main)]" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md text-gray-600">
                        <FontAwesomeIcon icon={faClock} className="text-[var(--main)]" /> {job.timeType}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 pl-3">
                      {job.description}
                    </p>
                    
                    <div className="pt-3 border-t border-gray-50 flex justify-between items-center pl-3">
                        <span className="text-xs text-gray-400 font-medium">{job.posted}</span>
                        <span className={`text-xs font-bold flex items-center gap-2 transition-all duration-300 ${selectedJob.ref === job.ref ? 'text-[var(--main)] translate-x-0' : 'text-gray-300 group-hover:text-[var(--main)]'}`}>
                            Ver detalles <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Application Detail View */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                <header className="bg-[var(--secondary)] text-white p-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-5">
                       <FontAwesomeIcon icon={faBriefcase} className="w-32 h-32" />
                   </div>
                   
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 relative z-10">
                    <div>
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-3 border border-white/10">
                            Ref: {selectedJob.ref}
                        </div>
                        <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-4 leading-tight">{selectedJob.title}</h2>
                         <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-200">
                           <span className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> {selectedJob.location}</span>
                           <span className="w-1.5 h-1.5 rounded-full bg-white/30 self-center"></span>
                           <span className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /> {selectedJob.timeType}</span>
                        </div>
                    </div>
                  </div>
                </header>

                <div className="p-8  overflow-y-auto custom-scrollbar">
                    {/* Job Details Content */}
                    <div className="prose max-w-none mb-10 text-gray-600">
                        <div className="mb-8">
                            <h3 className="font-montserrat font-bold text-lg text-[var(--secondary)] mb-4 border-b pb-2 border-gray-100">
                                Acerca del empleo
                            </h3>
                            <p className="leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-50 text-gray-700">
                                {selectedJob.description}
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="font-montserrat font-bold text-lg text-[var(--secondary)] mb-4">
                                     ¿Qué harás?
                                </h3>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-full">
                                    <p className="text-gray-700 leading-relaxed">{selectedJob.role}</p>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-montserrat font-bold text-lg text-[var(--secondary)] mb-4">
                                     Lo que ofrecemos
                                </h3>
                                <ul className="space-y-3">
                                    {selectedJob.benefits?.map((b) => (
                                    <li key={b} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg text-sm font-medium text-gray-700">
                                        <div className="mt-0.5 text-[var(--main)]">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        {b}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                  {/* Form */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/60 shadow-inner">
                    <div className="mb-6">
                        <h3 className="font-montserrat font-bold text-xl text-[var(--secondary)]">Postúlate ahora</h3>
                        <p className="text-sm text-gray-500">Completa el formulario para iniciar tu proceso.</p>
                    </div>
                    
                    <form
                        className="space-y-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Nombre completo</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-[var(--main)]/10 focus:border-[var(--main)] transition-all outline-none bg-white text-gray-700"
                                    placeholder="Nombre completo"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-[var(--main)]/10 focus:border-[var(--main)] transition-all outline-none bg-white text-gray-700"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Teléfono</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-[var(--main)]/10 focus:border-[var(--main)] transition-all outline-none bg-white text-gray-700"
                                    placeholder="(55) 5555 5555"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">CV / Hoja de vida</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-500 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                                        <span className="bg-gray-100 p-1.5 rounded text-gray-600 text-xs font-bold">Examinar</span>
                                        <span className="text-xs truncate">Sube tu PDF...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Mensaje</label>
                            <textarea
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-[var(--main)]/10 focus:border-[var(--main)] transition-all outline-none bg-white text-gray-700 resize-none"
                                placeholder="Cuéntanos brevemente sobre ti..."
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                             <input type="checkbox" id="terms" className="w-4 h-4 rounded text-[var(--main)] focus:ring-[var(--main)] border-gray-300" />
                             <label htmlFor="terms" className="text-xs text-gray-500 select-none cursor-pointer">
                                He leído y acepto el <a href="#" className="underline text-[var(--main)]">Aviso de Privacidad</a>.
                             </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-[var(--main)] text-white font-bold text-lg hover:bg-[var(--main)]/90 shadow-lg hover:shadow-xl shadow-[var(--main)]/20 transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                        >
                            Enviar Solicitud <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SubModuleLayout>
  );
};

export default Page;
