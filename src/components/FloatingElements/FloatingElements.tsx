import Image from "next/image";
import React from "react";
import whatsapp from "../../../public/whatsapp.svg";
import trazaurusCta from "../../../public/logo-trazaurus.svg";
import Link from "next/link";
import LoadingPage from "../LoadingPage/LoadingPage";

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
          className="fixed bottom-3 right-3 w-[3rem]"
        />
      </a>

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
