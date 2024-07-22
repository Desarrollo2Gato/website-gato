import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import BenefitCard from "@/app/components/service/benefits/benefitCard";

type Props = {
  color: string;
};

const benefits = (prop: Props) => {
  const benefitsInfo = [
    {
      title: "Experiencia del Usuario",
      content:
        "Diseñamos aplicaciones con una excelente experiencia de usuario, intuitiva y fácil de usar.",
    },
    {
      title: "Funcionalidad Avanzada",
      content:
        "Incorporamos las últimas tecnologías para ofrecer funcionalidades avanzadas y relevantes.",
    },
    {
      title: "Compatibilidad Multiplataforma",
      content:
        "Desarrollamos apps compatibles con múltiples plataformas, aumentando tu alcance.",
    },
    {
      title: "Optimización del retorno de la inversión (ROI)",
      content:
        "AOptimizamos las apps para garantizar un rendimiento rápido y sin fallos.",
    },
    {
      title: "Actualizaciones Continuas",
      content:
        "Ofrecemos mantenimiento y actualizaciones regulares para asegurar que tu app esté siempre al día y funcionando correctamente.",
    },
    {
      title: "Seguridad y Privacidad",
      content:
        "Implementamos medidas de seguridad robustas para proteger los datos de tus usuarios.",
    },
  ];
  const mainColor = prop.color;
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16">
        <h2
          className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
        >
          Beneficios
        </h2>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-y-5 xl:gap-x-16">
          {benefitsInfo.map((benefit, index) => (
            <RevealWrapper key={index} origin="bottom" duration={1500}>
              <BenefitCard
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
