import { RevealWrapper } from "next-reveal";
import Link from "next/link";

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
        <div className="relative w-full max-w-[1440px] mx-auto h-full flex px-8 py-8 xl:px-32 lg:px:16 lg:py-16">
          <div className="relative hidden w-full h-full md:flex flex-col md:flex-row justify-end">
            <div className="absolute left-16   opacity-90">
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
          <div className="relative md:absolute top-0 left-0 w-full h-full flex flex-col md:flex-row gap-5 lg:gap-16 items-center md:px-8 md:py-8 xl:px-32 lg:px:16 justify-between ">
            <RevealWrapper
              origin="left"
              duration={1500}
              className={"w-full lg:w-1/3"}
            >
              <div className="flex flex-col gap-5 lg:gap-4 xl:gap-8  md:justify-start items-center md:items-start">
                <h1 className="uppercase text-4xl sm:text-5xl 2xl:text-7xl font-bold w-full text-center md:text-left">
                  {prop.service}
                  <span className={`text-[${mainColor}]`}>
                    {" "}
                    {prop.service2}
                  </span>
                </h1>
                <p className="w-full text-center md:text-left text-lg sm:text-xl lg:text-2xl text-[#666666]">
                  {prop.description}
                </p>
                <Link
                  href={"#plans"}
                  className={`px-5 py-2 uppercase font-bold bg-[${mainColor}] rounded-md text-white text-lg sm:text-xl lg:text-2xl`}
                >
                  ver más
                </Link>
              </div>
            </RevealWrapper>

            <div className="max-h-[300px] md:max-h-[75%] lg:max-h-[60%] 2xl:max-h-[70%] lg:h-full lg:w-2/3 w-full md:max-w-[500px] 2xl:max-w-[800px] md:mr-[10%]  h-full ">
              <RevealWrapper
                origin="right"
                duration={1800}
                className={"w-full h-full md:p-4 xl:p-6 bg-white rounded-xl"}
              >
                <img
                  loading="lazy"
                  src={prop.banner}
                  alt={'Imagen del banner de ' + prop.service}
                  title={'Imagen del banner de ' + prop.service}
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
