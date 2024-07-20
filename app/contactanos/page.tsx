
import Footer from "../components/footer";
import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "¿Tienes preguntas o comentarios? Ponte en contacto con nosotros en GATO y con gusto te ayudaremos. Estamos aquí para ofrecerte soluciones digitales efectivas.",
  keywords: [
    "contacto GATO",
    "comunicación GATO",
    "atención al cliente GATO",
    "consultas digitales",
    "soporte GATO",
    "servicio al cliente digital",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/contactanos'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/contactanos",
    title: "Contáctanos - GATO",
    description:
      "¿Tienes preguntas o comentarios? Ponte en contacto con nosotros en GATO y con gusto te ayudaremos. Estamos aquí para ofrecerte soluciones digitales efectivas.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Contáctanos de GATO",
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
        <Contact></Contact>

      </div>
    </>
  );
}

export default Page;
