"use client";

import { useEffect, useState } from "react";

import Drawer from "@/app/components/drawer";
import Navigation from "@/app/components/navigation";
import BannerDetailPortfolio from "./BannerDetail";
import Footer from "@/app/components/footer";
import WhatsappContact from "@/app/components/whatsapp-contact";
import Form from "@/app/components/form";
import Banner from "./banner";
import BodyProject from "./body";
import Gallery from "./gallery";
import { IProject } from "@/app/types";

interface DetailProps {
  project: IProject;
}

function Detail({ project }: DetailProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (project) {
      setIsLoading(false);
    }
  }, [project]);
  const {
    slug,
    title: { rendered: title },
    acf: {
      banner,
      imagen_destacada,
      descripcion_corta,
      services_gato,
      linkedin,
      facebook,
      tiktok,
      instagram,
      testimonial_client,
      service_result,
      galery_1,
      galery_2,
      client_color,
    },
  } = project;

  const [isDrawer, setIsDrawer] = useState(false);

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
        className={`fixed top-0 left-0  ${
          isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
        } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>

      <div className="min-w-screen flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0">
        <>
          
          <Banner
            color={client_color}
            title={title}
            image={banner}
            marca={title}
            isLoading={isLoading}
          />
          <BodyProject
            client={project.acf.cliente}
            who_client={project.acf.descripcion_corta}
            description_service={project.acf.services_gato.description}
            services={project.acf.services_gato.services}
            color={project.acf.client_color}
            results={project.acf.service_result}
            logo={project.acf.imagen_destacada}
            testimonial={project.acf.testimonial_client.xp_gato}
            testimonial_name={project.acf.testimonial_client.author}
            isLoading={isLoading}
          />
          <Gallery
            client={project.acf.cliente}
            color={project.acf.client_color}
            img_sq_1={project.acf.galery_1.img_1}
            img_sq_2={project.acf.galery_1.img_2}
            img_sq_3={project.acf.galery_1.img_3}
            img_sq_4={project.acf.galery_1.img_4}
            img_vd_1={project.acf.galery_2.img_1}
            img_vd_2={project.acf.galery_2.img_2}
            dcpt_sq_1={project.acf.galery_1.description_1}
            dcpt_sq_2={project.acf.galery_1.description_2}
            dcpt_sq_3={project.acf.galery_1.description_3}
            dcpt_sq_4={project.acf.galery_1.description_4}
            dcpt_vd_1={project.acf.galery_2.description_1}
            dcpt_vd_2={project.acf.galery_2.description_2}
            fb={facebook}
            ig={instagram}
            linkedin={linkedin}
            web={project.acf.url}
            tiktok={tiktok}
            isLoading={isLoading}
          />
          {/* <BannerDetailPortfolio proyecto={project} /> */}
          <Form color="#9353B6" />
          <Footer />
        </>
      </div>
    </div>
  );
}

export default Detail;
