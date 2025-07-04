import Link from "next/link";
import React, { ReactNode } from "react";
import FooterTrazaurus from "../Footer/FooterTrazaurus";
import HeaderTrazaurus from "../Header/HeaderTrazaurus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface LetterLayoutProps {
  children: ReactNode;
  backButton?: boolean;
}

const PageWrapper = ({ children, backButton }: LetterLayoutProps) => {
  return (
    <div>
      <HeaderTrazaurus />
      {children}

      {backButton ? (
        <section className="container mx-auto p-5 max-w-6xl">
          <Link
            href="/trazaurus"
            className="flex text-center text-white bg-trazaurusBlue rounded-full py-3 px-10 font-bold mt-4 text-xl w-full lg:w-fit gap-2 transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faChevronLeft} className=" text-white w-3" />
            Volver
          </Link>
        </section>
      ) : null}

      <FooterTrazaurus />
    </div>
  );
};

export default PageWrapper;
