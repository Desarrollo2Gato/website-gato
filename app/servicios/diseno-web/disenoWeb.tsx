"use client";

import SubServices from "../../components/service/new/subservices";
import BenefitsNew from "../../components/service/new/benefits-new";
import Banner from "@/app/components/service/new/bannerNew";
import Gallery from "../../components/service/new/gallery";
import ContactServices from "../../components/service/new/contact-service";
import { InfoDisenioWeb } from "@/app/data/services/disenioweb";

function DisenoWeb() {

  return (
    <>
      <Banner description={InfoDisenioWeb.description} img={InfoDisenioWeb.img}>
        {InfoDisenioWeb.title}
      </Banner>
      <SubServices
        subservices={InfoDisenioWeb.subservices}
        description={InfoDisenioWeb.description}
        img={InfoDisenioWeb.img}
      />
      <BenefitsNew
        title={InfoDisenioWeb.benefits.title}
        description={InfoDisenioWeb.benefits.description}
        img={InfoDisenioWeb.benefits.img}
        benefits={InfoDisenioWeb.benefits.benefitsItems}
      />
      <Gallery gallery={InfoDisenioWeb.gallery} />
      <ContactServices/>
    </>
  );
}

export default DisenoWeb;
