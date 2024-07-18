"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";

import { useEffect, useState } from "react";
import axios from "axios";
import { api_plan } from "@/app/data/enviroments/api.enviroment";

function Service02() {
  const [dataWeb, setDataWeb] = useState<any[]>([]);
  const fetchDtaWeb = async () => {
    try {
      const response = await axios.get(`${api_plan}?slug=planes-de-disenio-web`);
      setDataWeb(response.data[0].acf.plans);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchDtaWeb();
  }, []);
  return (
    <>
      <Banner
        banner="https://i.pinimg.com/originals/07/dd/95/07dd95f62157b84210fad871a5f69727.jpg"
        color="#0BC2E1"
        service="Diseño"
        service2="web"
        description="Diseños web que inspiran y convierten. ¡Descubre nuestras soluciones de diseño web!"
      />
      <Benefits color="#0BC2E1" />
      <Plans color="#0BC2E1" data={dataWeb} />
      <Process />
    </>
  );
}

export default Service02;
