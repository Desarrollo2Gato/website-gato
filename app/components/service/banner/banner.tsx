import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import ButtonGato from "../../button";

type Props = {
  color: string;
  service: string;
  service2: string;
  description: string;
  banner: string;
};

const banner = (prop: Props) => {
  const mainColor = prop.color;
  return (
    <div className="w-full h-auto md:h-[25rem] 2xl:h-[800px] lg:h-[600px] bg-white shadow-lg">
      <RevealWrapper origin="left" duration={1000} className={"w-full h-full"}>
        <div className="relative w-full max-w-[1440px] mx-auto h-full flex sm:px-12 lg:px-16 px-8 py-16">
          <div className="relative hidden w-full h-full md:flex flex-col md:flex-row justify-end">
            <div className="absolute left-16  opacity-90">
              <RevealWrapper
                origin="top"
                duration={1500}
                className={"flex gap-2 flex-col"}
              >
                <div className="flex gap-2 ">
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                </div>
                <div className="flex gap-2 ml-5">
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                  <span
                    className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                  ></span>
                </div>
              </RevealWrapper>
            </div>
            <RevealWrapper origin="bottom" duration={1500}>
              <div
                className={`h-full w-auto aspect-square bg-[${mainColor}] rounded-full flex justify-end items-center px-8 relative`}
              >
                <RevealWrapper origin="right" duration={1500}>
                  <div className="flex gap-2 opacity-90">
                    <div className="flex flex-col gap-2 mt-5">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>{" "}
                  </div>
                </RevealWrapper>

                <div className="absolute -left-16 bottom-0  opacity-90">
                  <RevealWrapper
                    origin="bottom"
                    duration={1500}
                    className={"flex flex-col gap-2"}
                  >
                    <div className="flex gap-2 ">
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                    </div>
                    <div className="flex gap-2 ml-5">
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                      <span
                        className={`h-3 w-3 rounded-full bg-[${mainColor}]`}
                      ></span>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
          <div className="relative md:absolute top-0 left-0 w-full h-full flex flex-col md:flex-row gap-5 lg:gap-16 items-center sm:px-12 lg:px-16 px-8 py-16 justify-between ">
            <RevealWrapper
              origin="left"
              duration={1500}
              className={"w-full lg:w-1/3"}
            >
              <div className="flex flex-col gap-5 lg:gap-4 xl:gap-8  md:justify-start items-center md:items-start">
                <h1 className="xl:text-heading-1 text-heading-6 sm:text-heading-5 md:text-heading-4 lg:text-heading-3 font-bold w-full text-center md:text-left text-stone-800">
                  {prop.service}
                  <span className={`text-[${mainColor}]`}>
                    {" "}
                    {prop.service2}
                  </span>
                </h1>
                <p className="w-full text-center md:text-left lg:text-lg xl:text-xl text-stone-500">
                  {prop.description}
                </p>
                <ButtonGato
                  type={"primary"}
                  bgColor={mainColor}
                  bgHover={"#ffffff"}
                  textColor={"#ffffff"}
                  textHover={mainColor}
                  url={"#contactanos"}
                  text={"Solicitar servicio"}
                />
                {/* <Link
                  href={"#plans"}
                  className={`px-5 py-2 capitalize font-bold bg-[${mainColor}] rounded-md text-white`}
                >
                  ver más
                </Link> */}
              </div>
            </RevealWrapper>

            <div className="max-h-[300px] md:max-h-[75%] lg:max-h-[60%] 2xl:max-h-[70%] lg:h-full lg:w-2/3 w-full md:max-w-[500px] 2xl:max-w-[800px] md:mr-[10%]  h-full ">
              <RevealWrapper
                origin="right"
                duration={1800}
                className={"w-full h-full md:p-4 xl:p-6 bg-white rounded-xl"}
              >
                <Image
                  width={702}
                  height={478}
                  loading="lazy"
                  src={prop.banner}
                  alt={"Imagen del banner de " + prop.service}
                  title={"Imagen del banner de " + prop.service}
                  className=" h-full w-full object-cover rounded-lg "
                />
              </RevealWrapper>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
};

export default banner;
