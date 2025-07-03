import Image from "next/image";
import React from "react";
import logo from "../../../../../public/trazarus/trazaurus-logo.svg";

const HeaderTrazaurus = () => {
  return (
    <header className="p-3 flex justify-center shadow-md sticky top-0 bg-white">
      <Image src={logo} alt="Logo Trazaurus " className="w-36" />
    </header>
  );
};

export default HeaderTrazaurus;
