"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import semilla from "../../../public/acorns.png";

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
      <Image src={semilla} alt="llámanos" className="w-[200px] animate-pulse" />
      <h1 className="text-6xl font-bold mt-4">Semilleros de sentido</h1>
    </section>
  );
};

export default LoadingPage;
