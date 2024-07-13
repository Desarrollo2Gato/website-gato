"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the array of slides with numbers
const slides = [
  {
    image: "https://1000marcas.net/wp-content/uploads/2024/02/Adidas-Logo.png",
  },
  {
    image:
      "https://seeklogo.com/images/B/bcp-bolivia-logo-87EC694136-seeklogo.com.png",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Interbank_logo.svg/2560px-Interbank_logo.svg.png",
  },
  {
    image:
      "https://1000marcas.net/wp-content/uploads/2021/09/Elektra-Logo-2008.png",
  },
];

const Slider = ({ direction }: { direction: string }) => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-md   bg-white xl:px-48 md:px-24 ">
      <div className="flex justify-between  px-8 items-center">
        <h2 className="xl:text-3xl md:text-2xl text-2xl">Nuestros clientes</h2>
        {/* <div className="flex gap-4">
          <span className="bg-[#0A86ED] rounded-full p-2 w-10 h-10 text-white text-center">
            {"<"}
          </span>
          <span className="border border-[#0A86ED] rounded-full p-2  w-10 h-10 text-[#0A86ED] text-center">
            {">"}
          </span>
        </div> */}
      </div>
      <motion.div
        className=" flex gap-32 items-center py-2 mt-8"
        animate={{
          x: direction === "right" ? ["-100%", "0%"] : ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {/* {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${130 / slides.length}%` }}
          >
            <div className="flex  items-center justify-center h-full rounded-md overflow-hidden ">
              <img
              loading="lazy"
                className="shadow-xl hover:scale-110 transition-all"
                src={slide.image}
                alt=""
              />
            </div>
          </div>
        ))} */}

        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${130 / slides.length}%` }}
          >
            <div className="flex  items-center justify-center w-64 rounded-md overflow-hidden ">
              <img
                loading="lazy"
                className=" h-14 md:h-24 w-auto  transition-all"
                src={slide.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
