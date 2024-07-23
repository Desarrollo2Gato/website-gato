import { Metadata } from "next";
import About from "./about";
import { WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sobre Nosotros - Agencia Gato",
  url: "https://gato.pe/nosotros",
  description:
    "Conoce más sobre GATO, nuestra misión, visión, y el equipo que impulsa nuestras soluciones de marketing digital y desarrollo de software.",
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
  title: "Sobre Nosotros",
  description:
    "Descubre quiénes somos en Agencia Gato. Conoce nuestro equipo, nuestra misión y nuestra pasión por transformar ideas en soluciones digitales innovadoras.",
  keywords: [
    "equipo de expertos en marketing digital",
    "profesionales en desarrollo de software",
    "diseñadores web en lima",
    "expertos en branding digital",
    "desarrolladores de aplicaciones móviles en lima",
    "historia de Agencia Gato",
    "misión de Agencia Gato",
    "valores de nuestra empresa",
    "compromiso con nuestros clientes",
    "nuestro equipo de trabajo",
    "experiencia en marketing digital",
    "servicios personalizados de desarrollo de software",
    "diseño web profesional en lima",
    "innovación en branding digital",
    "nuestros proyectos exitosos",
    "trayectoria en desarrollo de aplicaciones móviles",
    "agencia de marketing digital en Lima",
    "asesoría de marca en Perú",
    "nuestro compromiso con la calidad",
    "transparencia en nuestros servicios",
    "dedicación a nuestros clientes",
    "visión de Agencia Gato",
    "misión de Agencia Gato",
    "valores de Agencia Gato",
    "profesionalismo en cada proyecto",
    "nuestro enfoque en resultados",
    "experiencia y conocimientos",
    "comprometidos con el éxito de nuestros clientes",
    "equipo Agencia Gato",
  ],
  alternates: {
    canonical: "https://www.gato.pe/nosotros",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/nosotros",
    title: "Conoce a GATO - Tu Socio en Soluciones Digitales",
    description:
      "En GATO, somos más que una empresa. Somos tu socio en el viaje digital. Descubre nuestra historia, nuestro equipo y nuestra dedicación a tu éxito.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Marketing y Software - GATO",
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
        id="jsonLdNosotros"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full  ">
        <About></About>
      </div>
    </>
  );
}

export default Page;
