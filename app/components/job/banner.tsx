import React from "react";

const banner = () => {
  return (
    <div className="relative max-h-[800px] overflow-hidden h-full w-full bg-white">
      <div className="h-[1400px] aspect-square bg-blue-500 absolute right-0 top-0 rounded-[100%] -translate-y-2/3 translate-x-1/4 shadow-lg"></div>
      <img
        src="https://t-hub.mx/storage/blog/BJgPuaZEtc1OfU415JFbsd0b4nStv7oweNDABPUN.jpeg"
        alt="imagen"
        className="rounded-[100%] aspect-square object-cover h-auto w-[1500px] float-right -translate-y-1/4 translate-x-1/2 shadow-2xl"
      />
      <div className="p-8 md:p-16 2xl:px-32 mx-auto max-w-[1440px] absolute w-full h-full flex items-center justify-start">
        <div className="w-1/2">
          <h2 className=" drop-shadow-md lg:text-6xl text-4xl  font-semibold uppercase">
            Únete al equipo de <span className="text-blue-500">Software</span>
          </h2>
          <p className="text-[#444] mt-4 text-lg">
            Buscamos un Desarrollador de Software para diseñar, desarrollar y
            mantener soluciones innovadoras. Requisitos: experiencia en
            programación, conocimientos en bases de datos y habilidades de
            trabajo en equipo. Únete a nuestro equipo dinámico y aprovecha
            oportunidades de crecimiento profesional.
          </p>
          <button className="bg-blue-500 rounded-xl px-8 py-2 text-white font-medium text-xl mt-8 shadow-lg">
            Postular
          </button>
        </div>
      </div>
    </div>
  );
};

export default banner;
