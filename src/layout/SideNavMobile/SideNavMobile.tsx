"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { menu } from "./constants";
import logoSidenav from "../../../public/logo-semilleros.svg";
import logoFlag from "../../../public/usa-flag.svg";

interface SideNavMobileProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SideNavMobile: React.FC<SideNavMobileProps> = ({
  isOpen = true,
  onClose,
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const [menuOpen, setMenuOpen] = useState("");

  useEffect(() => {
    setInternalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  const openDropDown = (menu: string) => {
    if (menuOpen === menu) {
      setMenuOpen("");
    } else {
      setMenuOpen(menu);
    }
  };

  return (
    <aside
      className={`bg-white/30 backdrop-blur-xl w-full h-full fixed left-0 top-0 z-50 shadow-lg flex flex-col items-center justify-center md:hidden transition-transform ${
        internalOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Botón de cierre */}
      <button
        onClick={handleClose}
        className="absolute top-4 left-8 text-secondary text-4xl font-bold font-seed"
      >
        X
      </button>

      {/* Logo */}
      <div className="mb-8">
        <Image src={logoSidenav} alt="Logo semilleros" width={80} />
      </div>

      {/* Menú */}
      <ul className="p-4 text-md text-center">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`border-b p-4 border-secondary font-semibold`}
          >
            <a
              href={item.href}
              className="text-secondary"
              onClick={(e) => {
                if (item.href !== "#") {
                  handleClose();
                } else {
                  e.preventDefault(); // Evita que salte arriba en la página
                  openDropDown(item.label);
                }
              }}
            >
              {item.label}
            </a>
            {item.submodules ? (
              <ul className={menuOpen === item.label ? "" : "hidden"}>
                {item.submodules.map((sm, index) => (
                  <li key={index} className="p-4">
                    <a href={sm.href} className="hover:underline">
                      {sm.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}

        {/* Idioma */}
        <li className="flex justify-center items-center p-4 hidden">
          <Image
            src={logoFlag}
            alt="Logo bandera"
            width={40}
            className="mr-4"
          />
          EN
        </li>
      </ul>
    </aside>
  );
};

export default SideNavMobile;
