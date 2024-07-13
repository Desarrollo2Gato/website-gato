"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { DataMarketing } from "./dataMarketing";

function Service01() {
  return (
    <>
      <Banner
        banner="https://i.pinimg.com/originals/8e/cb/9c/8ecb9cb7a19615e059b8e7b639b178db.png"
        color="#A52DE6"
        service="Marketing"
        service2="digital"
        description="Conquista el mundo digital: ¡Descubre nuestras estrategias de marketing digital!"
      />
      <Benefits color="#A52DE6" />
      <Plans color="#A52DE6" data={DataMarketing} />
      <Process />
    </>
  );
}

export default Service01;
