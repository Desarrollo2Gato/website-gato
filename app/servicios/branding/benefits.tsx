import { RevealWrapper } from "next-reveal";
import BenefitCard from "@/app/components/service/benefits/benefitCard";

type Props = {
  color: string;
};

const benefits = (prop: Props) => {
  const benefitsInfo = [
    {
      title: "Identidad Única",
      content:
        "Creación de una identidad de marca única y memorable que te diferencie de la competencia.",
    },
    {
      title: "Consistencia de Marca",
      content:
        "Aseguramos la coherencia de tu marca en todos los canales y materiales de comunicación.",
    },
    {
      title: "Lealtad del Cliente",
      content:
        "Fortalecemos la conexión emocional con tus clientes, aumentando su lealtad.",
    },
    {
      title: "Reconocimiento de Marca",
      content:
        "Mejoramos el reconocimiento de tu marca, haciéndola más visible y recordada.",
    },
    {
      title: "Estrategia de Marca",
      content:
        "Desarrollamos estrategias de marca efectivas que alinean tu identidad con tus objetivos comerciales.",
    },
    {
      title: "Imagen Profesional",
      content:
        "Proyectamos una imagen profesional que inspira confianza y credibilidad en tus clientes.",
    },
  ];
  const mainColor = prop.color;
  return (
    <div className="w-full bg-gray-100">
      <RevealWrapper origin="left" duration={1500} className={"w-full"}>
        <div className="w-full max-w-[1920px] mx-auto px-8 py-8 xl:px-32 lg:px:16 lg:py-16">
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
      </RevealWrapper>
    </div>
  );
};

export default benefits;
