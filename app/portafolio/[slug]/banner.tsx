import { useImageSize } from "@/app/hooks/useImageSize";
import Image from "next/image";

import ButtonGato from "@/app/components/button";

type BannerProps = {
  color: string;
  title: string;
  image?: string;
  marca?: string;
};

const Banner: React.FC<BannerProps> = ({
  color,
  title,
  image,
  marca,
}) => {
  const size = useImageSize(image || "");
  return (
    <section className=" w-full">
      <div className="max-w-[1440px]  justify-between flex flex-col md:flex-row mx-auto relative sm:px-12 lg:px-16 px-8 py-16  2xl:gap-16 xl:gap-12 lg:gap-8 gap-4">
        <div className="md:w-[50%] flex flex-col gap-4">
          <div className="">
            <h1
              className={`text-stone-700  xl:text-[2.5rem] text-[1.3rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-4`}
            >
              Nuestro Camino con
              <span className={`text-[${color}]`}> {title}</span>
            </h1>
            <p className="text-stone-500  md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
              Acompañamos a nuestro cliente en cada paso, desde la idea inicial
              hasta los resultados finales. Descubre cómo logramos sus objetivos
              con un enfoque personalizado y estratégico.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row mt-2 md:mt-4 ">
              <ButtonGato
                wIcon
                bgColor={"#fff"}
                bgHover={color}
                textColor={color}
                textHover="#fff"
                text="Exporar más"
                type="secondary"
                url="#proceso"
              />
              {/* <button
                style={{ borderColor: color }}
                className={`lg:px-6 lg:py-2 px-4 py-2 text-sm md:text-base rounded-full hover:text-white border-2 font-bold group text-[${color}] relative transition-all duration-500`}
                onClick={() => redirect("#proceso")}
              >
                <div
                  style={{ backgroundColor: color }}
                  className={`absolute  top-0 left-0 opacity-0 rounded-full h-full w-10 aspect-square transform transition-all duration-500 group-hover:w-full  group-hover:opacity-100`}
                ></div>{" "}
                <span className="relative flex gap-2 items-center justify-center">
                  Explorar más <FaArrowRightLong />
                </span>
              </button> */}
              <ButtonGato
                bgColor={color}
                bgHover="#fff"
                textColor="#fff"
                textHover={color}
                text="Solicitar consulta"
                type="primary"
                url="#contactanos"
              />
              {/* <button
                style={{ borderColor: color, backgroundColor: color }}
                className={`lg:px-6 lg:py-2 px-4 py-2 text-sm md:text-base rounded-full text-white border-2  font-bold relative group hover:text-[${color}] transition-all duration-500`}
                onClick={() => redirect("#contactanos")}
              >
                <div
                  className={`absolute bg-white top-0 left-0 opacity-0 rounded-full h-full w-10 aspect-square transform transition-all duration-500 group-hover:w-full  group-hover:opacity-100`}
                ></div>{" "}
                <span className="relative">Solicitar consulta</span>
              </button> */}
            </div>
          </div>
        </div>
        <div className="xl:w-[50%]">
          {image && size && (
            <Image
              className="drop-shadow-lg w-full h-full aspect-auto object-contain"
              src={image}
              alt={marca + ": banner"}
              height={size.height}
              width={size.width}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
