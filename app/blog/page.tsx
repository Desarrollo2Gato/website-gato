import BlogComponent from "./blog";
import { Metadata } from "next";
import Script from "next/script";
import { Blog, WithContext } from "schema-dts";

const jsonLdBlog: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Nuestro Blog - GATO",
  url: "https://gato.pe/blog",
  publisher: {
    "@type": "Organization",
    name: "Agencia GATO",
    logo: {
      "@type": "ImageObject",
      url: "https://gato.pe/gato-icon.png",
      width: "60px",
      height: "60px",
    },
  },
};
export const metadata: Metadata = {
  title: "Nuestro Blog",
  description:
    "Descubre quiénes somos en GATO. Conoce nuestro equipo, nuestra misión y nuestra pasión por transformar ideas en soluciones digitales innovadoras.",
  keywords: [
    "marketing digital consejos",
    "estrategias SEO efectivas",
    "tendencias en desarrollo de software",
    "diseño web responsive",
    "branding digital tips",
    "desarrollo de aplicaciones móviles tendencias",
    "casos de éxito en marketing digital",
    "guías de SEO",
    "últimas noticias de tecnología",
    "mejores prácticas de email marketing",
    "social media marketing estrategias",
    "diseño UX/UI tips",
    "cómo mejorar el posicionamiento SEO",
    "marketing de contenidos técnicas",
    "importancia del branding digital",
    "desarrollo web innovaciones",
    "tutoriales de programación web",
    "casos de estudio en desarrollo de software",
    "experiencias en diseño web profesional",
    "impacto del desarrollo móvil en Perú",
    "consejos para campañas publicitarias efectivas",
    "análisis de mercado digital",
    "optimización de conversiones",
    "estrategias de engagement en redes sociales",
    "gestión de reputación online",
    "nuevas herramientas de marketing digital",
    "diseño de logotipos creativos",
    "cómo realizar una auditoría SEO",
    "marketing digital para empresas locales",
    "innovaciones en marketing de contenido",
    "cómo elegir una agencia de marketing digital",
    "desarrollo ágil de software",
    "SEO local en Lima",
    "técnicas avanzadas de link building",
    "estrategias de publicidad online"
  ],
  alternates: {
    canonical: "https://www.gato.pe/blog",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/blog",
    title: "Nuestro Blog  - Agencia Gato",
    description:
      "Explora nuestro blog en GATO y mantente actualizado con noticias, tendencias y consejos sobre marketing digital, desarrollo de software y branding.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen del blog de GATO",
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
      id="jsonLdBlog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
      <div className="w-full h-screen ">
        <BlogComponent></BlogComponent>
      </div>
    </>
  );
}

export default Page;
