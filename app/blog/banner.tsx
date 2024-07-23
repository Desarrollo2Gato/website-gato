import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";

const banner = () => {
  const labels = [
    {
      color: "#9747FF",
      name: "Marketing Digital",
      path: "marketing-digital",
    },
    {
      color: "#0BC2E1",
      name: "Diseño Web",
      path: "diseno-web",
    },
    {
      color: "#007CF8",
      name: "Desarrollo Software",
      path: "desarrollo-software",
    },
    {
      color: "#A42BE6",
      name: "Branding",
      path: "branding",
    },
    {
      color: "#0D5FB2",
      name: "Desarrollo Móvil",
      path: "desarrollo-movil",
    },
  ];
  return (
    <div className="w-full relative">
      <div className="w-full h-[calc(100vh-50px)] md:h-[600px] xl:h-[800px] relative  ">
        <Image
          width={735}
          height={490}
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
          alt="banner blog"
          title="Banner principal de Blog"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1E004D] bg-opacity-50 flex justify-start items-center">
          <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 pb-8  lg:pb-16 flex flex-col gap-2 md:gap-4 lg:gap-8 ">
            <h1 className=" w-full capitalize text-white text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold drop-shadow-xl">
              <Typewriter
                words={[
                  "Descubre las Últimas Tendencias y Mantente a la Vanguardia",
                ]}
                typeSpeed={60}
              />
            </h1>
            <div className="flex flex-wrap mb-2 gap-2 ">
              {labels.map((label, index) => (
                <Link
                  key={index}
                  href="/blog/[slug]/"
                  as={`/blog/${label.path}`}
                  title={label.name}
                  rel="tag"
                  style={{ backgroundColor: label.color }}
                  className="px-2 md:px-4 py-1 text-sm md:text-base text-white font-medium shadow-md hover:scale-105 transition-all duration-300"
                >
                  {label.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
