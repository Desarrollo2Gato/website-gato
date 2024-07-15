import { Metadata } from "next";
import Index from ".";

import { WebSite, WithContext } from 'schema-dts'

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Marketing y Software - GATO',
  url: 'https://gato.pe',
  sameAs: [
    'https://www.facebook.com/agenciagatope',
    'https://www.instagram.com/agenciagato2024?igsh=MmR4ZTQ1bHpwMmF3',
    'https://www.linkedin.com/company/agenciagato/',
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://gato.pe/search?q={search_term_string}',
    'query': "required name=search_term"
  },
  publisher: {
    '@type': 'Organization',
    name: 'Agencia GATO',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gato.pe/gato-icon.png',
      width: '60px',
      height: '60px'
    }
  }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gato.pe/"),
  description:
    "En GATO, transformamos ideas en soluciones digitales. Diseño web, marketing digital, software y branding. Potencia tu presencia en línea.",
  keywords: [
    "marketing digital",
    "branding",
    "publicidad online",
    "SEO",
    "gestión de marca",
    "estrategia de marca",
    "Agencia Gato",
    "digital marketing",
    "online advertising",
    "brand management",
    "brand strategy",
    "estrategias de marketing",
    "campañas publicitarias",
    "marketing de contenidos",
    "email marketing",
    "social media marketing",
    "identidad corporativa",
    "desarrollo de marca",
    "diseño de logotipos",
    "posicionamiento de marca",
    "rebranding",
    "imagen de marca",
    "optimización de motores de búsqueda",
    "SEO on-page",
    "SEO off-page",
    "análisis de palabras clave",
    "link building",
    "auditoría SEO",
    "desarrollo web",
    "diseño web responsive",
    "desarrollo de aplicaciones móviles",
    "programación web",
    "diseño UX/UI",
    "desarrollo frontend",
    "desarrollo backend",
    "agencia de marketing digital",
    "servicios de branding",
    "agencia de publicidad online",
    "gestión integral de marca",
    "consultoría de marca",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/'
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Marketing y Software - GATO",
    "description": "Impulsa tu negocio con nuestras soluciones integrales de marketing y desarrollo de software personalizado.",
    images: "/opengraph-image.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.gato.pe/",
    siteName: "GATO",
    title: "Marketing y Software - Gato",
    description:
      "En GATO, transformamos ideas en soluciones digitales. Diseño web, marketing digital, software y branding. Potencia tu presencia en línea.",
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
export default function Home() {
  return (
    <main className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Index></Index>
    </main>
  );
}
