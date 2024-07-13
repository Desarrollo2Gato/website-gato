import Footer from "@/app/components/footer";
import Content from "./content";
import Head from "next/head";
import { Metadata } from "next";
import '../plans.css';

export const metadata: Metadata = {
  title: "Servicio de Diseño Web - GATO",
  description:
    "Descubre nuestro servicio de diseño web en GATO. Creamos sitios web modernos, funcionales y adaptados a tus necesidades para potenciar tu presencia en línea.",
  keywords: [
    "diseño web",
    "diseño web en lima",
    "diseño de páginas web",
    "desarrollo web",
    "diseño UX/UI",
    "diseño responsive",
    "creación de sitios web",
    "diseño de interfaces",
    "optimización web",
    "diseño de UX",
    "diseño de UI",
    "diseño web moderno",
    "sitios web funcionales",
    "diseño web adaptativo",
    "agencia de diseño web",
    "servicios de diseño web",
    "estudio de diseño web",
    "diseño web profesional",
    "diseño web personalizado",
    "diseño web creativo",
    "diseño web Lima",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/servicios/diseno-web'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios/diseno-web",
    title: "Diseño Web - GATO",
    description:
      "Descubre nuestro servicio de diseño web en GATO. Creamos sitios web modernos, funcionales y adaptados a tus necesidades para potenciar tu presencia en línea.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Diseño Web de GATO",
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
