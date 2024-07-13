"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { DataDisenoWeb } from "./dataDisenoWeb";

function Service02() {
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
      <Plans color="#0BC2E1" data={DataDisenoWeb} />
      <Process />
    </>
  );
}

export default Service02;
