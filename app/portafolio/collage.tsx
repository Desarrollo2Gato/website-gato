"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  acf_format,
  api_projects,
  api_services,
} from "../data/enviroments/api.enviroment";
import { useMediaQuery } from "react-responsive";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { CardClientSkeleton } from "../components/skeleton";
import { IImage, IProject } from "../types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4608AD",
    },
  },
});

const servicesName = [
  { name: "Todo", slug: "todo" },
  { name: "Marketing Digital", slug: "marketing-digital" },
  { name: "Diseño Web", slug: "diseno-web" },
  { name: "Desarrollo de Software", slug: "desarrollo-de-software" },
  { name: "Desarrollo de Móvil", slug: "desarrollo-movil" },
  { name: "Branding", slug: "branding" },
];

function CollagePortfolio() {
  const [dataPortfolio, setDataPortfolio] = useState<IProject[]>([]);
  const [servicesData, setServicesData] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<{
    id: number | null;
    name: string;
  }>({
    id: null,
    name: "todo",
  });

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const is2ExtraLarge = useMediaQuery({ minWidth: 1536 }); // 2xl min: 1325 col - 8
  const isExtraLarge = useMediaQuery({ minWidth: 1280, maxWidth: 1535 }); //xl min : 1280 col - 7
  const isLarge = useMediaQuery({ minWidth: 1024, maxWidth: 1279 }); // lg: min: 1024 col - 6
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // md: min 768 col -5
  const isSmall = useMediaQuery({ minWidth: 640, maxWidth: 767 }); // sm: min 640 col - 4
  const isExtraSmall = useMediaQuery({ maxWidth: 639 }); //normal - col - 3
  const [isScreenChecked, setIsScreenChecked] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);
  useEffect(() => {
    if (is2ExtraLarge) setPerPage(28);
    else if (isExtraLarge) setPerPage(28);
    else if (isLarge) setPerPage(24);
    else if (isMedium) setPerPage(20);
    else if (isSmall) setPerPage(12);
    else if (isExtraSmall) setPerPage(9);
    setIsScreenChecked(true);
  }, [isExtraLarge, isLarge, isMedium, isSmall, isExtraSmall]);

  useEffect(() => {
    if (isScreenChecked) {
      fetchData(page, perPage);
    }
  }, [page, perPage, isScreenChecked]);

  useEffect(() => {
    if (selectedCategory?.name === "todo" || !selectedCategory?.name) return;
    fetchDataByService(page, perPage);
  }, [page, perPage, , selectedCategory]);

  const fetchData = async (page = 1, per_page = 10) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        api_projects +
          "?" +
          acf_format +
          "&" +
          "page=" +
          page.toString() +
          "&per_page=" +
          per_page.toString()
      );
      const projects = response.data;
      setDataPortfolio(projects);
      setTotalPages(Number(response.headers["x-wp-totalpages"]));
      setTotalItems(Number(response.headers["x-wp-total"]));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const fetchDataByService = async (page = 1, per_page = 10) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${api_projects}?servicios=${selectedCategory?.id?.toString()}&${acf_format}&page=${page.toString()}&per_page=${per_page.toString()}`
      );
      const projects = response.data;
      setDataPortfolio(projects);
      setTotalPages(Number(response.headers["x-wp-totalpages"]));
      setTotalItems(Number(response.headers["x-wp-total"]));
    } catch (error) {
      console.log("error by services", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(api_services);
      const services = response.data.map((item: any) => ({
        name: item.name,
        id: item.id,
      }));

      setServicesData(services);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleCategorySelect = (category: any) => {
    if (servicesData.length === 0) {
      return;
    }
    setDataPortfolio([]);
    console.log("category", category);
    if (category === "todo") {
      setSelectedCategory({
        id: null,
        name: "todo",
      });
      fetchData(page, perPage);
    } else {
      const idService = servicesData.find(
        (service) => service.name === category
      );
      console.log("servicio", idService);
      if (idService.id) {
        setSelectedCategory(idService);
      }
    }
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className="w-full">
      <div className="sm:px-12 lg:px-16 px-8 py-16 max-w-[1440px] mx-auto">
        <RevealWrapper duration={1500} origin="top">
          <div>
            <h1
              title="GATO - Portafolio de proyectos"
              className="text-4xl
            text-stone-700 font-medium mb-8"
            >
              Portafolio
            </h1>
          </div>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="left">
          <select
            className=" md:hidden cursor-pointer w-full border-none bg-white text-stone-500 text-lg font-semibold outline-none focus:ring-[#4608AD] placeholder-[#3D3D3D]"
            value={selectedCategory?.name}
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            {servicesName.map((category, index) => (
              <option key={index} value={category.slug} className="">
                {category.name}
              </option>
            ))}
          </select>
          <nav className="hidden md:block w-full">
            <ul className=" relative flex gap-x-4 lg:gap-x-6 text-stone-500 font-semibold">
              {servicesName.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer group hover:text-[#4608AD] lg:text-lg ${
                    selectedCategory?.name === category.slug
                      ? "text-[#4608AD]"
                      : ""
                  }`}
                  onClick={() => handleCategorySelect(category.slug)}
                >
                  {category.name}
                  <div
                    className={`abslute w-full h-0.5 bg-[#4608AD] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      selectedCategory?.name === category.slug
                        ? "scale-x-100"
                        : ""
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </nav>
        </RevealWrapper>
        <RevealWrapper
          duration={1500}
          origin="bottom"
          className={`mt-8 md:mt-12`}
        >
          <div className="w-full ">
            {/* grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-6">
              {isLoading ? (
                Array.from({ length: perPage }).map((_, index) => (
                  <CardClientSkeleton
                    key={index}
                    width={"100%"}
                    height={"100%"}
                  />
                ))
              ) : dataPortfolio.length === 0 ? (
                <div className="col-span-full text-center">
                  No se encontraron clientes disponibles{" "}
                </div>
              ) : (
                dataPortfolio.map((client, index: number) => (
                  <RenderPortfolioItem
                    key={index}
                    img={client?.acf?.imagen_destacada}
                    services={client?.acf?.services}
                    slug={client?.slug}
                    title={client?.acf?.cliente}
                  />
                ))
              )}
            </div>
          </div>
          {/* paginacion */}

          {dataPortfolio.length > 0 && (
            <div className="mx-auto mt-4 flex justify-center">
              <ThemeProvider theme={theme}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                  shape="rounded"
                />
              </ThemeProvider>
            </div>
          )}
        </RevealWrapper>
      </div>
    </section>
  );
}
type ClientRender = {
  slug: string;
  img: IImage;
  title: string;
  services: string;
};

const RenderPortfolioItem: React.FC<ClientRender> = ({
  slug,
  img,
  title,
  services,
}) => {
  const defaultImageUrl =
    "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png";
  return (
    <Link
      href="/portafolio/[slug]/"
      as={`/portafolio/${slug}`}
      className="group relative flex justify-center items-center overflow-hidden border aspect-square"
    >
      <Image
        priority
        width={271}
        height={271}
        className="xl:w-[65%] xl:h-[65%] h-[85%] w-[85%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
        src={img ? img.url : defaultImageUrl}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultImageUrl;
        }}
        alt={img.alt ? img.alt : "Logo"}
        title={img.title ? img.title : "Logo"}
      />
      <div className="absolute hidden group-hover:flex inset-0 bg-stone-900 bg-opacity-70 w-full h-full top-0 p-1 md:p-3 animate-fade-up flex-col justify-center items-center gap-4 text-white transition-all duration-700 ease-in-out">
        <span className="font-semibold text-xs sm:text-sm md:text-base text-center">
          {title}
        </span>
        <span className="text-xs md:text-sm text-center capitalize">
          {services}
        </span>
      </div>
    </Link>
  );
};

export default CollagePortfolio;
