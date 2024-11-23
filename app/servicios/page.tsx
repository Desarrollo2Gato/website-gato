import { Metadata } from "next";
import Services from "./services";


export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "En GATO, ofrecemos desarrollo web, diseño UX/UI, marketing digital, branding y desarrollo de software móvil. Transformamos ideas en soluciones digitales.",
  keywords: [
    "marketing digital en Lima",
    "desarrollo de software a medida en lima",
    "diseño web profesional en lima",
    "branding digital en Lima",
    "desarrollo de aplicaciones móviles en lima",
    "SEO en Lima",
    "publicidad online",
    "marketing de contenidos",
    "email marketing",
    "social media marketing",
    "gestión de marca",
    "estrategia de marca",
    "rebranding",
    "optimización de motores de búsqueda",
    "SEO on-page y off-page",
    "análisis de palabras clave",
    "link building",
    "auditoría SEO",
    "diseño web responsive",
    "diseño UX/UI",
    "desarrollo frontend y backend",
    "consultoría de marca",
    "identidad corporativa",
    "campañas publicitarias",
    "digital marketing",
    "brand management"
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios",
    title: "Nuestros Servicios - Agencia gato",
    description:
      "En Agencia Gato, ofrecemos desarrollo web, diseño UX/UI, marketing digital, branding y desarrollo de software móvil. Transformamos ideas en soluciones digitales.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Servicios de GATO",
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
      <div className="w-full h-screen ">
        <Services/>
        
      </div>
    </>
  );
}

export default Page;
