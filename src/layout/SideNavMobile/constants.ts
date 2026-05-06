import logoTrazaurus from "../../../public/trazarus/trazaurus-logo.svg";
import logoSilee from "../../../public/simply-logo-silee.svg";

export const menu = [
  { href: "/", label: "Inicio" },
  {
    href: "#",
    label: "Nosotros",
    submodules: [
      { href: "/quienes-somos", label: "¿Quiénes sómos?" },
      {
        href: "/retos-educativos",
        label: "Retos Educativos",
      },
      {
        href: "/fundamentos-existenciales",
        label: "Fundamentos existenciales",
      },
      { href: "/alianzas", label: "Alianzas" },
      { href: "/red-frankl", label: "Red Frankl" },
      {
        href: "/rosa-adelaida/curriculum",
        label: "Dra. Rosa Adelaida",
      },
      { href: "/beneficios", label: "Beneficios" },
    ],
  },
  { href: "/logoterapia", label: "Logoterapia" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trazaurus", label: "Trazaurus", logo: logoTrazaurus },
  { href: "/sile", label: "Silé", logo: logoSilee },
  { href: "/#contacto", label: "Contacto" },
];
