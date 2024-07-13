import { Metadata } from "next";
import About from "./about";
import Head from "next/head";

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
      <div className="w-full  ">
        <About></About>
      </div>
    </>
  );
}

export default Page;
