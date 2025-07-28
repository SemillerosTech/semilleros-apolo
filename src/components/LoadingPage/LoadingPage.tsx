"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import semilla from "../../../public/cargando.svg";

const LoadingPage = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const reloaded = sessionStorage.getItem("hasReloaded");

    if (!reloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    } else {
      setTimeout(() => {
        setHide(true);
        sessionStorage.removeItem("hasReloaded");
      }, 1000);
    }
  }, []);

  return (
    <section
      className={`fixed left-0 top-0 w-full h-full flex items-center justify-center bg-white flex-col z-50 ${
        hide ? "hidden" : ""
      }`}
    >
      <Image src={semilla} alt="llámanos" className="w-[400px] animate-pulse" />
    </section>
  );
};

export default LoadingPage;
