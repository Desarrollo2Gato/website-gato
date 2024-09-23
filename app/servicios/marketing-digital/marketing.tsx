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
      const response = await axios.get(`${api_plan}?slug=planes-de-marketing`);
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
        banner="https://i.pinimg.com/originals/a1/c0/e8/a1c0e89a4c10c936b08b65e66f216422.png"
        color="#A52DE6"
        service="Marketing"
        service2="digital"
        description="Conquista el mundo digital: ¡Descubre nuestras estrategias de marketing digital!"
      />
      <Benefits color="#A52DE6" />
      <Plans color="#A52DE6" data={dataMk} />
      <Process />
    </>
  );
}

export default Service01;
