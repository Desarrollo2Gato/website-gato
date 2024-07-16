import { RevealWrapper } from "next-reveal";
import BenefitCard from "@/app/components/service/benefits/benefitCard";

type Props = {
  color: string;
};

const benefits = (prop: Props) => {
  const benefitsInfo = [
    {
      title: "Estrategias Personalizadas",
      content:
        "Diseñamos campañas a medida que se adaptan a las necesidades y objetivos específicos de tu negocio.",
    },
    {
      title: "Incremento del ROI",
      content:
        "Optimizamos tus inversiones en marketing para garantizar el máximo retorno de inversión.",
    },
    {
      title: "Análisis de Datos",
      content:
        "Utilizamos herramientas avanzadas para analizar el rendimiento y ajustar estrategias en tiempo real.",
    },
    {
      title: "Creatividad e Innovación",
      content:
        "Campañas innovadoras que destacan tu marca y atraen a tu audiencia.",
    },
    {
      title: "Presencia Multicanal",
      content:
        " Abarcamos diversos canales, desde redes sociales hasta email marketing, para maximizar tu alcance.",
    },
    {
      title: "Mejora de la Visibilidad",
      content:
        " Aumentamos la visibilidad de tu marca y productos, atrayendo más tráfico y clientes potenciales.",
    },
  ];
  const mainColor = prop.color;
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-8 xl:  lg:px:16 lg:py-16">
        <h2
          className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
        >
          Beneficios
        </h2>
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-y-5 xl:gap-x-16">
          {benefitsInfo.map((benefit, index) => (
            <RevealWrapper origin="left" duration={1500}>
              <BenefitCard
                key={index}
                color={mainColor}
                title={benefit.title}
                content={benefit.content}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default benefits;
