import Content from "./content";
import { Metadata } from "next";
import "../plans.css";
import { Organization, WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Marketing Digital - Agencia Gato",
  url: "https://www.gato.pe/marketing-digital",
  description:
    "Descubre nuestro servicio de marketing digital en Agencia Gato. Impulsa tu negocio con estrategias efectivas de marketing online y gestión de marca.",
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
      "https://www.instagram.com/agenciagato.pe?igsh=bmZib2MxdDVxeXNu ",
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
      "https://www.instagram.com/agenciagato.pe?igsh=bmZib2MxdDVxeXNu ",
      "https://www.linkedin.com/company/agenciagato/",
    ],
  },
};

export const metadata: Metadata = {
  title: "Servicio de Marketing Digital",
  description:
    "Descubre nuestro servicio de marketing digital en Agencia Gato. Impulsa tu negocio con estrategias efectivas de marketing online y gestión de marca.",
  keywords: [
    "marketing digital en Lima",
    "agencia de marketing digital en lima",
    "estrategias de marketing online",
    "campañas publicitarias digitales",
    "SEO y SEM en Lima",
    "social media marketing",
    "marketing de contenidos",
    "email marketing",
    "optimización de conversiones",
    "consultoría de marketing digital",
    "servicios de marketing digital",
    "agencia de publicidad online",
    "digital marketing agency",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/marketing-digital",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/marketing-digital",
    title: "Servicio de Marketing Digital - Agencia Gato",
    description:
      "Descubre nuestro servicio de marketing digital en Agencia Gato. Impulsa tu negocio con estrategias efectivas de marketing online y gestión de marca.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Marketing Digital de Agencia Gato",
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
        id="jsonLdServiceMarketing"
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
