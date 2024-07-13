import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Spinner } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Process from "./process";

interface ProjectData {
  title: { rendered: string };
  acf: {
    banner: string;
    "imagen-solucion": string;
    cliente: string;
    problema: string;
    necesidad: string;
    imagen: string;
    "solucion-analisis": string;
    "solucion-diseno": string;
    "solucion-desarrollo": string;
    "solucion-pruebas": string;
    "solucion-despliegue": string;
    "banner-descripcion": string;
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
    if (!isLoading && proyecto?.title?.rendered) {
      const projectTitle = proyecto.title.rendered.toLowerCase();
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
    <section className="w-full md:min-h-screen h-full">
      {!isLoading ? (
        <div className={` flex bg-gray-100 relative w-full flex-col `}>
          <div className="max-w-[1920px] mx-auto w-full pb-4 lg:pb-8 xl:px-32 lg:px-16 px-8 py-8 lg:py-16">
            <RevealWrapper origin="left" duration={1500}>
              <Link
                href={"/portafolio"}
                style={{ color: mainColor }}
                className={`flex gap-x-2 items-center`}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 md:h-[1.5rem] w-auto"
                >
                  <path
                    d="M15 20L7 12L15 4"
                    stroke={mainColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Ver todos los proyectos
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="left" duration={1500}>
              <div className="pt-8 pb-4 lg:py-8 flex flex-col gap-2 lg:gap-4">
                <span
                  style={{ color: mainColor }}
                  className={`md:text-xl font-bold lg:font-bold uppercase`}
                >
                  Categoría de servicio: {proyecto.title?.rendered}
                </span>
                <h2
                  style={{ color: mainColor }}
                  className={`text-4xl md:text-6xl font-semibold
                     capitalize`}
                  title={proyecto.acf?.cliente}
                >
                  {proyecto.acf?.cliente}
                </h2>
              </div>
            </RevealWrapper>

            <div className="pb-4 lg:pb-8 relative">
              <RevealWrapper origin="bottom" duration={1500} className={""}>
                <div className=" md:absolute w-full h-full top-0 left-0 md:justify-center md:items-center flex">
                  <p
                    className={`text-xl text-white lg:text-2xl xl:text-3xl 2xl:text-4xl md:text-center md:max-w-[40%] font-semibold pb-4 md:pb-0 drop-shadow-lg`}
                  >
                    {proyecto.acf?.["banner-descripcion"]}
                  </p>
                </div>
                <img
                  loading="lazy"
                  src={
                    proyecto.acf?.banner
                      ? proyecto.acf.banner
                      : "https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
                  }
                  className="w-full h-auto object-cover aspect-video shadow-md"
                  alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
                  title="Servicio de Marketing Digital para Social Commerce"
                />
              </RevealWrapper>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8">
              <RevealWrapper
                origin="bottom"
                duration={1500}
                className={"lg:w-1/3"}
              >
                <span
                  style={{ color: mainColor }}
                  className={`text-xl lg:text-2xl font-bold`}
                >
                  PROBLEMA
                </span>
                <p className={` font-light text-[#444] xl:text-lg md:font-normal`}>
                  {proyecto.acf?.problema}
                </p>
              </RevealWrapper>

              <RevealWrapper
                origin="bottom"
                duration={1500}
                className={"lg:w-1/3"}
              >
                <span style={{ color: mainColor }} className={`text-xl lg:text-2xl  font-bold`}>
                  NECESIDAD
                </span>
                <p className="font-light text-[#444] xl:text-lg md:font-normal">
                  {proyecto.acf?.necesidad}
                </p>
              </RevealWrapper>
            </div>
          </div>
          <div className="max-w-[1920px] mx-auto w-full xl:px-32 lg:px-16 px-8 py-8 lg:py-16 relative flex items-end flex-col lg:flex-row">
            <div className=" relative w-full lg:w-[60%] lg:h-[700px] h-auto ">
              <RevealWrapper
                origin="left"
                duration={1500}
                className={"w-ful h-full shadow-md"}
              >
                <img
                  loading="lazy"
                  src={
                    proyecto.acf["imagen-solucion"]
                      ? proyecto.acf["imagen-solucion"]
                      : "https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
                  }
                  className="w-full h-full object-cover  "
                  alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
                  title="Servicio de Marketing Digital para Social Commerce"
                />

                <div className="  ">
                  <RevealWrapper
                    origin="bottom"
                    duration={1500}
                    className={
                      "absolute lg:bottom-6 lg:right-8 bottom-2 right-2"
                    }
                  >
                    <img
                      loading="lazy"
                      src={proyecto?.acf.imagen}
                      alt={`logo ${proyecto?.acf.cliente}`}
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
                <span
                style={{ color: mainColor }}
                  className={` font-black text-4xl md:text-5xl lg:text-9xl drop-shadow-md`}
                >
                  SOLUCIÓN
                </span>
              </RevealWrapper>
            </div>
            <RevealWrapper
              origin="bottom"
              duration={1500}
              className={"w-full lg:w-[40%] lg:h-full h-auto pt-8 lg:pt-0"}
            >
              <div className="flex justify-center items-start w-full h-full mb-8">
                <div className="relative h-[340px] w-[86px]  border-t-8 border-r-8 border-[#A52DE6]">
                  <div className="absolute border-none -top-5 left-0  h-8 w-8 bg-[#A52DE6]"></div>
                  <div className="absolute -right-5 top-1/2 h-8 w-8 bg-[#A52DE6]"></div>
                  <div className="absolute -right-5 bottom-0 h-8 w-8 bg-[#A52DE6]"></div>
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
      />
    </section>
  );
}

export default BannerDetailPortfolio;
