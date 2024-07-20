"use client";
import Image from "next/image";
import React from "react";

const header = () => {
  return (
    <div className="w-full h-[400px] relative">
      <Image
        priority
        sizes="100vw"
        fill
        src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
        alt="contáctanos"
        className="h-full w-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#4E0FB0] bg-opacity-50 flex justify-center items-center ">
        <h3 className="text-3xl md:text-5xl max-w-[1440px] mx-auto font-black text-white text-center xl:  md:px-24  px-8">
          Lleva tu marca al siguiente nivel con nosotros{" "}
        </h3>
      </div>
    </div>
  );
};

export default header;
