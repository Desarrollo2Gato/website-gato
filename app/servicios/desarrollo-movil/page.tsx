
import Content from "./content";
import { Metadata } from "next";
import { Organization, WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Desarrollo Móvil - Agencia Gato",
  url: "https://www.gato.pe/desarrollo-movil",
  description:
    "Descubre nuestro servicio de desarrollo móvil en Agencia Gato. Creamos apps personalizadas con diseño intuitivo y funcionalidad superior.",
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
  title: "Servicio de Desarrollo Móvil",
  description:
    "Descubre nuestro servicio de desarrollo móvil en GATO. Creamos apps personalizadas con diseño intuitivo y funcionalidad superior.",
  keywords: [
    "desarrollo de aplicaciones móviles en Perú",
    "desarrollo móvil en Lima",
    "desarrollo de apps móviles",
    "aplicaciones móviles personalizadas",
    "desarrollo iOS y Android",
    "soluciones móviles a medida",
    "consultoría de desarrollo móvil",
    "agencia de desarrollo de aplicaciones",
    "programación de aplicaciones móviles",
    "desarrollo de software móvil"
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/desarrollo-movil",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/desarrollo-movil",
    title: "Desarrollo Móvil en Lima - Agencia gato",
    description:
      "Descubre nuestro servicio de desarrollo móvil en Agencia gato. Creamos apps personalizadas con diseño intuitivo y funcionalidad superior.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Desarrollo Móvil en Lima de GATO",
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
