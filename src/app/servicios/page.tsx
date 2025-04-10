import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import whitePhone from "../../../public/white-phone.svg";
import whiteWhats from "../../../public/white-whatsapp.svg";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import tallerAlumnos from "../../../public/logoteca.jpg";
import tallerPadres from "../../../public/logoteca.jpg";
import capacitacionDocentes from "../../../public/logoteca.jpg";
import evaluacionSeguimiento from "../../../public/logoteca.jpg";
import logoMain from "../../../public/logo-semilleros-apaizado.svg";

const page = () => {
  return (
    <>
      <header className="p-2 shadow-lg sticky top-0 bg-white">
        <Image
          src={logoMain}
          alt="Lazox Logo"
          className="w-[150px] mx-auto mb-4"
        />
      </header>

      <main className="container mx-auto px-4 lg:px-10 py-5 mb-20">
        <section>
          <h2 className="text-[var(--secondary)] mb-3">Nuestros Servicios</h2>

          <p className="mb-3">
            Acompañamos a estudiantes, padres y docentes con propuestas
            formativas diseñadas para fortalecer el desarrollo integral.
            Nuestros servicios promueven el aprendizaje significativo, la
            comunicación efectiva y la mejora continua en los entornos
            educativos.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Talleres para alumnos
          </h2>

          <Image
            src={tallerAlumnos}
            width={100}
            height={100}
            alt="Talleres para alumnos"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Espacios dinámicos y vivenciales donde los alumnos desarrollan
            habilidades socioemocionales, pensamiento crítico y trabajo
            colaborativo. Cada taller está adaptado a la etapa de desarrollo
            para generar una experiencia positiva y formativa.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">Talleres para padres</h2>

          <Image
            src={tallerPadres}
            width={100}
            height={100}
            alt="Talleres para padres"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Encuentros diseñados para acompañar a las familias en el proceso de
            crianza. Brindamos herramientas prácticas y espacios de reflexión
            que fortalecen el vínculo familiar, mejoran la comunicación y
            promueven una crianza consciente y afectiva.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Capacitación para docentes
          </h2>

          <Image
            src={capacitacionDocentes}
            width={100}
            height={100}
            alt="Capacitación para docentes"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Propuestas de formación orientadas al desarrollo profesional del
            cuerpo docente. Abordamos temáticas clave como la gestión emocional,
            inclusión educativa y metodologías activas para enriquecer la
            práctica pedagógica diaria.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Evaluación y seguimiento
          </h2>

          <Image
            src={evaluacionSeguimiento}
            width={100}
            height={100}
            alt="Evaluación y seguimiento"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Procesos de evaluación individual y grupal que permiten identificar
            necesidades, avances y áreas de mejora. A través de informes claros
            y seguimiento puntual, ayudamos a construir estrategias pedagógicas
            más efectivas y personalizadas.
          </p>
        </section>
      </main>

      <article className="fixed bottom-0 left-0 w-full flex flex-col">
        <div className="bg-[var(--secondary)] text-white p-2 text-center font-bold">
          Para máyor información
        </div>
        <div className="flex w-full">
          <Link
            href="tel:+5215530179924"
            className="w-1/2 bg-[var(--main)] text-white p-2 text-center flex items-center justify-center"
          >
            <Image
              src={whitePhone}
              alt="Lazox Logo"
              className="w-[20px] mr-2"
            />
            Llámanos
          </Link>

          <Link
            href={
              "https://wa.me/525520802821?text=Hola%20me%20gustaria%20información%20de%20sus%20servicios"
            }
            className="w-1/2 bg-[var(--secondary)] text-white p-2 text-center flex items-center justify-center"
          >
            <Image
              src={whiteWhats}
              alt="Lazox Logo"
              className="w-[20px] mr-2"
            />
            Whatsapp
          </Link>

          <Link
            href={
              "https://www.google.com/maps/search/?api=1&query=Calz.+de+Tlalpan+1552,+sineo,+Miravalle,+Benito+Juárez,+03580+Ciudad+de+México,+CDMX"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-[var(--main)] text-white p-2 text-center flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white mr-2 text-xl max-w-4"
            />
            Ubicación
          </Link>
        </div>
      </article>
    </>
  );
};

export default page;
