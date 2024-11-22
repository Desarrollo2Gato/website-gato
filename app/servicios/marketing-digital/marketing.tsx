"use client";

// import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_plan } from "@/app/data/enviroments/api.enviroment";
import SubServices from "./subservices";
import BenefitsNew from "./benefits-new";
import Banner from "@/app/components/service/banner/bannerNew";
import { title } from "process";
import { InfoMk } from "@/app/data/services/marketing";
import Gallery from "./gallery";
import ContactServices from "./contact-service";

function Service01() {
  return (
    <>
      <Banner description={InfoMk.description} img={InfoMk.img}>
        {InfoMk.title}
      </Banner>
      {/* <Banner
        banner="https://i.pinimg.com/originals/a1/c0/e8/a1c0e89a4c10c936b08b65e66f216422.png"
        color="#A52DE6"
        service="Marketing"
        service2="digital"
        description="Conquista el mundo digital: ¡Descubre nuestras estrategias de marketing digital!"
      /> */}
      <SubServices
        subservices={InfoMk.subservices}
        description={InfoMk.description}
        img={InfoMk.img}
      />
      <BenefitsNew
        title={InfoMk.benefits.title}
        description={InfoMk.benefits.description}
        img={InfoMk.benefits.img}
        benefits={InfoMk.benefits.benefitsItems}
      />
      <Gallery gallery={InfoMk.gallery} />
      <ContactServices/>
      {/* <Benefits color="#A52DE6" /> */}
      {/* <Plans color="#A52DE6" data={dataMk} /> */}
      {/* <Process /> */}
    </>
  );
}

export default Service01;
