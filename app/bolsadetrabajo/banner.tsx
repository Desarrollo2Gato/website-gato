import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full max-h-[800px]">
      <img
        src="https://i.pinimg.com/originals/7f/24/50/7f2450777ba0ef6f966e94efc4ff49cc.jpg"
        alt="Trabajadores de Agencia Gato con expresiones divertidas"
        title="Trabajadores de Agencia Gato"
        className="w-full h-full object-cover aspect-video"
        loading="lazy"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-violet-700 flex items-end">
        <div className="max-w-[1920px] mx-auto xl:px-32 lg:px:16 p-4 flex gap-4 md:gap-8 justify-between items-center">
          <p className="text-white text-sm md:text-2xl drop-shadow-lg md:text-center items-center">
            Cambiamos el mundo con ideas innovadoras y empatía. Creemos que
            todas las pequeñas acciones apuntan a grandes resultados{" "}
          </p>
          <img
            src="https://i.pinimg.com/originals/32/54/3a/32543a10e6d238eb84cadc78b57b3dd9.png"
            alt="Logo GATO"
            title="Logo de GATO"
            className="h-16 md:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
