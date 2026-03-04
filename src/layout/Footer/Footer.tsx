import React from "react";
import Image from "next/image";
import logoWhite from "../../../public/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-secondary py-20 text-center text-white text-lg"
      >
        <div className="container mx-auto ">
          <Image
            src={logoWhite}
            alt="Menu principal"
            className="w-auto mx-auto mb-5"
          />
          <p>55 3017 9924</p>
          <p>rossy@semillerosdesentido.org</p>

          <div className="flex gap-4 w-fit mx-auto mt-5">
            <a
              href="https://www.facebook.com/p/Semilleros-de-Sentido-AC-61564845728192/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-6" />
            </a>
            <a
              href="https://www.youtube.com/@semillerosdesentido"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@semillerossilee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-6" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
