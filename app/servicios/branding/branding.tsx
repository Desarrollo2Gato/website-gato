"use client";

import SubServices from "../../components/service/new/subservices";
import BenefitsNew from "../../components/service/new/benefits-new";
import Banner from "@/app/components/service/new/bannerNew";
import Gallery from "../../components/service/new/gallery";
import ContactServices from "../../components/service/new/contact-service";
import { InfoBranding } from "@/app/data/services/branding";

function Branding() {

  return (
    <>
      <Banner description={InfoBranding.description} img={InfoBranding.img}>
        {InfoBranding.title}
      </Banner>
      <SubServices
        subservices={InfoBranding.subservices}
        description={InfoBranding.description}
        img={InfoBranding.img}
      />
      <BenefitsNew
        title={InfoBranding.benefits.title}
        description={InfoBranding.benefits.description}
        img={InfoBranding.benefits.img}
        benefits={InfoBranding.benefits.benefitsItems}
      />
      <Gallery gallery={InfoBranding.gallery} />
      <ContactServices/>
    </>
  );
  
}

export default Branding;
