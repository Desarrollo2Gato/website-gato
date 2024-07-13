"use client";

import { useState } from "react";
import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Process from "./process";
/* import { DataDesarrolloMovil } from "./dataDesarrolloMovil"; */

function Service06() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Análisis",
      items: [
        "Definimos la plataforma objetivo (iOS, Android o ambas).",
        "Diseñamos la interfaz de usuario (UI) y la experiencia de usuario (UX).",
        "Seleccionamos las tecnologías y herramientas de desarrollo adecuadas.",
      ],
    },
    {
      title: "Desarrollo",
      items: [
        "Desarrollamos una aplicación nativa o híbrida de alta calidad.",
        "Implementamos las funciones y funcionalidades necesarias.",
        "Optimizamos el rendimiento de la aplicación para una experiencia fluida.",
      ],
    },
    {
      title: "Lanzamiento y Publicación",
      items: [
        "Publicamos la aplicación en las tiendas de aplicaciones (App Store y Google Play).",
        "Monitoreamos las reseñas de los usuarios y solucionamos problemas.",
        "Actualizamos la aplicación con nuevas funciones y mejoras de forma regular.",
      ],
    },
  ];

  return (
    <>
      <Banner
        banner="https://i.pinimg.com/originals/56/eb/29/56eb29798b209c84efe1a4bcc2df250c.jpg"
        color="#007CF8"
        service="Desarrollo"
        service2="móvil"
        description="Lleva tu negocio al bolsillo de tus clientes: ¡Conoce nuestras soluciones de desarrollo móvil!"
      />
      <Benefits color="#007CF8" />

      <Process />
    </>
  );
}

export default Service06;
