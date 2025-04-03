import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Image from "next/image";
import acorns from "../../../../public/acorns.png";
import crown from "../../../../public/crown.png";
import loguito from "../../../../public/semilleros-loguito.png";
import HeaderRosa from "../layout/HeaderRosa/HeaderRosa";

const page = () => {
  return (
    <>
      <HeaderRosa />
      <Jumbotron />

      <section className="container mx-auto flex py-10 gap-8">
        <div className="w-2/12">
          <div className="sticky top-24">
            <Image src={acorns} alt="Rosa Adelaida " className="w-full" />
            <Image
              src={crown}
              alt="Rosa Adelaida "
              className="w-[50%] mx-auto my-20  "
            />
            <Image
              src={loguito}
              alt="Rosa Adelaida "
              className="w-[50%] mx-auto"
            />
          </div>
        </div>
        <div className="w-10/12">
          <ul className="mb-10">
            <li>
              <strong>Licenciada en Psicología</strong> por la UNAM FES
              Iztacala.
            </li>
            <li>
              <strong>Logoterapeuta</strong> por la Casa Viktor Frankl.
            </li>
            <li>
              <strong>Maestra en Educación</strong> por la Universidad
              Tecnológica de México.
            </li>
            <li>
              <strong>Maestra en Filosofía</strong> por la Universidad TECH de
              España.
            </li>
            <li>
              <strong>Doctorado en Logoterapia</strong> por la Universidad
              Andragógica Americana (En progreso).
            </li>
          </ul>

          <ul className="mb-10">
            <li>
              <strong>Miembro activo</strong> del Consejo de Transformación
              Educativa.
            </li>
            <li>
              <strong>Miembro del Comité Científico</strong> de la Revista
              Intercontinental de Psicología y Educación de la Universidad
              Intercontinental.
            </li>
            <li>
              <strong>Miembro activo</strong> de la Alianza Mundial para
              Encuentros con Sentido.
            </li>
            <li>
              <strong>Miembro del Comité Científico</strong> de la Revista
              Intercontinental de Psicología y Educación de la Universidad
              Intercontinental.
            </li>
          </ul>

          <p className="mb-10">
            Directora y fundadora de la Asociación “Semilleros de Sentido”, A.C.
            donde se encuentra desarrollando la escala existencial para niños
            titulada LiReSen (libertad, responsabilidad y sentido) aplicable a
            niños de 6 a 12 años, la escala se basa en la línea de investigación
            que desarrolla desde hace más de 18 años con niños, adolescentes y
            familias con enfoque logoterapeútico, siendo una de las 4
            logoterapeutas a nivel internacional que lo desarrolla.
          </p>

          <p className="mb-10">
            Y en 2023 fruto de estas conferencias publicó su primer libro:
            “Niñ@s y adolescentes: Semilleros de Sentido”.
          </p>

          <p className="mb-10">
            En 2022 recibió el reconocimiento de Psicóloga Mexicana Destacada
            por el Consejo Mexicano de Psicología, tanto por su trayectoria a
            nivel nacional e internacional como por su trabajo con poblaciones
            de riesgo y vulnerables
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
