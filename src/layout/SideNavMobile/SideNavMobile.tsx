"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoSidenav from "../../../public/logo-semilleros.svg";
import logoFlag from "../../../public/usa-flag.svg";

interface SideNavMobileProps {
  isOpen?: boolean; // Prop opcional para control externo
  onClose?: () => void; // Callback opcional para cerrar
}

const SideNavMobile: React.FC<SideNavMobileProps> = ({
  isOpen = true,
  onClose,
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);

  // Sincroniza internalOpen con isOpen cuando cambia desde el padre
  useEffect(() => {
    setInternalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose(); // Si se controla desde afuera, llama a la función externa
    } else {
      setInternalOpen(false); // Si no, maneja el estado internamente
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
        {[
          { href: "#quienes-somos", label: "¿Quiénes somos?" },
          { href: "#objetivo", label: "Objetivo del programa" },
          { href: "#beneficios", label: "Beneficios para el alumno" },
          { href: "#donativo", label: "Donativo para tu escuela" },
          { href: "#fases", label: "Fases del programa" },
          { href: "#footer", label: "Contacto" },
        ].map((item, index) => (
          <li
            key={index}
            className={`border-b p-4 ${
              index === 0 ? "border-main font-semibold" : "border-secondary"
            }`}
          >
            <a
              href={item.href}
              className="text-secondary"
              onClick={handleClose}
            >
              {item.label}
            </a>
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
