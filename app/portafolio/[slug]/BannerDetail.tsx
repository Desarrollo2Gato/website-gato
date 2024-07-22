import { useEffect, useState } from "react";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import Process from "./process";
import { IoChevronBackOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import Image from "next/image";

interface ProjectData {
  title: { rendered: string };
  acf: {
    banner: string;
    "imagen-solucion": string;
    cliente: string;
    services: string;
    problema: string;
    necesidad: string;
    url: string;
    imagen: string;
    "solucion-analisis": string;
    "solucion-diseno": string;
    "solucion-desarrollo": string;
    "solucion-pruebas": string;
    "solucion-despliegue": string;
    "banner-descripcion": string;
    facebook: string;
    instagram: string;
    tiktok: string;
    linkedin: string;
    despliegue: string;
  };
}
interface BannerDetailProps {
  proyecto: ProjectData;
}

function BannerDetailPortfolio({ proyecto }: BannerDetailProps) {
  const colors = [
    {
      color: "#6D28D9",
      solution: "#A52DE6",
    },
    {
      color: "#0BC2E1",
      solution: "#A52DE6",
    },
    {
      color: "#006FF7",
      solution: "#A52DE6",
    },
  ];

  const [mainColor, setMainColor] = useState("");
  const [solutionColor, setSolutionColor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && proyecto?.acf?.services) {
      const projectTitle = proyecto.acf?.services.toLowerCase();
      let selectedColor = { color: "", solution: "" };

      if (
        projectTitle.includes("marketing digital") ||
        projectTitle.includes("branding")
      ) {
        selectedColor = colors[0];
      } else if (projectTitle.includes("diseño web")) {
        selectedColor = colors[1];
      } else if (
        projectTitle.includes("desarrollo de software") ||
        projectTitle.includes("desarrollo movil")
      ) {
        selectedColor = colors[2];
      }

      setMainColor(selectedColor.color);
      setSolutionColor(selectedColor.solution);
    }
  }, [isLoading, proyecto]);

  return (
    <section className="w-full md:min-h-screen h-full bg-gray-100">
      {!isLoading ? (
        <div className={` flex  relative w-full flex-col `}>
          <div className="max-w-[1440px] mx-auto w-full sm:px-12 pb-4 lg:pb-8 lg:p-16 p-8">
            <RevealWrapper origin="left" duration={1500}>
              <Link
                href={"/portafolio"}
                style={{ color: mainColor }}
                className={`flex gap-x-1 items-center hover:translate-x-1 transition-all duration-300`}
              >
                <IoChevronBackOutline
                  style={{ color: mainColor }}
                  className=""
                />
                Ver todos los proyectos
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="left" duration={1500}>
              <div className="pt-8 pb-4 lg:py-8 flex flex-col gap-2 lg:gap-4">
                <span
                  style={{ color: mainColor }}
                  className={`md:text-xl font-bold lg:font-bold uppercase`}
                >
                  Servicio de {proyecto.acf?.services}
                </span>
                <h1
                  style={{ color: mainColor }}
                  className={`text-4xl md:text-6xl font-semibold
                     capitalize`}
                  title={proyecto.acf?.cliente}
                >
                  {proyecto.acf?.cliente}
                </h1>
              </div>
            </RevealWrapper>

            <div className="pb-4 lg:pb-8 relative">
              <RevealWrapper origin="bottom" duration={1500} className={""}>
                <div className=" md:absolute w-full h-full top-0 left-0 md:justify-center md:items-center flex">
                  <p
                    className={`text-xl md:text-white lg:text-2xl xl:text-3xl 2xl:text-4xl md:text-center md:max-w-[40%] font-semibold pb-4 md:pb-0 drop-shadow-lg`}
                  >
                    {proyecto.acf?.["banner-descripcion"]}
                  </p>
                </div>
                <Image
                  width={1440}
                  height={800}
                  priority

                  src={
                    proyecto.acf?.banner
                      ? proyecto.acf.banner
                      : "https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
                  }
                  className="w-full h-auto object-cover aspect-video shadow-md"
                  alt={'Banner de ' + proyecto.acf.cliente}
                  title={'Banner de ' + proyecto.acf.cliente}
                />
              </RevealWrapper>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8">
              <RevealWrapper
                origin="bottom"
                duration={1500}
                className={"lg:w-1/3"}
              >
                <h2
                  style={{ color: mainColor }}
                  className={`text-xl lg:text-2xl font-bold`}
                >
                  PROBLEMA
                </h2>
                <p
                  className={` font-light text-[#444] xl:text-lg md:font-normal`}
                >
                  {proyecto.acf?.problema}
                </p>
              </RevealWrapper>

              <RevealWrapper
                origin="bottom"
                duration={1500}
                className={"lg:w-1/3"}
              >
                <h2
                  style={{ color: mainColor }}
                  className={`text-xl lg:text-2xl  font-bold`}
                >
                  NECESIDAD
                </h2>
                <p className="font-light text-[#444] xl:text-lg md:font-normal">
                  {proyecto.acf?.necesidad}
                </p>
              </RevealWrapper>

              <RevealWrapper
                origin="bottom"
                duration={1500}
                className={"lg:w-fit"}
              >
                <h2
                  style={{ color: mainColor }}
                  className={`text-xl lg:text-2xl  font-bold`}
                >
                  Enlaces
                </h2>
                {!proyecto.acf?.url &&
                !proyecto.acf?.facebook &&
                !proyecto.acf?.instagram &&
                !proyecto.acf?.tiktok &&
                !proyecto.acf?.linkedin ? (
                  <p>Enlaces no encontrados</p>
                ) : (
                  <div className="flex gap-4 flex-wrap justify-center h-full items-center">
                    {proyecto.acf?.url && (
                      <Link
                        target="_blanck"
                        href={proyecto.acf?.url}
                        style={{ backgroundColor: mainColor }}
                        className="text-xl lg:text-3xl text-white rounded-[100%] h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center hover:-translate-y-1 transition-all duration-500"
                      >
                        <FaGlobe />
                      </Link>
                    )}
                    {proyecto.acf?.facebook && (
                      <Link
                        target="_blanck"
                        href={proyecto?.acf?.facebook}
                        style={{ backgroundColor: mainColor }}
                        className="text-xl lg:text-3xl text-white rounded-[100%] h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center hover:-translate-y-1 transition-all duration-500"
                      >
                        <FaFacebookF />
                      </Link>
                    )}
                    {proyecto.acf?.instagram && (
                      <Link
                        target="_blanck"
                        href={proyecto?.acf?.instagram}
                        style={{ backgroundColor: mainColor }}
                        className="text-xl lg:text-3xl text-white rounded-[100%] h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center hover:-translate-y-1 transition-all duration-500"
                      >
                        <FaInstagram />
                      </Link>
                    )}
                    {proyecto.acf?.tiktok && (
                      <Link
                        target="_blanck"
                        href={proyecto?.acf?.tiktok}
                        style={{ backgroundColor: mainColor }}
                        className="text-xl lg:text-3xl text-white rounded-[100%] h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center hover:-translate-y-1 transition-all duration-500"
                      >
                        <FaTiktok />
                      </Link>
                    )}
                    {proyecto.acf?.linkedin && (
                      <Link
                        target="_blanck"
                        href={proyecto?.acf?.linkedin}
                        style={{ backgroundColor: mainColor }}
                        className="text-xl lg:text-3xl text-white rounded-[100%] h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center hover:-translate-y-1 transition-all duration-500"
                      >
                        <FaLinkedinIn />
                      </Link>
                    )}
                  </div>
                )}
              </RevealWrapper>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto w-full xl:  lg:px-16 px-8 py-8 lg:py-16 relative flex items-end flex-col lg:flex-row">
            <div className=" relative w-full lg:w-[60%] lg:h-[700px] h-auto ">
              <RevealWrapper
                origin="left"
                duration={1500}
                className={"w-ful h-full shadow-md"}
              >
                <Image
                  height={770}
                  width={770}
                  loading="lazy"
                  src={
                    proyecto.acf["imagen-solucion"]
                      ? proyecto.acf["imagen-solucion"]
                      : "https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
                  }
                  className="w-full h-full object-cover  "
                  alt={"Imagen solucion de" + proyecto.acf.cliente}
                  title={"Imagen solucion de" + proyecto.acf.cliente}
                />

                <div className="  ">
                  <RevealWrapper
                    origin="bottom"
                    duration={1500}
                    className={
                      "absolute lg:bottom-6 lg:right-8 bottom-2 right-2"
                    }
                  >
                    <Image
                      height={60}
                      width={90}
                      loading="lazy"
                      src={proyecto?.acf.imagen}
                      alt={`Logo de  ${proyecto?.acf.cliente}`}
                      title={`Logo de  ${proyecto?.acf.cliente}`}
                      className="h-[3rem] lg:h-[60px] w-auto object-contain"
                    />
                  </RevealWrapper>
                </div>
              </RevealWrapper>
              <RevealWrapper
                origin="top"
                duration={1500}
                className={
                  "lg:absolute lg:top-4 lg:left-[35%] xl:left-[60%] pt-8 relative"
                }
              >
                <h2
                  style={{ color: mainColor }}
                  className={` font-black text-4xl md:text-5xl lg:text-9xl drop-shadow-md`}
                >
                  SOLUCIÓN
                </h2>
              </RevealWrapper>
            </div>
            <RevealWrapper
              origin="bottom"
              duration={1500}
              className={"w-full lg:w-[40%] lg:h-full h-auto pt-8 lg:pt-0"}
            >
              <div className="flex justify-center items-start w-full h-full mb-8">
                <div
                  style={{ borderColor: mainColor }}
                  className="relative h-[340px] w-[86px]  border-t-8 border-r-8"
                >
                  <div
                    style={{ backgroundColor: mainColor }}
                    className="absolute border-none -top-5 left-0  h-8 w-8"
                  ></div>
                  <div
                    style={{ backgroundColor: mainColor }}
                    className="absolute -right-5 top-1/2 h-8 w-8"
                  ></div>
                  <div
                    style={{ backgroundColor: mainColor }}
                    className="absolute -right-5 bottom-0 h-8 w-8"
                  ></div>
                </div>
                <div
                  style={{ color: mainColor }}
                  className={`-translate-y-[14px] lg:translate-y-0 h-[400px] lg:h-[460px] flex flex-col ml-4 text-xl lg:text-2xl font-semibold lg:font-bold justify-between`}
                >
                  <div className="flex flex-col gap-5">
                    <span>Análisis</span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <span>Diseño</span>
                    <span>Desarrollo</span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <span>Pruebas</span>
                    <span>Despliegue</span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center bg-white bg-opacity-75 z-50">
          <svg
            className="mr-3 h-20 w-20 animate-spin text-[#6D28D9]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      )}
      <Process
        color={mainColor}
        analisis={proyecto.acf["solucion-analisis"]}
        diseño={proyecto.acf["solucion-diseno"]}
        desarrollo={proyecto.acf["solucion-desarrollo"]}
        prueba={proyecto.acf["solucion-pruebas"]}
        despliegue={proyecto.acf["solucion-despliegue"]}
        despliegueImg={proyecto.acf.despliegue}
      />
    </section>
  );
}

export default BannerDetailPortfolio;
