"use client";

import Drawer from "@/app/components/drawer";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import { useEffect, useState } from "react";
import BannerClient from "./banner";
import WhatsappContact from "@/app/components/whatsapp-contact";

function Detail() {
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
        className={`fixed  ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <div className="flex flex-col w-full md:pl-[80px] ">
        <BannerClient></BannerClient>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Detail;
