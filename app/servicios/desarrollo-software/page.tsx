import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import { Organization, WebPage, WithContext } from "schema-dts";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de Desarrollo de Software - GATO",
  url: "https://www.gato.pe/desarrollo-software",
  description:
    "Descubre nuestro servicio de desarrollo de software en GATO. Creamos soluciones personalizadas y escalables para satisfacer las necesidades digitales de tu negocio.",
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
    "Descubre nuestro servicio de desarrollo de software en GATO. Creamos soluciones personalizadas y escalables para satisfacer las necesidades digitales de tu negocio.",
  keywords: [
    "desarrollo de software",
    "desarrollo de software en lima",
    "programación de software",
    "desarrollo de aplicaciones",
    "desarrollo web",
    "desarrollo backend",
    "desarrollo frontend",
    "software a medida",
    "soluciones de software",
    "custom software",
    "programación web",
    "software escalable",
    "ingeniería de software",
    "consultoría de software",
    "desarrollo de sistemas",
    "gestión de proyectos de software",
    "optimización de procesos",
    "integración de sistemas",
    "automatización de procesos",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/servicios/desarrollo-software'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/desarrollo-software",
    title: "Desarrollo de Software - GATO",
    description:
      "Descubre nuestro servicio en GATO. Creamos soluciones personalizadas y escalables para tus necesidades digitales.",
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
