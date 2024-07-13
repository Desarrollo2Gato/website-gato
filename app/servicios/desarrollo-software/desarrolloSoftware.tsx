"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Process from "./process";

function Service03() {
  return (
    <>
      <Banner
        banner="https://i.pinimg.com/originals/fc/56/7e/fc567ed8e463a7a69a0dc50c2e7e518c.jpg"
        color="#007CF8"
        service="Desarrollo de"
        service2="Software"
        description="Software a medida para tus necesidades. ¡Descubre cómo podemos ayudarte!"
      />
      <Benefits color="#007CF8" />
      <Process />
    </>
  );
}

export default Service03;
