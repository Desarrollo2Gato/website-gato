import { RevealWrapper } from "next-reveal";
import BenefitCard from "@/app/components/service/benefits/benefitCard";

type Props = {
  color: string;
};

const benefits = (prop: Props) => {
  const benefitsInfo = [
    {
      title: "Segmentación Precisa",
      content:
        "Creamos listas de contactos segmentadas para enviar mensajes relevantes y personalizados que resuenen con cada grupo de audiencia.",
    },
    {
      title: "Diseño Atractivo",
      content:
        "Desarrollamos plantillas de correo electrónico visualmente atractivas que capturan la atención y fomentan la interacción.",
    },
    {
      title: "Automatización Eficiente",
      content:
        "Implementamos secuencias de correos automatizados que optimizan el tiempo y mejoran la eficiencia de tus campañas de email marketing.",
    },
    {
      title: "Optimización de Tasa de Apertura",
      content:
        "Aplicamos técnicas avanzadas para aumentar la tasa de apertura de tus correos y asegurar que tu mensaje llegue a tu audiencia.",
    },
    {
      title: "Análisis y Reportes Detallados",
      content:
        "Ofrecemos análisis detallados y reportes para evaluar el rendimiento de tus campañas y ajustar estrategias para obtener mejores resultados.",
    },
    {
      title: "Mejora Continua",
      content:
        "Utilizamos datos y feedback para mejorar continuamente tus campañas, asegurando que tus correos sean cada vez más efectivos y relevantes.",
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
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-y-5 xl:gap-x-16">
          {benefitsInfo.map((benefit, index) => (
            <RevealWrapper key={index} origin="left" duration={1500}>
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
