"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function BannerAbout() {
  const words = [
    "ateción personalizada",
    "experiencia",
    "transparencia y confianza",
  ];

  const sizing = {
    title: "xl:text-[5rem] md:text-[3rem] text-[2rem]",
    description: "xl:text-[3rem] md:text-3xl sm:text-[2rem]  text-xl",
  };

  const [position, setPosition] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition((prevPosition) =>
        prevPosition === 2 ? 0 : prevPosition + 1
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, [position]);
  return (
    <section className=" w-full  ">
      <div className="max-w-[1440px] flex flex-col mx-auto relative sm:px-12 lg:px-16 px-8 py-16 ">
        <div className="flex flex-col animate-fade-right mb-4">
          <h2
            className={`${sizing.title} 
                text-[#3D3D3D] w-full font-semibold `}
            title="Agencia GATO"
          >
            En <span className="text-[#6D28D9]">GATO</span> nos destacamos por
            nuestra
          </h2>

          <div className="flex flex-col gap-2">
            <span
              title="Servicio tecnológico GATO"
              className={` ${sizing.title} text-[#3D3D3D]  px-1 w-fit font-semibold   leading-1	`}
            >
              {position === 0 && (
                <TypeAnimation
                  className={``}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    words[position],
                    1000,
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              )}
              {position === 1 && (
                <TypeAnimation
                  className={""}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    words[position],
                    1000,
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              )}
              {position === 2 && (
                <TypeAnimation
                  className={``}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    words[position],
                    1000,
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              )}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 lg:gap-10 md:h-[500px] xl:h-[700px]">
          <RevealWrapper
            origin="bottom"
            duration={1000}
            className={"w-full md:w-1/3 flex flex-col justify-end"}
          >
            <div className="">
              <div className="container w-full flex flex-col gap-4">
                <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                  <Image
                    width={800}
                    height={1200}
                    className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover aspect-square shadow-md"
                    src="https://i.pinimg.com/originals/0a/ec/7b/0aec7b72bbf7111392c9fdb5341e8700.jpg"
                    alt="Atención Personalizada"
                    title="Atención personalizada"
                  />
                  <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                    <Image
                      width={800}
                      height={1200}
                      loading="lazy"
                      className=" w-full h-full object-cover aspect-square shadow-md"
                      src="https://i.pinimg.com/originals/0a/ec/7b/0aec7b72bbf7111392c9fdb5341e8700.jpg"
                      alt="Atención Personalizada fondo"
                      title="Atención Personalizada fondo"
                    />
                    <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center text-[1rem] 2xl:text-[1.4rem]">
                      <p>
                        Nos enorgullece ofrecer una atención personalizada a
                        cada uno de nuestros clientes. Nos tomamos el tiempo
                        para conocer tus necesidades y objetivos, garantizando
                        un enfoque a medida que maximiza los resultados y
                        asegura tu satisfacción.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                  Atención Personalizada
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            duration={1300}
            className={"w-full md:w-1/3 flex flex-col justify-center"}
          >
            <div className="">
              <div className="container w-full flex flex-col gap-4">
                <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                  <Image
                    width={1200}
                    height={800}
                    className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover aspect-square shadow-md"
                    src="https://i.pinimg.com/originals/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg"
                    alt="Experiencia"
                    title="Experiencia"
                  />
                  <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                    <Image
                      width={1200}
                      height={800}
                      loading="lazy"
                      className=" w-full h-full object-cover aspect-square shadow-md"
                      src="https://i.pinimg.com/originals/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg"
                      alt="Experiencia fondo"
                      title="Experiencia fondo"
                    />
                    <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center text-[1rem] 2xl:text-[1.4rem]">
                      <p>
                        Con años de experiencia en marketing, branding,
                        desarrollo de software y web, nuestro equipo está
                        compuesto por expertos en sus respectivos campos. Esta
                        experiencia nos permite ofrecer soluciones efectivas y
                        creativas que impulsan el crecimiento de tu negocio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                  Experiencia
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            duration={1600}
            className={"w-full md:w-1/3 flex flex-col justify-start"}
          >
            <div className="">
              <div className="container w-full flex flex-col gap-4">
                <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                  <Image
                    width={735}
                    height={490}
                    loading="lazy"
                    className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                    alt="Transparencia y confianza"
                    title="Transparencia y confianza"
                  />
                  <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                    <Image
                      width={735}
                      height={490}
                      loading="lazy"
                      className=" w-full h-full object-cover aspect-square shadow-md"
                      src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                      alt="Transparencia y confianza fondo"
                      title="Transparencia y confianza fondo"
                    />
                    <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center text-[1rem] 2xl:text-[1.4rem]">
                      <p>
                        La transparencia es fundamental en nuestra relación con
                        los clientes. Nos comprometemos a ser claros y honestos
                        en cada paso del proceso, construyendo una base sólida
                        de confianza. Creemos que la confianza mutua es la clave
                        para lograr resultados excepcionales y relaciones
                        duraderas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                  Transparencia y confianza
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default BannerAbout;
