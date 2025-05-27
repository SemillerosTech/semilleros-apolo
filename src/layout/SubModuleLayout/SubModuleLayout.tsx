import Image from "next/image";
import React, { ReactNode } from "react";
import bannerPlacehlder from "../../../public/banner-placeholder.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface SubModuleLayoutProps {
  children?: ReactNode;
  bannerImg?: any;
  sectionTitle?: string;
  flip?: boolean;
}

const SubModuleLayout: React.FC<SubModuleLayoutProps> = ({
  children = "",
  bannerImg = bannerPlacehlder,
  sectionTitle = "Seccion nueva",
  flip = false,
}) => {
  return (
    <>
      <Header />
      <main className="bg-amber-500 min-h-[500px] w-full relative flex">
        <div className="relative w-full max-h-[700px] lg:max-h-[500px] overflow-hidden flex items-center justify-center h-screen lg:h-auto">
          <Image
            src={bannerImg}
            alt="Banner"
            fill
            className={`object-cover object-center ${
              flip ? "transform scale-x-[-1]" : ""
            }`}
            priority
          />
        </div>
        <div className="absolute left-0 bottom-10 px-10 py-1 bg-main rounded-r-full flex justify-end lg:w-auto">
          <h1 className="text-white">{sectionTitle}</h1>
        </div>
      </main>

      <div className="container mx-auto py-10 px-5">
        {children ? (
          children
        ) : (
          <>
            <h1>Hola Mundo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SubModuleLayout;
