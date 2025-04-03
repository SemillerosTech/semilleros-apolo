import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import whitePhone from "../../../public/white-phone.svg";
import whiteWhats from "../../../public/white-whatsapp.svg";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <>
      <h1>Servicios</h1>

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
