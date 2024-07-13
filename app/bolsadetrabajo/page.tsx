import React from "react";
import BolsaDeTrabajo from "./bolsadetrabajo";
import "./cardJob.css";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Bolsa de Trabajo",
  description:
    "Explora oportunidades laborales en GATO. Únete a nuestro equipo y sé parte de nuestra misión de transformar ideas en soluciones digitales innovadoras.",
  keywords: [
    "empleos GATO",
    "trabajo en GATO",
    "oportunidades laborales GATO",
    "vacantes digitales",
    "empleo en marketing digital",
    "desarrollo móvil",
    "desarrollo de software",
    "branding digital",
    "consultoría digital",
  ],
  alternates:{
    canonical: 'https://www.gato.pe/bolsadetrabajo'
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/bolsadetrabajo",
    title: "Bolsa de Trabajo - GATO",
    description:
      "Explora oportunidades laborales en GATO. Únete a nuestro equipo y sé parte de nuestra misión de transformar ideas en soluciones digitales innovadoras.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la Bolsa de Trabajo de GATO",
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
const page = () => {
  return (
    <>
      <BolsaDeTrabajo />
    </>
  );
};

export default page;
