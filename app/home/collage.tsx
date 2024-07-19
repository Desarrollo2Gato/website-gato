"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import { useState } from "react";

function Collage() {
  const [position, setPosition] = useState(0);
  return (
    <section id="collage" className="  w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <RevealWrapper
            duration={1500}
            origin="left "
            className="col-span-2 sm:col-span-1"
          >
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              onMouseEnter={() => setPosition(1)}
              onMouseLeave={() => setPosition(0)}
            >
              <div>
                <Image
                  src="https://i.pinimg.com/736x/9e/a4/5d/9ea45dc48908ce2f19947d3105dd0dbb.jpg"
                  loading="lazy"
                  height={1104}
                  width={736}
                  alt="Agecia GATO - Marketing Digital"
                  title="Agecia GATO - Marketing Digital"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div
                className="absolute w-full h-full flex px-4 lg:px-6 transition-all justify-center items-center flex-col duration-500 ease-in-out group-hover:bg-[#6D28D9]  group-hover:bg-opacity-70
                  "
                role="button"
              >
                <div className="w-full translate-y-[130px] xl:translate-y-[162px] text-xl text-white inline-block uppercase font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out group-hover:translate-y-0  group-hover:translate-x-1/2 ">
                  <span className="group-hover:-translate-x-1/2 block w-fit transition-all duration-300">
                    Innovamos
                  </span>
                </div>

                <p className="hidden text-xl text-white xl:text-xl md:text-base sm:text-xs lg:w-[80%] lg-mx-auto group-hover:block text-center">
                  Nuestros servicios de Marketing Digital están orientados en
                  transformar tus redes sociales en canales de ventas, según los
                  objetivos de tu negocio.
                </p>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper
            duration={1500}
            origin="left"
            className="w-full col-span-2"
          >
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              onMouseEnter={() => setPosition(2)}
              onMouseLeave={() => setPosition(0)}
            >
              <div>
                <Image
                  width={735}
                  height={490}
                  src="https://i.pinimg.com/736x/da/57/8e/da578e890c011bf32b2aabe78d1e94c2.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Branding"
                  title="Agecia GATO - Branding"
                  className="absolute inset-0 h-full w-full object-cover object-top  transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}

              <div
                className="absolute w-full h-full flex px-4 lg:px-6 transition-all justify-center items-center flex-col duration-500 ease-in-out group-hover:bg-[#6D28D9]  group-hover:bg-opacity-70
                  "
                role="button"
              >
                <div className="w-full translate-y-[130px] xl:translate-y-[162px] text-xl text-white inline-block uppercase font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out group-hover:translate-y-0  group-hover:translate-x-1/2 ">
                  <span className="group-hover:-translate-x-1/2 block w-fit transition-all duration-300">
                    Desarrollamos
                  </span>
                </div>
                <p className="hidden text-xl text-white xl:text-xl md:text-base sm:text-xs lg:w-[80%] lg-mx-auto group-hover:block text-center ">
                  Transformamos tu presencia en línea con diseños web
                  impactantes y funcionales.
                </p>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper
            duration={1500}
            origin="left"
            className="w-full col-span-2"
          >
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              onMouseEnter={() => setPosition(3)}
              onMouseLeave={() => setPosition(0)}
            >
              <div>
                <Image
                  width={735}
                  height={490}
                  src="https://i.pinimg.com/736x/ae/79/53/ae7953b8c7ec33f158077856980a77ee.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Desarrollo de Software"
                  title="Agecia GATO - Desarrollo de Software"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}
              <div
                className="absolute w-full h-full flex px-4 lg:px-6 transition-all justify-center items-center flex-col duration-500 ease-in-out group-hover:bg-[#6D28D9]  group-hover:bg-opacity-70
                  "
                role="button"
              >
                <div className="w-full translate-y-[130px] xl:translate-y-[162px] text-xl text-white inline-block uppercase font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out group-hover:translate-y-0  group-hover:translate-x-1/2 ">
                  <span className="group-hover:-translate-x-1/2 block w-fit transition-all duration-300">
                    Potenciamos
                  </span>
                </div>
                <p className="hidden text-xl text-white xl:text-xl md:text-base sm:text-xs lg:w-[80%] lg-mx-auto group-hover:block text-center">
                  Transformamos tus ideas en software funcional. Desde la
                  conceptualización hasta la implementación, creamos soluciones
                  a medida que potencian tu negocio y simplifican tus
                  operaciones.
                </p>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper
            duration={1500}
            origin="left"
            className="col-span-2 sm:col-span-1"
          >
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              onMouseEnter={() => setPosition(4)}
              onMouseLeave={() => setPosition(0)}
            >
              <div>
                <Image
                  width={735}
                  height={490}
                  src="https://i.pinimg.com/736x/ab/1f/9b/ab1f9b72e259f15ac247e3ef90a63261.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Desarrollo de Aplicaciones"
                  title="Agecia GATO - Desarrollo de Aplicaciones"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}

              <div
                className="absolute w-full h-full flex px-4 lg:px-6 transition-all justify-center items-center flex-col duration-500 ease-in-out group-hover:bg-[#6D28D9]  group-hover:bg-opacity-70
                  "
                role="button"
              >
                <div className="w-full translate-y-[130px] xl:translate-y-[162px] text-xl text-white inline-block uppercase font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out group-hover:translate-y-0  group-hover:translate-x-1/2 ">
                  <span className="group-hover:-translate-x-1/2 block w-fit transition-all duration-300">
                    Impulsamos
                  </span>
                </div>
                <p className="hidden text-xl text-white xl:text-xl md:text-base sm:text-xs lg:w-[80%] lg-mx-auto group-hover:block text-center">
                  Creamos identidades visuales impactantes para destacar tu
                  marca.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Collage;
