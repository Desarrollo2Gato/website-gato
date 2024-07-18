"use client";
import Link from "next/link";
import Navigation from "./components/navigation";
import Drawer from "./components/drawer";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [isDrawer, setIsDrawer] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="relative bg-white flex">
      <div
        className={`fixed top-0 left-0  ${
          isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
        } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>

      <div className="min-w-screen w-full flex flex-col  justify-between pt-[60px] lg:pl-[80px] lg:pt-0">
        <div className="max-w-[1440px] min-w-screen w-full min-h-screen mx-auto  flex flex-col md:flex-row justify-center items-center xl:  md:px-24  px-8  gap-4 lg:gap-8 xl:gap-16">
          <div className="w-full flex flex-col gap-4 md:gap-10 items-start ">
            <h2 className="text-[3rem] text-[#3D3D3D] font-bold">
              ¡Oops! Página no encontrada
            </h2>
            <p className="text-xl text-[#666666]">
              Lo sentimos, pero la página que estas buscando no existe.
            </p>
            <Link
              href={"/"}
              title="GATO"
              className="text-[#6D28D9] font-bold hover:scale-105 transition-all duration-300"
            >
              Volver al inicio
            </Link>
          </div>
          <div>
            <img
              className="h-full max-h-[550px] w-auto object-contain"
              src="/gato404.png"
              alt="Gato con un cartel de error"
              title="Gato 404"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
