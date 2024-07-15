import { Metadata } from "next";
import About from "./about";
import { Organization, WebPage, WithContext } from "schema-dts";

const jsonLd: WithContext<WebPage> & { publisher: Organization } = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Acerca de Nosotros - GATO',
  url: 'https://gato.pe/nosotros',
  description: 'Conoce más sobre GATO, nuestra misión, visión, y el equipo que impulsa nuestras soluciones de marketing digital y desarrollo de software.',
  publisher: {
    '@type': 'Organization',
    name: 'Agencia GATO',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gato.pe/gato-icon.png',
      width: '60',
      height: '60',
    },
    url: 'https://gato.pe',
    sameAs: [
      'https://www.facebook.com/agenciagatope',
      'https://www.instagram.com/agenciagato2024?igsh=MmR4ZTQ1bHpwMmF3',
      'https://www.linkedin.com/company/agenciagato/',
    ],
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Agencia GATO',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gato.pe/gato-icon.png',
      width: '60',
      height: '60',
    },
    url: 'https://gato.pe',
    sameAs: [
      'https://www.facebook.com/agenciagatope',
      'https://www.instagram.com/agenciagato2024?igsh=MmR4ZTQ1bHpwMmF3',
      'https://www.linkedin.com/company/agenciagato/',
    ],
  }
};

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Descubre quiénes somos en GATO. Conoce nuestro equipo, nuestra misión y nuestra pasión por transformar ideas en soluciones digitales innovadoras.",
  keywords: [
    "equipo GATO",
    "misión GATO",
    "transformación digital",
    "innovación digital",
    "soluciones digitales",
    "servicios digitales",
    "consultoría digital",
    "desarrollo de software personalizado",
    "marketing digital estratégico",
    "branding digital",
    "identidad corporativa",
    "desarrollo de marca",
    "diseño de logotipos",
    "estrategia de marca",
    "optimización de procesos digitales",
    "creatividad digital",
    "compromiso digital",
    "profesionalismo digital",
    "experiencia digital",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/nosotros'
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
    <script
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
