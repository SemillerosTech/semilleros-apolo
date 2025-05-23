import Image from "next/image";
import React from "react";
import acorns from "../../../public/acorns.png";

const ComingSoon = () => {
  return (
    <section className="w-full  flex items-center justify-center">
      <article className="text-center flex flex-col items-center justify-center">
        <Image src={acorns} alt="Banner" className="w-[200px]" />
        <h2 className="text-7xl lg:text-[10rem] pb-10 ">Próximamente</h2>

        <p>Estamos trabajando para ti </p>
      </article>
    </section>
  );
};

export default ComingSoon;
