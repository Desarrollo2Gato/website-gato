import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import Head from "next/head";
import '../plans.css';
export const metadata: Metadata = {
  title: "Servicio de Branding",
  description:
    "Descubre nuestro branding en GATO. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
  keywords: [
    "servicio de branding",
    "branding digital",
    "identidad corporativa",
    "estrategia de marca",
    "diseño de logotipos",
    "rebranding",
    "gestión de marca",
    "consultoría de marca",
    "posicionamiento de marca",
    "imagen de marca",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/servicios/branding'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/branding",
    title: "Servicio de Branding - GATO",
    description:
      "Descubre nuestro branding en GATO. Transformamos tu identidad y estrategia para potenciar tu presencia en el mercado digital.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Servicio de Branding de GATO",
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
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default Page;
