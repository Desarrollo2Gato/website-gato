import Footer from "@/app/components/footer";
import Content from "./content";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicio de Desarrollo Móvil",
  description:
    "Descubre nuestro servicio de desarrollo móvil en Lima en GATO. Creamos aplicaciones móviles personalizadas que destacan por su diseño intuitivo y funcionalidad superior.",
  keywords: [
    "desarrollo móvil en Lima",
    "aplicaciones móviles en Lima",
    "desarrollo de aplicaciones móviles en Lima",
    "programación móvil en Lima",
    "diseño de apps en Lima",
    "UX/UI móvil en Lima",
    "Android app en Lima",
    "iOS app en Lima",
    "mobile development en Lima",
    "mobile app development en Lima",
    "custom mobile apps en Lima",
    "mobile app design en Lima",
    "mobile UX/UI en Lima",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/servicios/desarrollo-movil'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/desarrollo-movil",
    title: "Desarrollo Móvil en Lima - GATO",
    description:
      "Descubre nuestro servicio de desarrollo móvil en Lima en GATO. Creamos aplicaciones móviles personalizadas que destacan por su diseño intuitivo y funcionalidad superior.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Desarrollo Móvil en Lima de GATO",
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
