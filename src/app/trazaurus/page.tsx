"use client";

import React, { useState, useEffect } from "react";
import "./trazaurus.css";
import HeaderTrazaurus from "./Layout/Header/HeaderTrazaurus";
import FooterTrazaurus from "./Layout/Footer/FooterTrazaurus";
import NavigationLetters from "./components/NavigationLetters/NavigationLetters";
import GuardFunnel from "./components/GuardFunnel/GuardFunnel";

const Page = () => {
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    // Verificar localStorage al cargar el componente
    const hasAccess = localStorage.getItem("trazaurusAccess") === "true";
    setAccessGranted(hasAccess);
  }, []);

  const handleAccessGranted = () => {
    localStorage.setItem("trazaurusAccess", "true");
    setAccessGranted(true);
  };

  return (
    <>
      {accessGranted ? (
        <>
          <HeaderTrazaurus />
          <NavigationLetters />
          <FooterTrazaurus />
        </>
      ) : (
        <GuardFunnel onAccessGranted={handleAccessGranted} />
      )}
    </>
  );
};

export default Page;
