"use client";

import "animate.css";
import React, { useState } from "react";
import Image from "next/image";
import menu from "../../../../public/icons/menu-ham.svg";
import logoDesktop from "../../../../public/logo-semilleros-apaizado.svg";
import logoMobile from "../../../../public/logo-semilleros-mobile.svg";
import logoFlag from "../../../../public/usa-flag.svg";
import SideNavMobile from "../SideNavMobile/SideNavMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md md:px-8 sticky top-0 animate__animated animate__bounceIn z-10">
        <div className="container mx-auto flex">
          {/* MENU MOBILE */}
          <div className="flex max-h-[70px] w-full  relative justify-between p-3 md:hidden relative">
            <Image
              src={menu}
              alt="Menu principal"
              className="h-[1.5rem] cursor-pointer z-10"
              onClick={() => {
                setMenuOpen(true);

                console.log("clickerd");
              }}
            />

            <div className="absolute w-full h-[70px] justify-center top-0 left-0  flex z-1 md:hidden">
              <Image
                src={logoMobile}
                alt="Logo semilleros"
                aria-label="Logo desktop "
                className="h-[200px]"
              />
            </div>

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
          <Image
            src={logoDesktop}
            alt="Logo semilleros"
            aria-label="Logo desktop "
            height={50}
            className="hidden md:inline m-3"
          />

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
        </div>
      </header>

      {/* SIDENAV MOBILE */}
      <SideNavMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
