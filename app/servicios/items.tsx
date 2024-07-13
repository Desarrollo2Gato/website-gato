"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React, { useState } from "react";
import FastContact from "../components/fast-contac";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { rgbToHex } from "@mui/material";
import hexToRgba from "hex-to-rgba";
import { FaCheckCircle } from "react-icons/fa";
import ItemService from "../components/service/itemService";
import { reverse } from "dns";

function Items() {
  const services = [
    {
      reverse: false,
      color: "#A52DE6",
      name: "Marketing Digital",
      description:
        "Transforme su presencia en línea con nuestro servicio de marketing digital. Desde estrategias SEO y gestión de redes sociales hasta campañas PPC y análisis de datos, ayudamos a maximizar su visibilidad y conectar con su audiencia de manera efectiva, impulsando así el crecimiento y el éxito de su negocio en el mundo digital.",
      benefits: [
        {
          icon: <FaUsers />,
          text: "Genera Leads",
        },
        {
          icon: <PiStrategyBold />,
          text: "Impulsa tus ventas",
        },
      ],
      items: [
        "Estrategias Personalizadas",
        "Análisis de Datos",
        "Mejora de la Visibilidad",
      ],
      path: "marketing-digital",
      img_1:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
      img_2:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
    },

    {
      reverse: true,
      color: "#0BC2E1",
      name: "Diseño Web",
      description:
        "Revitalice su presencia en línea con nuestro servicio especializado en diseño web. Desde la creación de sitios web atractivos y funcionales hasta la optimización para dispositivos móviles y la implementación de experiencias de usuario intuitivas, nos aseguramos de que su negocio destaque visualmente y ofrezca una navegación fluida que convierta visitantes en clientes fieles",
      benefits: [
        {
          icon: <MdWeb />,
          text: "Sitios atractivos",
        },
        {
          icon: <DiResponsive />,
          text: "Diseño responsivo",
        },
      ],
      items: ["Navegación Intuitiva", "Optimización SEO", "Velocidad de Carga"],
      path: "disenio-web",
      img_1:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
      img_2:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
    },
    {
      reverse: false,
      color: "#007CF8",
      name: "Desarrollo de Software",
      description:
        "Nos especializamos en el desarrollo de software a medida que se adapta exactamente a las necesidades específicas de su negocio. Desde la conceptualizacion hasta la implementación y soporte continuo, creamos soluciones personalizadas que potencian la eficiencia, la productividad y el éxito a largo plazo de su empresa en el entorno digital.",
      benefits: [
        {
          icon: <GrLineChart />,
          text: "Escalabilidad",
        },
        {
          icon: <MdOutlineSupportAgent />,
          text: "Soporte Continuo",
        },
      ],
      items: ["Integración Perfecta", "Seguridad", "Optimization de Procesos"],
      path: "desarrollo-software",
      img_1:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
      img_2:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
    },
    {
      reverse: true,
      color: "#A52DE6",
      name: "Branding",
      description:
        "Potencie la identidad de su marca con nuestro servicio integral de branding. Desde la creación de una identidad visual única hasta estrategias de posicionamiento de marca y desarrollo de contenido coherente, trabajamos para fortalecer su presencia en el mercado y conectar emocionalmente con su audiencia, asegurando que cada interacción refleje la esencia y los valores de su negocio.",
      benefits: [
        {
          icon: <LuHeartHandshake />,
          text: "Lealtad del cliente",
        },
        {
          icon: <PiStrategyBold />,
          text: "Estrategia de marca",
        },
      ],
      items: ["Identidad Unica", "Consistencia de Marca", "Imagen Profesional"],
      path: "branding",
      img_1:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
      img_2:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
    },
    {
      reverse: false,
      color: "#007CF8",
      name: "Desarrollo Movil",
      description:
        "Potencie su alcance móvil con nuestro servicio especializado en desarrollo móvil. Desde la creación de aplicaciones innovadoras hasta la optimización para diversas plataformas y la integración de funcionalidades avanzadas, nos aseguramos de que su negocio esté preparado para captar y retener clientes en el mundo digital móvil, impulsando su crecimiento y éxito.",
      benefits: [
        {
          icon: <BsCurrencyDollar />,
          text: "Mayor accesibilidad",
        },
        {
          icon: <FaChartLine />,
          text: "Optimización empresarial",
        },
      ],
      items: [
        "Compatibilidad Multiplataforma",
        "Actualizaciones continuas",
        "Seguridad y Privacidad",
      ],
      path: "desarrollo-movil",
      img_1:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
      img_2:
        "https://i.pinimg.com/originals/1c/e6/5b/1ce65b19daf61d5ba01fa30739599c82.jpg",
    },
  ];

  return (
    <section id="detail" className=" bg-gray-100">
      <div className="w-full pt-16 ">
        <h2
          className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
        >
          Nuestros Servicios
        </h2>
        <div className="w-full flex flex-col gap-16 ">
          {services.map((service: any, index) => (
            <RevealWrapper
              origin="bottom"
              duration={index * 400 + 1000}
              className={
                `w-full ${service.reverse ? '' : 'bg-white' }`
              }
              key={index}
            >
              <div className="w-full max-w-[1920px] mx-auto xl:px-24 md:px-16  px-8">
              <ItemService
                reverse={service.reverse}
                color={service.color}
                name={service.name}
                description={service.description}
                benefits={service.benefits}
                items={service.items}
                path={service.path}
                img_1={service.img_1}
                img_2={service.img_2}
              />
              </div>
             
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Items;
