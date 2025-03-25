"use client";

import "animate.css";
import React, { useState } from "react";
import Image from "next/image";
import menu from "../../../../../public/icons/menu-ham.svg";
import logoDesktop from "../../../../../public/logo-semilleros-apaizado.svg";
import logoFlag from "../../../../../public/usa-flag.svg";
import Link from "next/link";

const HeaderRosa = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md md:px-8 sticky top-0 animate__animated animate__bounceIn z-10">
        <div className="container mx-auto flex">
          {/* MENU MOBILE */}
          <div className="flex max-h-[70px] w-full  relative justify-between p-3 md:hidden items-center">
            <Image
              src={menu}
              alt="Menu principal"
              className="h-[1.5rem] cursor-pointer z-10"
              onClick={() => {
                setMenuOpen(true);
              }}
            />

            {/* <Image
              src={logoDesktop}
              alt="Logo semilleros"
              aria-label="Logo desktop "
              className="h-full"
            /> */}
            <h1>PSIC. ROSA ADELAIDA</h1>

            <div className="flex">
              <Image
                src={logoFlag}
                alt="Logo bandera"
                aria-label="Logo desktop "
                className=" h-[1.5rem] z-10"
              />
            </div>
          </div>

          {/* MENU DESKTOP */}
          <h1 className="text-5xl my-4">PSIC. ROSA ADELAIDA</h1>
          {/* <Image
            src={logoDesktop}
            alt="Logo semilleros"
            aria-label="Logo desktop "
            height={50}
            className="hidden md:inline m-3"
          /> */}
          {/* NAV DESKTOP */}
          <nav className="ml-auto flex items-center text-base">
            <ul className="space-x-10 hidden md:flex">
              <li>
                <a
                  href="#quienes-somos"
                  className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300"
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a
                  href="#objetivo"
                  className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300"
                >
                  Objetivo
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#donativo"
                  className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300"
                >
                  Donativo
                </a>
              </li>
              <li>
                <a
                  href="#fases"
                  className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300"
                >
                  Fases
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300"
                >
                  Contacto
                </a>
              </li>
              <li className="flex justify-center items-center hidden">
                <Image
                  src={logoFlag}
                  alt="Logo bandera"
                  width={20}
                  className="mr-4"
                />
                <span className="hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 hover:pb-1 transition-all ease-in-out duration-300">
                  EN
                </span>
              </li>
            </ul>
          </nav>

          {/* NAV MOBILE */}

          <div
            className={`fixed top-0 left-0 w-8/12 h-screen bg-white z-50 shadow-lg p-4 menu transition-all ${
              menuOpen ? "" : "hidden"
            }`}
          >
            <h1 onClick={() => setMenuOpen(false)}>ROSA ADELAIDA</h1>

            <nav className="bg-white">
              <ul>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer ">
                  <Link href={"/RosaAdelaida"}>Inicio</Link>
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  Bibliografía
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  Publicaciones
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  <Link href={"/RosaAdelaida/Curriculum"}>
                    Curriculum Vitae
                  </Link>
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  Citas
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  Aplicación de pruebas
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  Equipo y contacto
                </li>
                <li className="py-2 hover:border-l-8 hover:border-main transition all cursor-pointer">
                  Semilleros de sentido
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderRosa;
