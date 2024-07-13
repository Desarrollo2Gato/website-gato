import Portfolio from "./portafolio";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Explora nuestro portafolio en GATO. Descubre los proyectos en los que hemos trabajado y las soluciones digitales que hemos creado para nuestros clientes.",
  keywords: [
    "portafolio GATO",
    "proyectos digitales",
    "ejemplos de proyectos digitales",
    "soluciones digitales GATO",
    "desarrollo de software GATO",
    "diseño web GATO",
    "marketing digital GATO",
    "consultoría digital GATO",
    "casos de éxito GATO",
    "desarrollo móvil",
    "aplicaciones móviles",
    "apps móviles",
    "desarrollo de aplicaciones móviles",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/portafolio'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/portafolio",
    title: "Portafolio - GATO",
    description:
      "Explora nuestro portafolio en GATO. Descubre los proyectos en los que hemos trabajado y las soluciones digitales que hemos creado para nuestros clientes.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la página de Portafolio de GATO",
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
      <div className="min-w-screen w-full min-h-screen">
        <Portfolio></Portfolio>
      </div>
    </>
  );
}

export default Page;
