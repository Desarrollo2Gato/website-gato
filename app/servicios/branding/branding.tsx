"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { DataBranding } from "./dataBranding";

function Branding() {
  return (
    <>
      <Banner
      banner="https://i.pinimg.com/originals/54/74/dd/5474dde8d339a45b0f813e7e137c326c.jpg"
        color="#A52DE6"
        service="Branding"
        service2=""
        description="Haz que tu marca brille: ¡Descubre cómo podemos transformar tu identidad!"
      />
      <Benefits color="#A52DE6" />
      <Plans color="#A52DE6" data={DataBranding} />
      <Process />
    </>
  );
}

export default Branding;
