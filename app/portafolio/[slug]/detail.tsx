"use client";

import { useEffect, useState } from "react";


import Drawer from "@/app/components/drawer";
import Navigation from "@/app/components/navigation";
import BannerDetailPortfolio from "./BannerDetail";
import Footer from "@/app/components/footer";
import WhatsappContact from "@/app/components/whatsapp-contact";
import Form from "@/app/components/form";

interface DetailProps {
  project: Project;
}
interface Project {
  title: { rendered: string };
  acf: {
    url: string;
    banner: string;
    "imagen-solucion": string;
    cliente: string;
    services: string;
    problema: string;
    necesidad: string;
    imagen: string;
    "cliente-slug": string;
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
  };
}

function Detail({ project }: DetailProps) {
  const [isDrawer, setIsDrawer] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative bg-white flex">
      <WhatsappContact />

      <div
        className={`fixed top-0 left-0  ${isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"} h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>

      <div className="min-w-screen flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0">
        <>
          <BannerDetailPortfolio proyecto={project} />
          <Form color="#6D28D9"></Form>
          <Footer />
        </>
      </div>
    </div>
  );
}

export default Detail;
