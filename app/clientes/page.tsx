import Head from "next/head";

import type { Metadata, ResolvingMetadata } from "next";
import Portfolio from "../portafolio/portafolio";
import Clients from "./clients";

export const metadata: Metadata = {
  title: "GATO - Nuestros Clientes",
  description:
    "Conoce a nuestros clientes y descubre cómo hemos ayudado a empresas como CR Motors, Caprepar Group, Flowers Travel y Eva-Dry.",
  openGraph: {
    title: "Nuestros Clientes - Ejemplos de Nuestro Trabajo",
    description:
      "Explora nuestra cartera de clientes y descubre ejemplos destacados de cómo hemos ayudado a empresas como CR Motors, Caprepar Group, Flowers Travel y Eva-Dry a alcanzar sus objetivos en línea con nuestro diseño web, marketing digital, desarrollo de software y branding.",
    images: [
      {
        url: "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
        alt: "Cliente CR Motors",
      },
      {
        url: "https://i.pinimg.com/736x/0d/4b/9b/0d4b9bc3bb65614f182fc563c8b32dd0.jpg",
        alt: "Cliente Caprepar Group",
      },
      {
        url: "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
        alt: "Cliente Flowers Travel",
      },
      {
        url: "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
        alt: "Cliente Eva-Dry",
      },
    ],
  },
};

function Page() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://gato.pe" />

        <link rel="facebook" href="https://www.facebook.com/agenciagatope" />
        <link
          rel="instagram"
          href="https://www.instagram.com/genius_mkt_peru"
        />
        <link
          rel="linkedin"
          href="https://www.linkedin.com/company/agenciagato"
        />
      </Head>
      <div className="w-full min-h-screen">
        <Clients></Clients>
      </div>
    </>
  );
}

export default Page;
