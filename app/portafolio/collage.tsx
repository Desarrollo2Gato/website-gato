"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Image from "next/image";
import { acf_format, api_projects, per_page } from "../data/enviroments/api.enviroment";

function CollagePortfolio() {
  interface PortafolioItem {
    slug: string;
    acf: {
      imagen: string;
      cliente: string;
      "cliente-slug": string;
      services: string;
    };
    title: {
      rendered: string;
    };
  }

  const [dataPortfolio, setDataPortfolio] = useState<PortafolioItem[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías"
  );

  const [isMobile, setIsMobile] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        api_projects + "?" + acf_format + "&" + per_page
      );
      const projects = response.data;
      setDataPortfolio(projects);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const filteredPortafolio =
    selectedCategory === "Todas las categorías"
      ? dataPortfolio
      : dataPortfolio.filter((item) =>
          item.slug.includes(
            selectedCategory.toLowerCase().replace(/ /g, "-").replace(/ñ/g, "n")
          )
        );
  const defaultImageUrl =
    "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png";

  const renderPortfolioItem = (item: any) => (
    <Link
      key={item.id}
      href="/portafolio/[slug]/"
      as={`/portafolio/${item.slug}`}
      className="group relative flex justify-center items-center overflow-hidden border aspect-square"
    >
      <Image
        loading="lazy"
        width={271}
        height={271}
        className="xl:w-[65%] xl:h-[65%] h-[85%] w-[85%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
        src={item.acf?.imagen_destacada ? item.acf.imagen_destacada : defaultImageUrl}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultImageUrl;
        }}
        alt={`Logo de  ${item.acf.cliente}`}
        title={`Logo de  ${item.acf.cliente}`}
      />
      <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 p-1 md:p-3 animate-fade-up flex-col justify-center items-center gap-4 text-white">
        <span className="font-semibold text-base md:text-2xl text-center">
          {item.acf.cliente}
        </span>
        <span className="text-xs md:text-base text-center capitalize">{item.acf?.services}</span>
      </div>
    </Link>
  );
  return (
    <section className="w-full">
      <div className="sm:px-12 lg:px-16 px-8 py-16 max-w-[1440px] mx-auto">
         <RevealWrapper duration={1500} origin="top">
        <div>
          <h1
            title="GATO - Portafolio de proyectos"
            className="text-4xl
            text-[#3D3D3D] font-medium uppercase mb-8"
          >
            Portafolio
          </h1>
        </div>
      </RevealWrapper>
      <RevealWrapper duration={1500} origin="left">
        {isMobile ? (
          <select
            className="cursor-pointer w-full border-none bg-white text-[#4F4F4F] text-lg font-semibold outline-none focus:ring-[#6D28D9] placeholder-[#3D3D3D]"
            value={selectedCategory}
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            {[
              "Todas las categorías",
              "Marketing Digital",
              "Diseño Web",
              "Desarrollo de Software",
              "Desarrollo de Móvil",
              "Branding",
            ].map((category) => (
              <option key={category} value={category} className="">
                {category}
              </option>
            ))}
          </select>
        ) : (
          <nav className="w-full">
            <ul className=" relative flex gap-x-4 lg:gap-x-6 text-[#4F4F4F] font-semibold">
              {[
                "Todas las categorías",
                "Marketing Digital",
                "Diseño Web",
                "Desarrollo de Software",
                "Desarrollo de Móvil",
                "Branding",
              ].map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer group hover:text-[#6D28D9] lg:text-lg ${
                    selectedCategory === category ? "text-[#6D28D9]" : ""
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                  <div
                    className={`abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      selectedCategory === category ? "scale-x-100" : ""
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </RevealWrapper>
      <RevealWrapper
        duration={1500}
        origin="bottom"
        className={`mt-8 md:mt-12`}
      >
        {isLoading ? (
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
        ) : (
          <Pagination
            dataName="proyectos"
            data={filteredPortafolio}
            itemsPerPageMobile={6}
            itemsPerPageTablet={9}
            itemsPerPageDesktop={12}
            itemsPerPageLargeDesktop={15}
            render={renderPortfolioItem}
            gridClass={
              "grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-2 md:gap-4 xl:gap-8 "
            }
          />
        )}
      </RevealWrapper>
      </div>
     
    </section>
  );
}

export default CollagePortfolio;
