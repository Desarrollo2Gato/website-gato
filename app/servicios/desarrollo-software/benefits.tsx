import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import BenefitCard from "@/app/components/service/benefits/benefitCard";

type Props = {
  color: string;
};

const benefits = (prop: Props) => {
  const benefitsInfo = [
    {
      title: "Soluciones a Medida",
      content:
        "Desarrollamos software personalizado que se adapta perfectamente a las necesidades de tu negocio.",
    },
    {
      title: "Escalabilidad",
      content:
        "Nuestras soluciones están diseñadas para crecer junto con tu empresa, facilitando futuras expansiones.",
    },
    {
      title: "Seguridad",
      content:
        "Implementamos las últimas tecnologías y prácticas para garantizar la seguridad de tus datos y sistemas.",
    },
    {
      title: "Integración Perfecta",
      content:
        "Aseguramos que el nuevo software se integre perfectamente con tus sistemas existentes.",
    },
    {
      title: "Optimización de Procesos",
      content:
        "Automatizamos y optimizamos procesos para aumentar la eficiencia y reducir costos operativos.",
    },
    {
      title: "Soporte Continuo",
      content:
        "Ofrecemos soporte continuo para garantizar que tu software funcione de manera óptima en todo momento.",
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
            <RevealWrapper origin="bottom" duration={1500}>
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
