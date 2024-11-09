"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  acf_format,
  api_projects,
} from "@/app/data/enviroments/api.enviroment";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { CardClientSkeleton } from "../skeleton";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useMediaQuery } from "react-responsive";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9353B6",
    },
  },
});

const GridClients = () => {
  const [dataClient, setDataClient] = useState<ClientRender[]>([]);

  const [isLoading, setIsLoading] = useState(true);
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
    if (is2ExtraLarge) setPerPage(28);
    else if (isExtraLarge) setPerPage(28);
    else if (isLarge) setPerPage(24);
    else if (isMedium) setPerPage(15);
    else if (isSmall) setPerPage(12);
    else if (isExtraSmall) setPerPage(9);
    setIsScreenChecked(true);
  }, [isExtraLarge, isLarge, isMedium, isSmall, isExtraSmall]);

  useEffect(() => {
    if (isScreenChecked) {
      fetchData(page, perPage);
    }
  }, [page, perPage, isScreenChecked]);

  const fetchData = async (page = 1, per_page = 10) => {
    setIsLoading(true);
    try {
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
      console.log(response.data);
      const clients: ClientRender[] = response.data.map((client: any) => ({
        id: client.id,
        slug: client.slug,
        img: client.acf.imagen_destacada,
        title: client.acf.cliente,
        services: client.acf.services,
      }));

      setDataClient(clients);
      setTotalPages(response.headers["x-wp-totalpages"]);
      setTotalItems(response.headers["x-wp-total"]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className="  w-full bg-zinc-50 " id="clientes">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 flex flex-col">
        <div className="text-center mb-16">
          <h2 className="xl:text-[2.5rem] text-[1.2rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-6">
            Empresas que han elegido{" "}
            <span className="text-[#9353B6]">innovar</span> con nosotros
          </h2>
          <p className="text-stone-500 lg:text-[1.3rem] text-base">
            Hemos tenido el privilegio de colaborar con múltiples empresas,
            construyendo relaciones duraderas y desarrollando proyectos que
            superan expectativas.
          </p>
        </div>
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
            ) : dataClient.length === 0 ? (
              <div className="col-span-full text-center">
                No se encontraron clientes disponibles{" "}
              </div>
            ) : (
              dataClient.map((client) => (
                <RenderClient
                  id={client.id}
                  slug={client.slug}
                  img={client.img}
                  title={client.title}
                  services={client.services}
                />
              ))
            )}
          </div>
          {/* paginacion */}
          {dataClient.length > 0 && (
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
        </div>
      </div>
    </section>
  );
};

type ClientRender = {
  id: string;
  slug: string;
  img: string;
  title: string;
  services: string;
};

const RenderClient: React.FC<ClientRender> = ({
  id,
  slug,
  img,
  title,
  services,
}) => {
  const defaultImageUrl =
    "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png";
  return (
    <RevealWrapper
      key={id}
      origin="bottom"
      duration={1000}
      className=" w-full justify-center flex items-center relative overflow-hidden group"
    >
      <Link
        href="/portafolio/[slug]"
        as={`/portafolio/${slug}`}
        className="container w-full group"
        rel="bookmark"
      >
        <div className="card group relative transition-all duration-500">
          <div className="front w-full h-full bg-white flex items-center justify-center  aspect-square">
            <Image
              width={237}
              height={237}
              loading="lazy"
              className="w-[80%] h-[80%] group-hover:scale-105 transition-all duration-500 aspect-square ease-in-out object-contain"
              src={img ? img : defaultImageUrl}
              alt={"Cliente: " + title}
              title={"Cliente: " + title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultImageUrl;
              }}
            />
          </div>
          <div className="back absolute opacity-0 group-hover:opacity-100 flex flex-col top-0 h-full w-full transition-all justify-center items-center duration-500 ease-in-out bg-white">
            <Image
              width={237}
              height={237}
              loading="lazy"
              className="w-[80%] h-[80%] group-hover:scale-105 transition-all duration-500 aspect-square ease-in-out object-contain"
              src={img ? img : defaultImageUrl}
              alt={"Cliente: " + title}
              title={"Cliente: " + title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultImageUrl;
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-1 md:px-2 gap-2">
              <span className="text-xs sm:text-sm md:text-base text-white text-center font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-700 inline-block  break-words whitespace-normal break-all">
                {title}
              </span>
              <p className=" text-xs md:text-sm text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-700">
                {services}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </RevealWrapper>
  );
};

export default GridClients;
