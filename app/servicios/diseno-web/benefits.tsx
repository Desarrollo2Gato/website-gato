import { RevealWrapper } from "next-reveal";
import BenefitCard from "@/app/components/service/benefits/benefitCard";

type Props = {
  color: string;
};

const benefits = (prop: Props) => {
  const benefitsInfo = [
    {
      title: "Diseño Responsivo",
      content:
        "Creamos sitios web que se adaptan a cualquier dispositivo, ofreciendo una excelente experiencia de usuario.",
    },
    {
      title: "Navegación Intuitiva",
      content:
        "Diseñamos interfaces fáciles de navegar que mejoran la experiencia del usuario.",
    },
    {
      title: "Optimización SEO",
      content:
        "Implementamos prácticas SEO para mejorar tu posicionamiento en los motores de búsqueda.",
    },
    {
      title: "Velocidad de Carga",
      content:
        "Optimizamos tu sitio para que cargue rápidamente, reduciendo la tasa de abandono.",
    },
    {
      title: "Diseño Atractivo",
      content:
        " Desarrollamos diseños visualmente atractivos que capturan la atención de tus visitantes.",
    },
    {
      title: "Funcionalidades Avanzadas",
      content:
        "Incorporamos funcionalidades avanzadas según las necesidades de tu negocio, mejorando la interacción del usuario.",
    },
  ];
  const mainColor = prop.color;
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-8 xl:px-32 lg:px:16 lg:py-16">
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
