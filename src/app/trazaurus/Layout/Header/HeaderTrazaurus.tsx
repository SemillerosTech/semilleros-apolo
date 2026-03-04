import Image from "next/image";
import React from "react";
import logo from "../../../../../public/trazarus/trazaurus-logo.svg";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const HeaderTrazaurus = () => {
  return (
    <header className="p-3 flex justify-between items-center shadow-md sticky top-0 bg-white z-50 md:px-20">
      <Link href={"/trazaurus"}>
        <Image src={logo} alt="Logo Trazaurus " className="w-36" />
      </Link>

      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/p/Semilleros-de-Sentido-AC-61564845728192/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-trazaurusPurpple hover:text-trazaurusOrange transition-colors"
        >
          <FontAwesomeIcon icon={faFacebook} className="w-5" />
        </a>
        <a
          href="https://www.youtube.com/@semillerosdesentido"
          target="_blank"
          rel="noopener noreferrer"
          className="text-trazaurusPurpple hover:text-trazaurusOrange transition-colors"
        >
          <FontAwesomeIcon icon={faYoutube} className="w-5" />
        </a>
        <a
          href="https://www.tiktok.com/@semillerossilee."
          target="_blank"
          rel="noopener noreferrer"
          className="text-trazaurusPurpple hover:text-trazaurusOrange transition-colors"
        >
          <FontAwesomeIcon icon={faTiktok} className="w-5" />
        </a>
      </div>
    </header>
  );
};

export default HeaderTrazaurus;
