"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import {
  acf_format,
  api_projects,
  per_page,
} from "@/app/data/enviroments/api.enviroment";
import Image from "next/image";

interface ClientItem {
  id: string;
  slug: string;
  acf: {
    imagen_url: string;
    servicio: string;
  };
  title: {
    rendered: string;
  };
}

function decodeHtml(html: string): string {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function GridClients() {
  const [dataClient, setDataClient] = useState<ClientItem[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        api_projects + "?" + acf_format + "&" + per_page
      );
      const clients: ClientItem[] = response.data.map((client: ClientItem) => ({
        ...client,
        title: {
          ...client.title,
          rendered: decodeHtml(client.title.rendered),
        },
      }));
      setDataClient(clients);
      console.log(clients);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const defaultImageUrl =
    "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png";
  const renderClient = (client: any) => (
    <RevealWrapper
      key={client.id}
      origin="bottom"
      duration={1000}
      className=" w-full justify-center flex items-center relative overflow-hidden group"
    >
      <Link
        href="/portafolio/[slug]"
        as={`/portafolio/${client.slug}`}
        className="container w-full group"
        rel="bookmark"
      >
        <div className="card group relative transition-all duration-500">
          <div className="front w-full h-full bg-white flex items-center justify-center  aspect-square">
            <Image
              width={237}
              height={237}
              loading="lazy"
              className="w-[80%] h-[80%] lg:w-[70%] lg:h-[70%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
              src={
                client.acf?.imagen_destacada
                  ? client.acf.imagen_destacada
                  : defaultImageUrl
              }
              alt={"Cliente: " + client.title.rendered}
              title={"Cliente: " + client.title.rendered}
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
              className="w-[80%] h-[80%] lg:w-[70%] lg:h-[70%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
              src={
                client.acf?.imagen_destacada
                  ? client.acf.imagen_destacada
                  : defaultImageUrl
              }
              alt={"Cliente: " + client.acf.cliente}
              title={"Cliente: " + client.acf.cliente}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultImageUrl;
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-1 md:px-2 gap-2">
              <span className="text-base md:text-2xl text-white text-center font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-700">
                {client.acf.cliente}
              </span>
              <p className=" text-sm md:text-base text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-700">
                {client.acf.services}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </RevealWrapper>
  );

  return (
    <section className="  w-full bg-gray-100 " id="clientes">
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
          <Pagination
            dataName="clientes"
            data={dataClient}
            itemsPerPageMobile={6}
            itemsPerPageTablet={12}
            itemsPerPageDesktop={12}
            itemsPerPageLargeDesktop={15}
            render={renderClient}
            gridClass={
              "grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 xl:mt-8 mt-4 gap-2 md:gap-4 xl:gap-8 opacity-90"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default GridClients;
