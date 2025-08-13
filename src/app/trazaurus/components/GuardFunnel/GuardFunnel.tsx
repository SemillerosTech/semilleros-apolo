import Image from "next/image";
import React from "react";
import trazaurusLogo from "../../../../../public/logo-trazaurus.svg";
import NewsLetterFormTrazaurus from "@/app/trazaurus/components/NewsLetterFormTrazaurus/NewsLetterFormTrazaurus";

interface GuardFunnelProps {
  onAccessGranted: () => void;
}

const GuardFunnel: React.FC<GuardFunnelProps> = ({ onAccessGranted }) => {
  return (
    <main className="mx-auto max-w-screen-sm flex justify-center flex-col items-center">
      <Image src={trazaurusLogo} alt="Logo Trazaurus" className="w-96" />
      <h1>Bienvenido</h1>
      <p className="py-4">
        Deja tus datos y accede al material complementario de tu libro trazaurus
      </p>

      <NewsLetterFormTrazaurus onSuccess={onAccessGranted} />
    </main>
  );
};

export default GuardFunnel;
