import Portfolio from "./portafolio";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portafolio de Proyectos",
  description:
    "Explora nuestro portafolio en GATO. Descubre los proyectos en los que hemos trabajado y las soluciones digitales que hemos creado para nuestros clientes.",
  keywords: [
    "proyectos de marketing digital en Lima",
    "casos de éxito en desarrollo de software",
    "diseño web profesional en Jesús María",
    "ejemplos de branding digital en Lima",
    "desarrollo de aplicaciones móviles en Perú",
    "soluciones personalizadas en Agencia Gato",
    "portafolio de SEO en Lima",
    "estrategias efectivas de publicidad online",
    "estudios de caso en social media marketing",
    "diseño UX/UI proyectos destacados",
    "desarrollo frontend y backend ejemplos",
    "proyectos de marketing de contenidos",
    "implementación de identidad corporativa",
    "branding estrategias exitosas",
    "rebranding casos de estudio",
    "optimización de motores de búsqueda proyectos",
    "SEO on-page y off-page ejemplos",
    "análisis de palabras clave resultados",
    "link building campañas destacadas",
    "auditoría SEO en casos reales",
    "innovaciones en desarrollo web",
    "diseño web responsive proyectos",
    "desarrollo de aplicaciones móviles éxitos",
    "proyectos de digital marketing",
    "impacto del email marketing",
    "brand management logros",
    "estrategias de marketing digital casos",
    "campañas publicitarias efectivas",
    "diseño de logotipos trabajos destacados",
    "posicionamiento de marca proyectos",
    "gestión integral de marca estudios de caso",
    "consultoría de marca ejemplos"
  ],
  alternates:{
    canonical: 'https://www.gato.pe/portafolio'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/portafolio",
    title: "Portafolio de Proyectos - Agencia Gato",
    description:
      "Explora nuestro portafolio. Descubre los proyectos en los que hemos trabajado y las soluciones digitales que hemos creado para nuestros clientes.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Portafolio de GATO",
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
      <div className="min-w-screen w-full min-h-screen">
        <Portfolio></Portfolio>
      </div>
    </>
  );
}

export default Page;
