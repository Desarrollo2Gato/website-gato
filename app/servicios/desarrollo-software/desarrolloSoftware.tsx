"use client";

import SubServices from "../../components/service/new/subservices";
import BenefitsNew from "../../components/service/new/benefits-new";
import Banner from "@/app/components/service/new/bannerNew";
import Gallery from "../../components/service/new/gallery";
import ContactServices from "../../components/service/new/contact-service";
import { InfoDesarrollo } from "@/app/data/services/desarrollo";

function Software() {
  return (
    <>
      <Banner description={InfoDesarrollo.description} img={InfoDesarrollo.img}>
        {InfoDesarrollo.title}
      </Banner>
      <SubServices
        subservices={InfoDesarrollo.subservices}
        description={InfoDesarrollo.description}
        img={InfoDesarrollo.img}
      />
      <BenefitsNew
        title={InfoDesarrollo.benefits.title}
        description={InfoDesarrollo.benefits.description}
        img={InfoDesarrollo.benefits.img}
        benefits={InfoDesarrollo.benefits.benefitsItems}
      />
      <Gallery gallery={InfoDesarrollo.gallery} />
      <ContactServices />
    </>
  );
}

export default Software;
