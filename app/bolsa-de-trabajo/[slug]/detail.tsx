"use client";

import Navigation from "@/app/components/navigation";
import Drawer from "@/app/components/drawer";
import Footer from "@/app/components/footer";
import WhatsappContact from "@/app/components/whatsapp-contact";
import { useEffect, useState } from "react";
import Form from "../form";
import Banner from "./banner";
import Info from "./info";
import { acf_format, api_areas, api_vacantes } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
const Detail = ({ name }: { name: string }) => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [data, setData] = useState<any>({});
  const [area, setArea] = useState<any>({});

  useEffect(() => {
    const fetchVacante = async () => {
      try {
        const response = await axios.get(api_vacantes + "?slug=" + name + '&'+ acf_format);
        setData(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVacante();
  }, [name]);

  useEffect(() => {
    const fetchArea = async () => {
      if (data.acf?.area) {
        try {
          const response = await axios.get(api_areas + "/" + data.acf.area);
          setArea(response.data);
          
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchArea();
  }, [data]);
  useEffect(() => {
    const handleKeyDown = (event: any) => {
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
      <WhatsappContact></WhatsappContact>

      <div
        className={`fixed top-0 left-0  ${
          isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
        } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <main className="min-w-screen flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0">
        {/* <h2>Detail {name}</h2> */}
        <Banner
          color={area.acf?.color}
          description={area.acf?.descripcion_para_postulacion}
          area={area.name}
        />
        <Info
          jobPosition={data.acf?.job_position}
          jobDescription={data.acf?.description}
          imgUrl={data.acf?.imagen_url}
          color={area.acf?.color}
          modalidad={data.acf?.modalidad?.name}
          requisitos={data.acf?.requisitos}
          responsabilidades={data.acf?.responsabilidades}
        />
        <Form vacante={data.acf?.job_position} color={area.acf?.color} />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Detail;
