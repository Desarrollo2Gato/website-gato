import React from "react";
import BolsaDeTrabajo from "./bolsadetrabajo";
import "@/app/components/slider3items.css";
import { Metadata } from "next";
import '@/app/components/slider3items.css'

export const metadata: Metadata = {
  title: "Trabaja con Nosotros",
  description:
    "Explora oportunidades laborales en GATO. Únete a nuestro equipo y sé parte de nuestra misión de transformar ideas en soluciones digitales innovadoras.",
  keywords: [
    "oportunidades de empleo en Lima",
    "vacantes en marketing digital",
    "empleos en desarrollo de software",
    "ofertas de trabajo en diseño web",
    "branding digital empleo en Jesús María",
    "trabajo en desarrollo móvil en Perú",
    "empleos en agencia de marketing digital",
    "empleo en SEO",
    "trabajo en publicidad online",
    "carrera en social media marketing",
    "oportunidades laborales en Agencia Gato",
    "vacantes de desarrollo web",
    "empleos en programación web",
    "trabajo en diseño UX/UI",
    "empleos de desarrollo frontend y backend",
    "ofertas de trabajo en marketing de contenidos",
    "posiciones disponibles en identidad corporativa",
    "trabajos en gestión de marca",
    "empleos en estrategia de marca",
    "empleo en rebranding",
    "oportunidades en optimización de motores de búsqueda",
    "vacantes de SEO on-page y off-page",
    "trabajo en desarrollo ágil de software",
    "vacantes en diseño web responsive",
    "empleos en desarrollo de aplicaciones móviles",
    "ofertas de trabajo en digital marketing",
    "empleo en email marketing",
    "posiciones en brand management",
    "empleos en estrategias de marketing digital",
    "trabajo en campañas publicitarias",
    "empleo en diseño de logotipos",
    "oportunidades laborales en posicionamiento de marca",
    "vacantes en gestión integral de marca",
    "empleos en consultoría de marca",
    "vacantes en agencia gato"

  ],
  alternates:{
    canonical: 'https://www.gato.pe/bolsadetrabajo'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/bolsadetrabajo",
    title: "Trabaja con Nosotros - Agencia Gato",
    description:
      "Únete al equipo de Agencia Gato. Consulta nuestras ofertas de trabajo y forma parte de una agencia innovadora en marketing y desarrollo.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la Trabaja con Nosotros de GATO",
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
const page = () => {
  return (
    <>
      <BolsaDeTrabajo />
    </>
  );
};

export default page;
