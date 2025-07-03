"use client";

import React from "react";
import "./trazaurus.css";
import HeaderTrazaurus from "./Layout/Header/HeaderTrazaurus";
import Image from "next/image";
import rino from "../../../public/trazarus/rino.png";
import moradin from "../../../public/trazarus/moradin.png";

const Page = () => {
  return (
    <>
      <HeaderTrazaurus />
      <section className="bg-center bg-no-repeat bg-trazaurusbanner bg-blend-multiply after:bg-black/50 after:absolute after:top-0 after:left-0 after:w-full after:h-full relative after:z-0">
        <div className="px-4 mx-auto  text-center py-24 lg:scroll-py-36 z-10 relative">
          <h1 className="mb-4 text-6xl  tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Material Complementario
          </h1>
          <p className="font-semibold mb-8 text-lg text-white lg:text-xl sm:px-16 lg:px-48">
            Donde la aventura continua, estás en el sentido correcto! <br />
          </p>
          <a
            href="#vocales"
            className="text-white bg-trazaurusBlue rounded-full py-3 px-10 font-bold mt-4 text-xl"
          >
            Encuentra tu libro aquí
          </a>
        </div>
      </section>

      <section className="container mx-auto py-20 px-4">
        <h2 className="mb-4 text-center">
          ¿Qué es <b className="text-trazaurusOrange">Trazaurus</b>?
        </h2>

        <Image src={rino} alt="Rino" className="w-full my-6" />

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </section>

      <section className="container mx-auto py-20 px-4">
        <h2 className="mb-4 text-center">
          ¿Cómo me ayuda <b className="text-trazaurusPurpple">Trazaurus</b>?
        </h2>

        <Image src={moradin} alt="Rino" className="w-full my-6" />

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </section>

      <section className="container mx-auto py-10 px-4">
        <h2 className="mb-4 text-center">
          Selecciona tu <b className="text-trazaurusBlue">VOCAL</b> para
          comenzar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center relative">
          {["A", "E", "I", "O", "U"].map((e) => {
            return (
              <a
                key={e}
                href="#"
                className="sticky top-0 flex items-center mb-4 justify-center max-w-sm p-3 bg-white border border-gray-500 rounded-lg shadow-sm hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                  LETRA {e}
                </h5>
              </a>
            );
          })}
        </div>

        <h2 className="mb-4 text-center mt-20">
          Selecciona tu <b className="text-trazaurusPurpple">CONSONANTE </b>
          para comenzar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center relative">
          {[
            "M",
            "L",
            "S",
            "P",
            "T",
            "N",
            "D",
            "C",
            "R",
            "V",
            "B",
            "F",
            "LL",
            "H",
            "J",
            "CH",
            "Q",
            "G",
            "Ñ",
            "Y",
            "Z",
            "X",
            "K",
            "W",
            "GUE-GUI",
            "GÙE-GUI",
          ].map((e) => {
            return (
              <a
                key={e}
                href="#"
                className="sticky top-0 flex items-center mb-4 justify-center max-w-sm p-3 bg-white border border-gray-500 rounded-lg shadow-sm hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-center ">
                  LETRA {e}
                </h5>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;
