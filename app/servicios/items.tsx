"use client";

import { RevealWrapper } from "next-reveal";
import { FaUsers } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { MdDevicesOther } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import ItemService from "../components/service/itemService";

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
      items2: [
        "Desarrollo de Contenido Enganchador",
        "Segmentación de Audiencias",
        "Optimización de Conversiones",
      ],
      path: "marketing-digital",
      img_1:
        "https://i.pinimg.com/originals/bb/fe/0b/bbfe0b0801797a53c1e536c5d6652099.png",
      img_2:
        "https://i.pinimg.com/originals/ce/c5/ec/cec5eccb5d86c6ac29e98e833a18038c.png",
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
          icon: <MdDevicesOther />,
          text: "Diseño responsivo",
        },
      ],
      items: ["Navegación Intuitiva", "Optimización SEO", "Velocidad de Carga"],
      items2: [
        "Innovación en Diseño",
        "Paletas de Colores Atractivas",
        "Implementación de Tecnologías Modernas",
      ],
      path: "diseno-web",
      img_1:
        "https://i.pinimg.com/originals/27/15/ec/2715ec3263bdf98ffa6a76f885216e4e.png",
      img_2:
        "https://i.pinimg.com/originals/ab/63/41/ab6341a71607f1d22aa8abdbbe395754.png",
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
      items2: [
        "Arquitectura Escalable",
        "Seguridad Avanzada",
        "Desarrollo Eficiente de Código",
      ],
      path: "desarrollo-software",
      img_1:
        "https://i.pinimg.com/originals/1c/d6/1a/1cd61a1c5f199951185fc15f0d40449c.png",
      img_2:
        "https://i.pinimg.com/originals/21/2f/c5/212fc5176c1c45f3b23b0bce4672dbf3.png",
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
      items2: [
        "Conexión con la Audiencia",
        "Impacto Visual",
        "Interacción Intuitiva",
      ],
      path: "branding",
      img_1:
        "https://i.pinimg.com/originals/4c/a8/f1/4ca8f188a31ac53aa6a7da772fcd6943.png",
      img_2:
        "https://i.pinimg.com/originals/29/23/83/292383959150daca4f0dd94f2f0435be.png",
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
        "Actualizaciones continuas",
        "Seguridad y Privacidad",
        "Compatibilidad Multiplataforma",
      ],
      items2: [
        "Segmentación de Audiencias",
        "Optimización de Conversiones",
        "Desarrollo de Contenido Enganchador",
      ],
      path: "desarrollo-movil",
      img_1:
        "https://i.pinimg.com/originals/fe/92/7e/fe927e929ef77cd915158c97cb942cff.png",
      img_2:
        "https://i.pinimg.com/originals/09/87/cd/0987cd2430f0c40b65cc6e58af1fbb13.png",
    },
  ];

  return (
    <section id="detail" className=" bg-gray-100">
      <div className="w-full">
        <div className="w-full flex flex-col">
          {services.map((service: any, index) => (
            <RevealWrapper
              origin="bottom"
              duration={index * 400 + 1000}
              className={`w-full ${service.reverse ? "bg-white" : ""}`}
              key={index}
            >
              <div className="max-w-[1440px] mx-auto w-full sm:px-12 lg:px-16 px-8 py-16">
                <ItemService
                  reverse={service.reverse}
                  color={service.color}
                  name={service.name}
                  description={service.description}
                  benefits={service.benefits}
                  items={service.items}
                  items2={service.items2}
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
