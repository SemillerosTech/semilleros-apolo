import React from "react";
import "../../trazaurus.css";
import logo from "../../../../../public/logo-trazaurus.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterTrazaurus = () => {
  return (
    <footer className="bg-trazaurusPurpple py-10 px-5 text-white">
      <Image src={logo} alt="Rino" className="w-6/12 mx-auto" />

      <p className="text-center  mt-10">
        55 2118 7365 <br />
        rossy@semillerosdesentido.org <br />
        Síguenos en:
      </p>

      <div className="w-1/2 mx-auto flex justify-center gap-4 my-5">
        <FontAwesomeIcon icon={faFacebookF} className="text-white w-[20px]" />
        <FontAwesomeIcon icon={faXTwitter} className="text-white w-[32px]" />
        <FontAwesomeIcon icon={faInstagram} className="text-white w-[32px]" />
        <FontAwesomeIcon icon={faYoutube} className="text-white w-[32px]" />
      </div>

      <p className="text-center">
        Derechos reservados Semilleros de sentido AC
      </p>
    </footer>
  );
};

export default FooterTrazaurus;
