import Image from "next/image";
import React from "react";
import logo from "../../../../../public/trazarus/trazaurus-logo.svg";
import Link from "next/link";

const HeaderTrazaurus = () => {
  return (
    <header className="p-3 flex justify-center shadow-md sticky top-0 bg-white z-50">
      <Link href={"/trazaurus"}>
        <Image src={logo} alt="Logo Trazaurus " className="w-36" />
      </Link>
    </header>
  );
};

export default HeaderTrazaurus;
