import logoTrazaurus from "../../../public/trazaurus/trazaurus-logo.svg";
import logoSilee from "../../../public/simply-logo-silee.svg";

export const menu = [
  { href: "/", label: "Inicio" },
  {
    href: "#",
    label: "Nosotros",
    submodules: [
      {
        href: "/retos-educativos",
        label: "Retos Educativos",
      },
      {
        href: "/fundamentos-existenciales",
        label: "Fundamentos existenciales",
      },
      {
        href: "/rosa-adelaida/curriculum",
        label: "Dra. Rosa Adelaida",
      },
      { href: "/beneficios", label: "Beneficios" },
    ],
  },
  { href: "/logoterapia", label: "Logoterapia" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trazaurus", label: "Trazaurus", logo: logoTrazaurus },
  { href: "/silee", label: "SILEE", logo: logoSilee },
  { href: "/#contacto", label: "Contacto" },
];
