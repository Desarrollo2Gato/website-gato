"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import WhatsappContact from "../components/whatsapp-contact";
import Drawer from "../components/drawer";
import CollageClients from "./collage";
import Footer from "../components/footer";

function Clients() {
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
        <CollageClients></CollageClients>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Clients;
