import { SkeletonText } from "@/app/components/skeleton";
import { useImageSize } from "@/app/hooks/useImageSize";
import { IImage } from "@/app/types";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

type BodyProjectProps = {
  client: string;
  who_client: string;
  description_service: string;
  services: string[];
  color: string;
  results: { item: string }[];
  logo: IImage;
  testimonial: string;
  testimonial_name: string;
  isLoading?: boolean;
  textColor: string;
};
const BodyProject: React.FC<BodyProjectProps> = ({
  client,
  who_client,
  description_service,
  services,
  color = "#4608AD",
  textColor = "#ffffff",
  results,
  logo,
  testimonial,
  testimonial_name,
  isLoading = false,
}) => {
  // const logoSize = useImageSize(logo || "");

  return (
    <section className=" w-full bg-zinc-100" id="proceso">
      <div className="max-w-[1440px] flex flex-col mx-auto relative sm:px-12 lg:px-16 px-8 py-16  2xl:gap-20 md:gap-16 gap-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="flex justify-start items-start w-full  md:max-w-[50%] xl:max-w-[40%]">
            <Image
              className="transform -scale-x-100 max-h-[80px]  md:max-h-[180px] object-contain w-auto drop-shadow-xl"
              src={"/img/cats/gato_deslizado.png"}
              width={500}
              height={456}
              alt="Gato negro deslizandose"
            />
            <div
              style={{ color: color }}
              className={`bg-white font-semibold  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] text-center px-4 py-2 lg:p-4 drop-shadow-lg rounded-3xl md:-translate-x-[20px] relative`}
            >
              ¿Quien es {client}?
              <div className="absolute -bottom-[25px] left-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[25px] md:border-b-[30px] border-b-transparent border-l-[25px] md:border-l-[30px] border-l-white"></div>
            </div>
          </div>
          <div className="relative md:max-w-[50%] xl:max-w-[45%] bg-white rounded-3xl p-5 shadow-lg text-stone-600  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] ">
            {isLoading ? (
              <SkeletonText lines={4} width="300px" />
            ) : who_client ? (
              who_client
            ) : (
              "Informacion no disponible"
            )}
            <div className="absolute -bottom-[25px] right-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[40px] border-b-transparent border-r-[40px] border-r-white"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="w-full flex flex-row-reverse justify-start items-start md:max-w-[50%] xl:max-w-[40%] ">
            <Image
              className="transform -scale-x-100 max-h-[80px]  md:max-h-[180px] object-contain w-auto drop-shadow-lg"
              src={"/img/cats/gato_alcanzando_algo.png"}
              width={500}
              height={456}
              alt="Gato negro deslizandose"
            />
            <div
              style={{ color: color }}
              className={`bg-white font-semibold  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] text-center px-4 py-2 lg:p-4 drop-shadow-lg rounded-3xl md:translate-x-[20px] relative`}
            >
              <div className="absolute -bottom-[25px] right-4 w-0 h-0 border-t-[10px] border-t-transparent  border-b-[25px] md:border-b-[30px] border-b-transparent border-r-[25px] md:border-r-[30px] border-r-white"></div>
              ¿Qué servicios le brindamos?
            </div>
          </div>
          <div className="md:max-w-[50%] xl:max-w-[45%] bg-white relative rounded-3xl p-5 shadow-lg text-stone-600  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem]">
            <div className="absolute -bottom-[25px] left-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[40px] border-b-transparent border-l-[40px] border-l-white "></div>
            {isLoading ? (
              <SkeletonText lines={3} width="300px" />
            ) : description_service ? (
              description_service
            ) : (
              "Informacion no disponible"
            )}
            {services.length > 0 && (
              <ul className="mt-2">
                {services.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="mb-2 text-stone-600 flex items-start"
                  >
                    <FaCheckCircle
                      style={{ color: color }}
                      className="mr-2  flex-shrink-0 mt-1.5 text-base sm:text-[1.2rem]"
                    />{" "}
                    <span className="flex-1  capitalize">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="flex justify-start items-start w-full md:max-w-[50%] xl:max-w-[40%] ">
            <Image
              className="transform -scale-x-100 max-h-[80px]  md:max-h-[180px] object-contain w-auto drop-shadow-lg"
              src={"/img/cats/gato_deslizado.png"}
              width={500}
              height={456}
              alt="Gato negro deslizandose"
            />
            <div
              style={{ color: color }}
              className={`bg-white font-semibold  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] text-center px-4 py-2 lg:p-4 drop-shadow-lg rounded-3xl md:-translate-x-[20px] relative`}
            >
              <div className="absolute -bottom-[25px] left-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[25px] md:border-b-[30px] border-b-transparent border-l-[25px] md:border-l-[30px] border-l-white"></div>
              ¿Cuáles fueron los resultados?
            </div>
          </div>
          <div className="md:max-w-[50%] xl:max-w-[45%] bg-white rounded-3xl p-5 shadow-lg text-stone-600 relative  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem]">
            <div className="absolute -bottom-[25px] right-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[40px] border-b-transparent border-r-[40px] border-r-white"></div>
            {isLoading ? (
              <SkeletonText lines={3} width="300px" />
            ) : results.length > 0 ? (
              <ul className="mt-2">
                {results.map((item, index: number) => (
                  <li
                    key={index}
                    className="mb-2 text-stone-600 flex items-start"
                  >
                    <FaCheckCircle
                      style={{ color: color }}
                      className="mr-2  flex-shrink-0 mt-1.5 text-base sm:text-[1.2rem]"
                    />{" "}
                    <span className="flex-1">{item.item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Informacion no disponible</p>
            )}
          </div>
        </div>
        {testimonial && (
          <div className="flex flex-col items-start md:flex-row-reverse justify-between md:items-center gap-6 md:gap-6 lg:gap-8 xl:gap-10 ">
            <div className="flex flex-row-reverse justify-start items-start w-full md:max-w-[50%] xl:max-w-[40%] ">
              <Image
                className="max-h-[80px] md:max-h-[180px] object-contain w-auto aspect-auto drop-shadow-lg"
                src={"/img/cats/gato_waton.png"}
                width={500}
                height={456}
                alt="Gato negro deslizandose"
              />
              <div
                style={{ color: color }}
                className={`bg-white font-semibold  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] text-center px-4 py-2 lg:p-4 drop-shadow-lg rounded-3xl md:translate-x-[20px] relative`}
              >
                <div className="absolute -bottom-[25px] right-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[25px] md:border-b-[30px] border-b-transparent border-r-[25px] md:border-r-[30px] border-r-white"></div>
                ¿Cómo fue su experiencia trabajando con Agencia GATO?
              </div>
            </div>

            <div className="md:max-w-[50%] xl:max-w-[45%] text-stone-600 bg-white rounded-3xl p-5">
              <RiDoubleQuotesL className=" text-[3rem] sm:text-[4rem] " />

              <p className=" italic  md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem]">
                {testimonial ? testimonial : "Testimonio no disponible"}
              </p>
              <div className="rounded-r-2xl flex gap-2 items-center mt-4">
                {logo && (
                  <Image
                    className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] aspect-square object-contain rounded-full border-zinc-200 border "
                    src={logo.url}
                    width={logo.width}
                    height={logo.height}
                    title={logo.title ? logo.title : "Logo"}
                    alt={logo.alt ? logo.alt : "Logo"}
                  />
                )}
                <span className="text-zinc-400 font-medium text-xs sm:text-sm">
                  {testimonial_name}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BodyProject;
