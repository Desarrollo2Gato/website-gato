"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const banner = ({ name }: { name: string }) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-screen md:h-[600px] relative  ">
        <Image
          width={735}
          height={490}
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
          alt={`Banner de  ${
                      name === "diseno-web"
                        ? "Diseño Web"
                        : name.replace(/-/g, " ")
                    }`}
          title=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1E004D] bg-opacity-50 flex justify-start items-center">
          <RevealWrapper origin="left" duration={1500} className={`w-full`}>
            <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 pb-8 lg:pb-16 flex flex-col gap-1 md:gap-4 lg:gap-4 ">
              <h1 className="capitalize text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-xl">
                <Typewriter
                  words={[
                    `Explora la sección de ${
                      name === "diseno-web"
                        ? "Diseño Web"
                        : name.replace(/-/g, " ")
                    }`,
                  ]}
                  typeSpeed={60}
                />
              </h1>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default banner;
