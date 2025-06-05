import "animate.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import banner from "../../public/semilleros-de-sentido-logo-terapia-en-accion-banner.jpg";
import bannerMobile from "../../public/banner-mobile.jpg";
import backshapes from "../../public/back-shapes.svg";
import FloatingElements from "../components/FloatingElements/FloatingElements";
import NewsLetterForm from "../components/NewsLetterForm/NewsLetterForm";
import contactanos from "../../public/contactanos.png";
import semilla from "../../public/icons/semilla.png";
import quienesomos from "../../public/quienes-somos-logoterapia.png";
import logoterapia from "../../public/que-es-la-logoterapia.png";
import retosEducativos from "../../public/retos-educativos.png";
import fundamentosExistenciales from "../../public/fundamentos-existenciales.png";
import donativo from "../../public/donativo.png";

export default function Home() {
  return (
    <>
      <Header />
      <Image
        src={backshapes}
        alt="Imagenes de fondo "
        className="fixed -z-10 w-2/3 right-20 opacity-30 top-10"
      />
      {/* MAIN BANNER */}
      <section className="h-fit animate__animated animate__fadeInLeft">
        <Image
          src={banner}
          alt="Menu principal"
          className="hidden md:block w-full"
        />

        <Image
          src={bannerMobile}
          alt="Menu principal"
          className="md:hidden w-full"
        />
      </section>

      {/* SEMILLEROS DE SENTIDO */}
      <section className="mx-auto container px-5 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src={quienesomos}
              alt="Menu principal"
              className="w-8/12 mx-auto my-10 drop-shadow-md floating-image"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center flex items-center justify-center flex-col gap-y-6">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className="m-0">Semilleros de sentido a.c.</h2>
            <p>
              Somos una <b>asociación civil en México</b> dedicada a promover
              los principios de la <b>Logoterapia de Viktor E. Frankl.</b>
              Trabajamos para inspirar la
              <b>búsqueda de propósito y significado en la vida</b>,
              enfocándonos especialmente en niños, adolescentes y el ámbito
              educativo, fomentando el crecimiento personal y el empoderamiento.
            </p>
            <Link href={"/quienes-somos"}>
              <button className="rounded-full bg-main text-white px-16 py-2 font-bold text-2xl hover:scale-110 transition-all">
                Más información
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* QUE ES LA LOGOTERAPIA  */}
      <section className="mx-auto container px-5 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 text-center flex items-center justify-center flex-col gap-y-6 order-2 lg:order-1">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className="m-0">¿Qué es la logoterapia?</h2>
            <p>
              <b>La logoterapia es una corriente de la psicología</b> que ayuda
              a las personas a encontrar sentido en sus vidas, incluso en
              momentos difíciles. Fue desarrollada por el doctor Viktor Frankl,
              quien descubrió que, al conectar con un <b>propósito profundo</b>,
              las personas pueden superar el dolor, la ansiedad o el vacío
              existencial. En esencia, la logoterapia nos recuerda que siempre
              podemos elegir cómo responder ante lo que vivimos, y que cada vida
              tiene un valor único e irrepetible.
            </p>
            <Link href={"/logoterapia"}>
              <button className="rounded-full bg-main text-white px-16 py-2 font-bold text-2xl hover:scale-110 transition-all">
                Más información
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
            <Image
              src={logoterapia}
              alt="Menu principal"
              className="w-8/12 mx-auto my-10 drop-shadow-md floating-image"
            />
          </div>
        </div>
      </section>

      {/* RETOS EDUCATIVOS */}
      <section className="mx-auto container px-5 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-strech">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src={retosEducativos}
              alt="Menu principal"
              className="w-8/12 mx-auto my-10 drop-shadow-md floating-image"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center flex items-center justify-center flex-col gap-y-6">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className="m-0">Retos Educativos</h2>
            <p>
              La logoterapia enfrenta varios retos educativos en México, como la
              <b>falta de formación especializada en docentes</b>, la{" "}
              <b>
                dificultad de adaptar sus conceptos a distintos niveles
                escolares
              </b>
              , y las
              <b>limitaciones de tiempo y recursos en las escuelas</b>. Además,
              su integración curricular no es sencilla, ya que requiere un
              <b>
                cambio de enfoque hacia una pedagogía centrada en el sentido de
                vida
              </b>
              , algo que aún no está plenamente valorado en el
              <b>sistema educativo tradicional</b>.
            </p>
            <Link href={"/retos-educativos"}>
              <button className="rounded-full bg-main text-white px-16 py-2 font-bold text-2xl hover:scale-110 transition-all">
                Más información
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FUNDAMENTOS EXISTENCIALES  */}
      <section className="mx-auto container px-5 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 text-center flex items-center justify-center flex-col gap-y-6 order-2 lg:order-1">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite infinite"
            />
            <h2 className="m-0">Fundamentos Existenciales</h2>
            <p>
              Los fundamentos existenciales de la logoterapia se basan en{" "}
              <b>tres pilares clave</b> que definen su enfoque hacia la vida y
              el ser humano: el <b>sentido de la vida</b>, la{" "}
              <b>libertad de voluntad</b>, y la <b>responsabilidad personal</b>.
              Según esta perspectiva, cada individuo tiene la capacidad de{" "}
              <b>descubrir un propósito único</b> que le da dirección y
              significado a su existencia, incluso en medio del sufrimiento. La
              logoterapia sostiene que el ser humano no está determinado
              únicamente por su entorno o circunstancias, sino que posee
              <b>libertad interior para elegir su actitud</b> frente a cualquier
              situación. Este enfoque promueve una educación que fomente la
              <b>reflexión existencial</b>, el{" "}
              <b>compromiso con valores trascendentes</b>, y la
              <b>búsqueda activa de sentido</b>, elementos fundamentales para el
              desarrollo integral de la persona en contextos educativos y
              sociales cada vez más desafiantes.
            </p>
            <Link href={"/fundamentos-existenciales"}>
              <button className="rounded-full bg-main text-white px-16 py-2 font-bold text-2xl hover:scale-110 transition-all">
                Más información
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
            <Image
              src={fundamentosExistenciales}
              alt="Menu principal"
              className="w-8/12 mx-auto my-10 drop-shadow-md floating-image"
            />
          </div>
        </div>
      </section>

      <section id="donativo" className="container mx-auto text-center px-5">
        <Image
          src={semilla}
          alt="Menu principal"
          className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
        />
        <h2 className=" my-3">Donativo para tu escuela</h2>

        <p className="mb-20">
          Tu escuela recibirá un donativo valorado en <b>$45,000 MXN</b> en
          talleres, <br className="hidden md:block" />
          conferencia y <b>asesorías psicológicas exclusivas</b> para los
          maestros, alumnos y <br className="hidden md:block" />
          padre de familia.
        </p>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto w-5/6 md:w-3/6">
            <ul className="text-left list-disc marker:text-main">
              <li>
                <b>Talleres para maestros:</b> Estrategias para el bienestar
                emocional en el aula, técnicas de comunicación empática.
              </li>

              <li>
                <b>Talleres para padres:</b> Los padres recibirán talleres
                enfocados en estrategias de comunicación efectiva con sus hijos,
                apoyo emocional y bienestar familiar, uso responsable de la
                tecnología, desarrollo socioemocional de los niños, manejo de
                crisis y situaciones de estrés, y fomento de la autoestima y
                autonomía en los hijos.
              </li>
              <li>
                <b>Conferencia:</b> Actualización en HERRAMIENTAS
                SOCIOEMOCIONALES, manejo de crisis emocionales en los maestros
                recordar TU SENTIDO DE VIDA.
              </li>
              <li>
                <b>TALLERES:</b>
                HERRAMIENTAS personalizadas para los docentes en relación con la
                salud mental en el contexto escolar y personal.
              </li>
            </ul>
          </div>

          <div className="w-5/6 mt-5 md:mt-auto md:w-2/6">
            <Image
              src={donativo}
              alt="Menu principal"
              className="w-auto mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-main text-white text-center p-5 ">
        <h3 className="text-5xl drop-shadow-md">
          CONTAMOS CON EL APOYO DE EMPRESAS QUE EMPATIZAN CON LA CAUSA{" "}
        </h3>
      </section>

      <section id="contacto" className="container mx-auto text-center pt-20 ">
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-1/2 flex items-end order-2 md:order-1">
            <Image
              src={contactanos}
              alt="Contactanos"
              className="w-[80%] mx-auto"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src={semilla}
              alt="Menu principal"
              className="w-16 mx-auto relative animate__animated animate__pulse animate__infinite	infinite"
            />
            <h2 className=" mt-3 mb-10">CONTACTANOS</h2>
            <p className="mb-5">
              Nos importa mucho lo que nos quieras comunicar
            </p>
            <NewsLetterForm />

            {/* TOAST MENSAJE ENVIADO */}
            <div
              className="flex items-center w-full p-4 mb-4 text-white bg-green-500 rounded-lg shadow-sm hidden"
              role="alert"
            >
              <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ms-3 text-2xl font-normal">
                Mensaje enviado exitosamente
              </div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                data-dismiss-target="#toast-success"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <FloatingElements />
    </>
  );
}
