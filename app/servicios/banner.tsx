"use client";

import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function BannerServices() {
  return (
    <section className="relative w-full max-h-[400px] lg:max-h-[800px] lg:h-full overflow-hidden">
      <img
      className="w-full h-full object-cover"
        src="https://i.pinimg.com/originals/7f/24/50/7f2450777ba0ef6f966e94efc4ff49cc.jpg"
        alt="Servicios GATO"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#0C0C0C] bg-opacity-70">
        {/* line 1 */}
        <div className="absolute w-16 lg:w-28 h-[1000px] -translate-y-[5%]  lg:translate-x-0 -left-14 lg:left-0 rotate-[10deg] bg-[#6D28D9] bg-opacity-40"></div>
        {/* line2 */}
        <div className="absolute w-28 h-[400px] -translate-y-1/2  right-0 -rotate-45 bg-[#6D28D9] bg-opacity-40"></div>
        {/* content */}
        <div className="absolute max-w-[1920px] w-full h-full flex flex-col mx-auto xl:px-32 lg:px:16 px-8 py-16 items-center justify-center text-center text-white uppercase">
        <h2 className="text-[#C6C6C6]  md:text-2xl mb-4 md:mb-8 underline">Soluciones digitales de alta calidad.</h2>
        <h1 className="text-lg md:text-3xl lg:text-5xl font-medium"> Descubre nuestros servicios y comienza tu transformación hoy mismo</h1>
        <div className="absolute w-full bottom-4 ">
          <a
            href="#detail"
            className="hidden scrollDown opacity-100 relative  w-[55px] h-[80px] xl:w-[85px] xl:h-[110px] md:flex justify-center  mx-auto "
          >
            <span className="bg-white relative"></span>
          </a>
        </div>
        </div>
      </div>
      
    </section>
  );
}
export default BannerServices;
