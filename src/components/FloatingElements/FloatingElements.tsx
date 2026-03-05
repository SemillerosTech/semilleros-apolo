import Image from "next/image";
import React from "react";
import whatsapp from "../../../public/whatsapp.svg";
import trazaurusCta from "../../../public/logo-trazaurus.svg";
import Link from "next/link";
import LoadingPage from "../LoadingPage/LoadingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const FloatingElements = () => {
  return (
    <>
      <a
        href="https://wa.me/525520802821?text=Estoy%20interesad@%20en%20más%20información%20respecto%20a%20la%20logoterapia"
        target="_blank"
      >
        <Image
          src={whatsapp}
          alt="llámanos"
          className="fixed bottom-3 right-3 w-[3rem] z-50 hover:scale-110 transition-transform duration-300"
        />
      </a>

      <div className="fixed bottom-5 left-5 z-50 group flex flex-col items-center">
        {/* Tooltip on Hover (Above) */}
        <div className="absolute bottom-14 left-0 bg-white py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100 text-[#FF0000] font-semibold text-sm">
          ¡Un propósito espera por ti!
          <div className="absolute -bottom-1 left-5 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
        </div>

        {/* Permanent Tooltip (Now Above) - disappearing on hover */}
        <div className="absolute bottom-14 left-0 bg-white py-1 px-3 rounded shadow-md opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100 text-[#FF0000] font-semibold text-sm">
          ¡Mira nuestros videos!
          <div className="absolute -bottom-1 left-5 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
        </div>

        <a
          href="https://www.youtube.com/@semillerosdesentido"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0000] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-heartbeat"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>

      <Link href={"/trazaurus"}>
        <article className="bg-white fixed right-0 bottom-0 rounded-none lg:bottom-auto lg:top-20  floating-image-trazaurus w-full lg:w-[280px] py-3 pr-6 pl-10 lg:rounded-l-full shadow-lg h-fit">
          <Image
            src={trazaurusCta}
            alt="Imagenes de fondo "
            className="w-[200px] lg:w-full mx-auto "
          />
        </article>
      </Link>

      <LoadingPage />
    </>
  );
};

export default FloatingElements;
