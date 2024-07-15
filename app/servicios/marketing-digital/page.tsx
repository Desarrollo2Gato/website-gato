import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import "../plans.css";
import { Organization, WebPage, WithContext } from "schema-dts";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Marketing Digital - GATO",
  url: "https://www.gato.pe/marketing-digital",
  description:
    "Descubre nuestro servicio de marketing digital en GATO. Impulsa tu negocio con estrategias efectivas de marketing online y gestión de marca.",
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
  title: "Marketing Digital",
  description:
    "Descubre nuestro servicio de marketing digital en GATO. Impulsa tu negocio con estrategias efectivas de marketing online y gestión de marca.",
  keywords: [
    "marketing digital",
    "marketing digital en lima",
    "estrategias de marketing",
    "publicidad online",
    "SEO",
    "social media marketing",
    "email marketing",
    "campañas publicitarias",
    "branding digital",
    "gestión de marca",
    "consultoría de marca",
    "marketing de contenidos",
    "marketing online",
    "optimización de motores de búsqueda",
    "agencia de marketing digital",
    "servicios de marketing digital",
    "estrategias SEO",
    "SEM",
    "PPC",
    "estrategia digital",
    "digital marketing Lima",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/marketing-digital",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/marketing-digital",
    title: "Marketing Digital - GATO",
    description:
      "Descubre nuestro servicio de marketing digital en GATO. Impulsa tu negocio con estrategias efectivas de marketing online y gestión de marca.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Marketing Digital de GATO",
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
