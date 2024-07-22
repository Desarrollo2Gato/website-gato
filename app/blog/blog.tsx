"use client";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import Footer from "../components/footer";
import WhatsappContact from "../components/whatsapp-contact";
import { useEffect, useState } from "react";
import Banner from "./banner";
import Entradas from "./entradas";

const blog = () => {
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
      <WhatsappContact></WhatsappContact>

      <div
        className={`fixed top-0 left-0  ${
          isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
        } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <main className="min-w-screen flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0">
        <Banner></Banner>
        <div className="relative -top-[1%] sm:-top-[3%] md:-top-[4%] xl:-top-[5%]">
          <Entradas></Entradas>
        </div>

        <Footer></Footer>
      </main>
    </div>
  );
};

export default blog;
