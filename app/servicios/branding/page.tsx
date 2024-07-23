
import Content from "./content";
import { Metadata } from "next";
import "../plans.css";
import { Organization, WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Branding - Agencia Gato",
  url: "https://www.gato.pe/branding",
  description:
    "Descubre nuestro branding en Agencia Gato. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
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
  title: "Servicio de Branding",
  description:
    "Descubre nuestro servicio de branding en Agencia Gato. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
  keywords: [
    "branding digital en Lima",
    "estrategias de branding",
    "gestión de marca",
    "identidad corporativa",
    "rebranding",
    "brand management",
    "consultoría de marca",
    "servicios de branding digital",
    "agencia de branding",
    "posicionamiento de marca",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/branding",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/branding",
    title: "Servicio de Branding - Agencia Gato",
    description:
      "Descubre nuestro branding en Agencia Gato. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Servicio de Branding de GATO",
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
        id="jsonLdServiceBranding"
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
