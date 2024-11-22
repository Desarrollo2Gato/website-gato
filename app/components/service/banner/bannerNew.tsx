import Image from "next/image";
import ButtonGato from "../../button";
import { IImage } from "@/app/types";
import { ReactNode } from "react";

type BannerProps = {
  children: ReactNode;
  description: string;
  img: IImage;
};
const Banner: React.FC<BannerProps> = ({ children, description, img }) => {
  return (
    <section className="bg-white w-full">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 flex flex-col md:flex-row  justify-between items-center xl:gap-20 lg:gap-12 md:gap-6 gap-4 ">
        <div className="flex flex-col gap-4 md:gap-8 md:max-w-[60%] xl:max-w-[55%]">
          <div className="text-stone-700">
            <h1 className="xl:text-heading-1 text-heading-6 sm:text-heading-5 md:text-heading-4 lg:text-heading-3 font-bold drop-shadow-md">
              {children}
            </h1>
            <p className="text-stone-500 lg:text-lg xl:text-xl mt-2">
            
              {description}
            </p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <ButtonGato
              wIcon
              bgColor="#ffffff"
              bgHover="#9353B6"
              textColor="#9353B6"
              textHover="#ffffff"
              text="Ver más"
              type="secondary"
              url="#resultados"
            />
            <ButtonGato
              bgColor="#9353B6"
              bgHover="#fff"
              textColor="#fff"
              textHover="#9353B6"
              text="Solicitar servicio"
              type="primary"
              url="#contactanos"
            />
          </div>
        </div>
        <div className="h-full max-w-[80%] md:max-w-[40%] w-full flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain "
            src={img.url}
            height={img.height}
            width={img.width}
            alt={img.alt}
            title={img.title}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
