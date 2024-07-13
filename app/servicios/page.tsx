import { Metadata } from "next";
import Footer from "../components/footer";
import Services from "./services";
import Head from "next/head";
import Form from "../components/form";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "En GATO, ofrecemos desarrollo web, diseño UX/UI, marketing digital, branding y desarrollo de software móvil. Transformamos ideas en soluciones digitales.",
  keywords: [
    "servicios digitales GATO",
    "desarrollo web",
    "diseño UX/UI",
    "marketing digital",
    "consultoría de marca",
    "branding",
    "diseño de logotipos",
    "desarrollo de aplicaciones móviles",
    "programación web",
    "SEO",
    "optimización de motores de búsqueda",
    "estrategias de marketing",
    "campañas publicitarias",
    "email marketing",
    "social media marketing",
    "identidad corporativa",
    "rebranding",
    "gestión de marca",
  ],
  alternates: {
    canonical: "https://www.gato.pe/servicios",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/servicios",
    title: "Servicios - GATO",
    description:
      "En GATO, ofrecemos desarrollo web, diseño UX/UI, marketing digital, branding y desarrollo de software móvil. Transformamos ideas en soluciones digitales.",
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
        <Services></Services>
        <Form color="#6D28D9"/>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Page;
