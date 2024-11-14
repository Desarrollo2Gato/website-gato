import Image from "next/image";

const Resutls = () => {
  return (
    <section id="resultados" className="bg-zinc-50 text-stone-700">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 pt-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6">
            Resultados que te <span className="text-[#9353B6]">Impulsan</span>
          </h2>
          <p className="text-stone-600 md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            Transformamos tu negocio con estrategias personalizadas y tecnología
            de vanguardia.
          </p>
        </div>
        <div className="relative overflow-hidden ">
          <div className="flex flex-col sm:flex-row sm:gap-8 relative justify-center  lg:items-end items-center z-[1]">
            <div className="flex relative gap-6 lg:gap-24 flex-col justify-between pb-4">
              <div className="w-full flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center transform lg:translate-x-1/4">
                <span className="font-medium lg:text-[1.3rem] text-stone-600 lg:text-right text-center">
                  Optimización de procesos
                </span>
                <Image
                  className="drop-shadow-lg rounded-md max-h-[100px] md:max-h-[150px] object-contain aspect-auto w-full h-full"
                  src={"/img/dashboard_home.png"}
                  alt="Interface de un dashboard"
                  height={150}
                  width={204}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center">
                <span className="font-medium lg:text-[1.3rem] text-stone-600 lg:text-right text-center">
                  Aplicaciones <br className="hidden lg:block" /> intuitivas
                </span>
                <Image
                  className="drop-shadow-lg rounded-md max-h-[100px] md:max-h-[150px] object-contain"
                  src={"/img/aplicaciones_home.png"}
                  alt="Interface de una aplicación de RR.HH."
                  height={167}
                  width={159}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center transform lg:translate-x-[10%]">
                <span className="font-medium lg:text-[1.3rem] text-stone-600 lg:text-right text-center">
                  Identidad de marca
                </span>
                <Image
                  className="drop-shadow-lg rounded-md max-h-[100px] md:max-h-[150px] object-contain"
                  src={"/img/identidad_home.png"}
                  alt="Polo, bolsa, cartera y taza con el logo de una empresa"
                  height={134}
                  width={140}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
            <div className="max-w-[400px]  max-h-[500px] hidden lg:flex h-auto  ">
              <Image
                className="object-contain aspect-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-lg h-full w-auto "
                src={"/img/cats/gato_maletin_marron_foco.png"}
                alt="Chico con una laptop"
                height={294}
                width={397}
              />
            </div>
            <div className="flex relative gap-6 lg:gap-24 flex-col justify-between pb-4">
              <div className="flex flex-col lg:flex-row-reverse  gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center transform lg:-translate-x-1/4">
                <span className="font-medium lg:text-[1.3rem] text-stone-600 lg:text-left text-center">
                  Estrategias Personalizadas
                </span>
                <Image
                  className="drop-shadow-lg rounded-md max-h-[100px] md:max-h-[150px] object-contain"
                  src={"/img/estrategias_home.png"}
                  alt="Calendario con estrategias de marketing"
                  height={149}
                  width={218}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center flex-col lg:flex-row-reverse ">
                <span className="font-medium lg:text-[1.3rem] text-stone-600 lg:text-left text-center">
                  Diseño web <br className="hidden lg:block" /> atractivo
                </span>
                <Image
                  className="drop-shadow-lg rounded-md max-h-[100px] md:max-h-[150px] object-contain"
                  src={"/img/diseno_web_home.png"}
                  alt="Interface de una página web"
                  height={173}
                  width={118}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex gap-3 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center flex-col lg:flex-row-reverse  transform lg:-lg:translate-x-[10%]">
                <span className="font-medium lg:text-[1.3rem] text-stone-600 lg:text-left text-center">
                  Gestión de redes sociales
                </span>
                <Image
                  className="drop-shadow-lg rounded-md max-h-[100px] md:max-h-[150px] object-contain"
                  src={"/img/post_home.png"}
                  alt="Post de redes sociales"
                  height={159}
                  width={164}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full md:flex justify-center items-center hidden ">
            <Image
              className="opacity-10 mx-auto w-[80%] object-contain  rounded-md"
              src={"/img/upright_home.png"}
              alt="Flecha hacia la derecha y arriba, simbolizando crecimiento"
              height={430}
              width={911}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resutls;
