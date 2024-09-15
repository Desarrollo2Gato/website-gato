"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_plan } from "@/app/data/enviroments/api.enviroment";

function Service01() {
  const [dataMk, setDataMk] = useState<any[]>([]);
  const fetchDtaMk = async () => {
    try {
      const response = await axios.get(`${api_plan}?slug=planes-de-email-marketing`);
      setDataMk(response.data[0].acf.plans);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchDtaMk();
  }, []);
  return (
    <>
      <Banner
        banner="https://i.pinimg.com/originals/8e/cb/9c/8ecb9cb7a19615e059b8e7b639b178db.png"
        color="#A52DE6"
        service="E-mail"
        service2="Marketing"
        description="Impulsa tu negocio: ¡Descubre nuestras soluciones de email marketing efectivas!"
      />
      <Benefits color="#A52DE6" />
      <Plans color="#A52DE6" data={dataMk} />
      <Process />
    </>
  );
}

export default Service01;
