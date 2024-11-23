"use client";
import SubServices from "../../components/service/new/subservices";
import BenefitsNew from "../../components/service/new/benefits-new";
import Banner from "@/app/components/service/new/bannerNew";
import { InfoMk } from "@/app/data/services/marketing";
import Gallery from "../../components/service/new/gallery";
import ContactServices from "../../components/service/new/contact-service";

function Marketing() {
  return (
    <>
      <Banner description={InfoMk.description} img={InfoMk.img}>
        {InfoMk.title}
      </Banner>
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
    </>
  );
}

export default Marketing;
