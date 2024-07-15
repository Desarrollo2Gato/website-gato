import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import { Organization, WebPage, WithContext } from "schema-dts";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Desarrollo Móvil - GATO",
  url: "https://www.gato.pe/desarrollo-movil",
  description:
    "Descubre nuestro servicio de desarrollo móvil en GATO. Creamos apps personalizadas con diseño intuitivo y funcionalidad superior.",
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
    "desarrollo móvil en Lima",
    "aplicaciones móviles en Lima",
    "desarrollo de aplicaciones móviles en Lima",
    "programación móvil en Lima",
    "diseño de apps en Lima",
    "UX/UI móvil en Lima",
    "Android app en Lima",
    "iOS app en Lima",
    "mobile development en Lima",
    "mobile app development en Lima",
    "custom mobile apps en Lima",
    "mobile app design en Lima",
    "mobile UX/UI en Lima",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/desarrollo-movil",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/desarrollo-movil",
    title: "Desarrollo Móvil en Lima - GATO",
    description:
      "Descubre nuestro servicio de desarrollo móvil en GATO. Creamos apps personalizadas con diseño intuitivo y funcionalidad superior.",
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
