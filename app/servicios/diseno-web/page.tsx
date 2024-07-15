import Footer from "@/app/components/footer";
import Content from "./content";
import Head from "next/head";
import { Metadata } from "next";
import "../plans.css";
import { Organization, WebPage, WithContext } from "schema-dts";
const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Diseño Web - GATO",
  url: "https://gato.pe/servicios/diseno-web",
  description:
    "Descubre nuestro servicio de diseño web en GATO. Creamos sitios web modernos, funcionales y adaptados a tus necesidades para potenciar tu presencia en línea.",
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
  title: "Servicio de Diseño Web",
  description:
    "Descubre nuestro servicio de diseño web en GATO. Creamos sitios web modernos, funcionales y adaptados a tus necesidades para potenciar tu presencia en línea.",
  keywords: [
    "diseño web",
    "diseño web en lima",
    "diseño de páginas web",
    "desarrollo web",
    "diseño UX/UI",
    "diseño responsive",
    "creación de sitios web",
    "diseño de interfaces",
    "optimización web",
    "diseño de UX",
    "diseño de UI",
    "diseño web moderno",
    "sitios web funcionales",
    "diseño web adaptativo",
    "agencia de diseño web",
    "servicios de diseño web",
    "estudio de diseño web",
    "diseño web profesional",
    "diseño web personalizado",
    "diseño web creativo",
    "diseño web Lima",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/diseno-web",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/diseno-web",
    title: "Diseño Web - GATO",
    description:
      "Descubre nuestro servicio de diseño web en GATO. Creamos sitios web modernos, funcionales y adaptados a tus necesidades para potenciar tu presencia en línea.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Diseño Web de GATO",
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
