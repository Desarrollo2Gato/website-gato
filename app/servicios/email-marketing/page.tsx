import Content from "./content";
import { Metadata } from "next";
import "../plans.css";
import { Organization, WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicio de E-mail Marketing - Agencia Gato",
  url: "https://www.gato.pe/email-marketing",
  description:
    "Impulsa tu comunicación con nuestro email marketing. Diseñamos campañas personalizadas y efectivas para conectar con tus clientes y potenciar tus resultados.",
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
  title: "Servicio de E-mail Marketing",
  description:
    "Descubre nuestro servicio de email marketing en Agencia Gato. Conecta con tus clientes mediante campañas personalizadas y análisis detallado para optimizar tus resultados.",
  keywords: [
    "servicio de email marketing personalizado para empresas",
    "estrategias efectivas de email marketing para captar clientes",
    "campañas de email marketing para aumentar ventas en línea",
    "consultoría en email marketing para negocios locales",
    "diseño de plantillas de correo electrónico para marketing",
    "email marketing para empresas",
    "campañas de email marketing",
    "estrategias de email marketing",
    "diseño de correos electrónicos para marketing",
    "servicio de email marketing en Lima",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios/email-marketing",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/email-marketing",
    title: "Servicio de E-mail Marketing - Agencia Gato",
    description:
      "Descubre nuestro servicio de email marketing en Agencia Gato. Conecta con tus clientes mediante campañas personalizadas y análisis detallado para optimizar tus resultados.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de E-mail Marketing de Agencia Gato",
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
