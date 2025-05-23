import React from "react";
import Image from "next/image";
import logoWhite from "../../../public/logo-white.svg";
import facebook from "../../../public/icons/facebook.png";
import instagram from "../../../public/icons/instagram.png";
import x from "../../../public/icons/x.png";

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

          <div className="flex gap-2 w-fit mx-auto mt-5">
            <Image
              src={facebook}
              alt="Menu principal"
              className="w-auto mx-auto"
            />
            <Image
              src={instagram}
              alt="Menu principal"
              className="w-auto mx-auto"
            />
            <Image src={x} alt="Menu principal" className="w-auto mx-auto" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
