import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import Head from "next/head";
import '../plans.css';
import { Organization, WebPage, WithContext } from "schema-dts";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Branding - GATO",
  url: "https://www.gato.pe/branding",
  description:
    "Descubre nuestro branding en GATO. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
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
    "Descubre nuestro branding en GATO. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
  keywords: [
    "servicio de branding",
    "branding digital",
    "identidad corporativa",
    "estrategia de marca",
    "diseño de logotipos",
    "rebranding",
    "gestión de marca",
    "consultoría de marca",
    "posicionamiento de marca",
    "imagen de marca",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/servicios/branding'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/branding",
    title: "Servicio de Branding - GATO",
    description:
      "Descubre nuestro branding en GATO. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
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
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default Page;
