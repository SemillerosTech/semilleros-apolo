import React from "react";
import Image from "next/image";
import "./rosa-adelaida.css";
import { Metadata } from "next";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Link from "next/link";
import HeaderRosa from "./layout/HeaderRosa/HeaderRosa";

export const metadata: Metadata = {
  title: "Rosa Adelaida - Logoterapia",
  description: "Esta es la página de Rosa Adelaida con información exclusiva.",
  openGraph: {
    title: "Rosa Adelaida",
    description: "Descubre todo sobre Rosa Adelaida aquí.",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <HeaderRosa />
      <Jumbotron />

      <section className="flex flex-col lg:flex-row container mx-auto py-10">
        <div className="w-full lg:w-3/12 p-4 hidden lg:block">
          <div className="sticky top-28">
            <h2 className="text-5xl mb-5">Contenido</h2>

            <ul>
              <li className="p-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                Bibliografía
              </li>
              <li className="p-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                Publicaciones
              </li>
              <li className="p-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                <Link href={"/rosa-adelaida/curriculum"}>Curriculum Vitae</Link>
              </li>
              <li className="p-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                Citas
              </li>
              <li className="p-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                Aplicación de pruebas
              </li>
              <li className="p-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                Equipo y contacto
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-6/12 p-4">
          <h2 className="text-5xl mb-4">Prof. Rosa Adelaida del Valle</h2>

          <p className="mb-4">
            Psicóloga clínica desde hace 28 años en su consultorio particular
            donde trabaja con niños, adolescentes y adultos, con enfoque
            humanista y logoterapeútico. Cuenta con diversos diplomados, cursos
            y talleres que ha tomado para fortalecer la formación como psicóloga
            clínica de niños y adolescentes, los cuales ha impartido
          </p>

          <hr className="my-5" />

          <h2 className="text-5xl mb-4">Ultimas Noticias</h2>

          <article className="mb-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <Image
                src="https://placehold.co/450x600"
                alt="Imagen de ejemplo"
                width={450}
                height={600}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </article>

          <article className="mb-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <Image
                src="https://placehold.co/450x600"
                alt="Imagen de ejemplo"
                width={450}
                height={600}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </article>

          <article className="mb-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <Image
                src="https://placehold.co/450x600"
                alt="Imagen de ejemplo"
                width={450}
                height={600}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </article>

          <article className="mb-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <Image
                src="https://placehold.co/450x600"
                alt="Imagen de ejemplo"
                width={450}
                height={600}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </article>
        </div>

        <div className="w-full lg:w-3/12 p-4">
          <h2 className="text-5xl mb-3">Travesía del sentido</h2>

          <article>
            <div className="border-l-8 pl-3 py-2 border-main ">
              <h3 className="font-montserrat mb-2">
                Ayuda a niños en escuelas{" "}
              </h3>
              <p className="text-sm text-gray-700">
                Ronda de aplicación de estudios preeliminares a escuelas de la
                zona sur de CDMX
              </p>
            </div>
            <hr className="my-4" />
          </article>

          <article>
            <div className="border-l-8 pl-3 py-2 border-main ">
              <h3 className="font-montserrat mb-2">
                Feria del libro Marzo 2025
              </h3>
              <p className="text-sm text-gray-700">
                Se la tercera feria del libro de 2025, participa en la
                conferencia de la Dra. Rosa Adelaida del Valle
              </p>
            </div>
            <hr className="my-4" />
          </article>

          <article>
            <div className="border-l-8 pl-3 py-2 border-main ">
              <h3 className="font-montserrat mb-2">
                Certificacion de Semilleros de Sentido
              </h3>
              <p className="text-sm text-gray-700">
                Semileros de sentido ahora es ya una fundacion que certifica a
                los profesionales en logoterapia
              </p>
            </div>
            <hr className="my-4" />
          </article>
        </div>
      </section>
    </>
  );
};

export default page;
