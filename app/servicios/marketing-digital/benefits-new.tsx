import { IImage } from "@/app/types";
import Image from "next/image";
import { ReactNode } from "react";

type BenefitsNewProps = {
  title: ReactNode;
  description: string;
  img: IImage;
  benefits: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
};
const BenefitsNew: React.FC<BenefitsNewProps> = ({
  title,
  description,
  img,
  benefits,
}) => {
  const firstBenefits = benefits.slice(0, 3);
  const lastBenefits = benefits.slice(-3);
  return (
    <section className="bg-white w-full">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 ">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6">
            {title}
          </h2>
          <p className="text-stone-600 md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            {description}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="w-full lg:w-[35%]">
            <ul>
              {benefits.length > 0 &&
                firstBenefits.map((item, index) => (
                  <li className="flex gap-2 flex-row mb-4 lg:mb-8" key={index}>
                    <span className="bg-[#9353B6] w-10 h-10 flex justify-center items-center aspect-square rounded-full text-white text-2xl">
                      {item.icon}
                    </span>
                    <p className="text-stone-500">
                      <span className="block font-semibold">{item.title}</span>
                      {item.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
          <Image
            className="w-full lg:w-[30%] aspect-auto h-auto object-contain"
            src={img.url}
            width={img.width}
            height={img.height}
            alt={img.alt}
            title={img.title}
          />
          <div className="w-full lg:w-[35%]">
            <ul>
              {benefits.length > 3 &&
                lastBenefits.map((item, index) => (
                  <li className="flex gap-2 flex-row mb-4 lg:mb-8" key={index}>
                    <span className="bg-[#9353B6] w-10 h-10 flex justify-center items-center aspect-square rounded-full text-white text-2xl">
                      {item.icon}
                    </span>
                    <p className="text-stone-500">
                      <span className="block font-semibold">{item.title}</span>
                      {item.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BenefitsNew;
