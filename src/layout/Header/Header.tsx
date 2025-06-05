"use client";

import "animate.css";
import React, { useState } from "react";
import Image from "next/image";
import menu from "../../../public/icons/menu-ham.svg";
import logoDesktop from "../../../public/logo-semilleros-apaizado.svg";
import logoMobile from "../../../public/logo-semilleros-mobile.svg";
import logoFlag from "../../../public/usa-flag.svg";
import SideNavMobile from "../SideNavMobile/SideNavMobile";
import Link from "next/link";
import DropDown from "./DropDown/DropDown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="bg-white shadow-md md:px-8 sticky top-0 animate__animated animate__bounceIn z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* MENU MOBILE */}
          <div className="flex max-h-[70px] w-full md:hidden justify-between p-3">
            <Image
              src={menu}
              alt="Menu principal"
              className="h-[1.5rem] cursor-pointer z-10"
              onClick={() => setMenuOpen(true)}
            />

            <div className="absolute w-full h-[70px] justify-center top-0 left-0 flex z-0">
              <Link href={"/"}>
                <Image
                  src={logoMobile}
                  alt="Logo semilleros"
                  className="h-[200px]"
                />
              </Link>
            </div>

            <Image
              src={logoFlag}
              alt="Logo bandera"
              className="h-[1.5rem] z-10"
            />
          </div>

          {/* MENU DESKTOP */}
          <Link href={"/"}>
            <Image
              src={logoDesktop}
              alt="Logo semilleros"
              height={50}
              className="hidden md:inline m-3"
            />
          </Link>

          <nav className="ml-auto flex items-center text-base">
            <ul className="hidden md:flex space-x-10 relative z-50">
              <NavItem href="/" label="Inicio" />

              <DropDown
                label="Nosotros"
                items={[
                  { href: "/quienes-somos", label: "¿Quiénes sómos?" },
                  {
                    href: "/retos-educativos",
                    label: "Retos Educativos",
                  },
                  {
                    href: "/fundamentos-existenciales",
                    label: "Fundamentos existenciales",
                  },
                  { href: "/alianzas", label: "Alianzas" },
                  { href: "/red-frankl", label: "Red Frankl" },
                  {
                    href: "/rosa-adelaida/curriculum",
                    label: "Dra. Rosa Adelaida",
                  },
                  { href: "/beneficios", label: "Beneficios" },
                ]}
                isOpen={openDropdown === "nosotros"}
                onOpen={() => setOpenDropdown("nosotros")}
                onClose={() => setOpenDropdown(null)}
              />

              <DropDown
                label="Logoterapia"
                items={[
                  { href: "/logoterapia", label: "¿Qué es?" },
                  { href: "/recursos", label: "Recursos" },
                  { href: "/material-didactico", label: "Material Didáctico" },
                  { href: "/fichas-tecnicas", label: "Fichas técnicas" },
                ]}
                isOpen={openDropdown === "logoterapia"}
                onOpen={() => setOpenDropdown("logoterapia")}
                onClose={() => setOpenDropdown(null)}
              />

              <NavItem href="/proyectos" label="Proyectos" />
              <NavItem href="/servicios" label="Servicios" />
              <NavItem href="/#contacto" label="Contacto" />
              {/* <NavItem href="/trazaurus" label="Trazaurus" /> */}
            </ul>
          </nav>
        </div>
      </header>

      <SideNavMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href}>
      <span className="cursor-pointer hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 transition-all duration-300">
        {label}
      </span>
    </Link>
  </li>
);

export default Header;
