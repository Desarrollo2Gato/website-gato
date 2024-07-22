import Content from "./content";
import { Metadata } from "next";
import { Organization, WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Desarrollo de Software - Agencia Gato",
  url: "https://www.gato.pe/desarrollo-software",
  description:
    "Descubre nuestro servicio de desarrollo de software en Agencia Gato. Creamos soluciones personalizadas y escalables para satisfacer las necesidades digitales de tu negocio.",
  publisher: {
    "@type": "Organization",
    name: "Agencia GATO",
    logo: {
      "@type": "ImageObject",
      url: "https://gato.pe/gato-icon.png",
      width: "60",
      height: "60",
    },
    url: "https://gato.pe",
    sameAs: [
      "https://www.facebook.com/agenciagatope",
      "https://www.instagram.com/agenciagato2024?igsh=MmR4ZTQ1bHpwMmF3",
      "https://www.linkedin.com/company/agenciagato/",
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "Agencia GATO",
    logo: {
      "@type": "ImageObject",
      url: "https://gato.pe/gato-icon.png",
      width: "60",
      height: "60",
    },
    url: "https://gato.pe",
    sameAs: [
      "https://www.facebook.com/agenciagatope",
      "https://www.instagram.com/agenciagato2024?igsh=MmR4ZTQ1bHpwMmF3",
      "https://www.linkedin.com/company/agenciagato/",
    ],
  },
};

export const metadata: Metadata = {
  title: "Servicio de Desarrollo de Software",
  description:
    "Descubre nuestro servicio de desarrollo de software en Agencia Gato. Creamos soluciones personalizadas y escalables para satisfacer las necesidades digitales de tu negocio.",
  keywords: [
    "desarrollo de software a medida en lima",
    "desarrollo de aplicaciones empresariales",
    "soluciones tecnológicas personalizadas",
    "programación de software a medida",
    "desarrollo backend y frontend",
    "consultoría de desarrollo de software",
    "agencia de desarrollo de software",
    "soluciones innovadoras de software",
    "servicios de programación a medida",
    "desarrollo de sistemas personalizados"
  ],
  alternates:{
    canonical: 'https://www.gato.pe/servicios/desarrollo-software'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/desarrollo-software",
    title: "Desarrollo de Software - Agencia Gato",
    description:
      "Descubre nuestro servicio en Agencia Gato. Creamos soluciones personalizadas y escalables para tus necesidades digitales.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Desarrollo de Software de GATO",
      },
      {
        url: "/mstile-310x310.png",
        width: 310,
        height: 310,
        alt: "Logo Agencia GATO",
      },
    ],
  },
};
function Page() {
  return (
    <>
    <Script
        id="jsonLdServiceDesarrolloSoftware"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Content></Content>
      
    </>
  );
}

export default Page;
