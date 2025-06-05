import React from "react";
import Image from "next/image";
import rosaAdelaida from "../../../../../public/rosa-adelaida.jpg";
import star from "../../../../../public/star.svg";
import elipse from "../../../../../public/elipse.svg";
import square from "../../../../../public/rectabgle.svg";
import cross from "../../../../../public/cros.svg";

const Jumbotron = () => {
  return (
    <main className=" bg-secondary text-white">
      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/12 bg-consultorio">
          <Image
            src={rosaAdelaida}
            alt="Rosa Adelaida "
            className="w-[60%] mx-auto"
          />
        </div>

        <div className=" w-full lg:w-8/12 flex flex-col justify-center p-5 relative">
          <Image
            src={star}
            alt="Imagenes de fondo "
            className="w-24 absolute top-6 left-0"
          />

          <Image
            src={elipse}
            alt="Imagenes de fondo "
            className="w-14 absolute bottom-6 left-10"
          />

          <Image
            src={square}
            alt="Imagenes de fondo "
            className="w-24 absolute top-8 right-52"
          />

          <Image
            src={cross}
            alt="Imagenes de fondo "
            className="w-24 absolute bottom-6 right-16"
          />

          <div className="bg-main absolute right-10 top-0 w-[50px] h-[200px] rounded-b-full"></div>

          <h1>Dra. Rosa Adelaida Del Valle Puente</h1>
          <p className="text-justify">
            Psicóloga clínica desde hace 28 años en su consultorio particular
            donde trabaja con niños, adolescentes y adultos, con enfoque
            humanista y logoterapeútico. Cuenta con diversos diplomados, cursos
            y talleres que ha tomado para fortalecer la formación como psicóloga
            clínica de niños y adolescentes, los cuales ha impar
          </p>
        </div>
      </section>
    </main>
  );
};

export default Jumbotron;
