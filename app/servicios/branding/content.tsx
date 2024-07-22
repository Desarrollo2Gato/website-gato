"use client";

import Navigation from "@/app/components/navigation";
import Drawer from "@/app/components/drawer";
import { useEffect, useState } from "react";
import Branding from "./branding";
import WhatsappContact from "@/app/components/whatsapp-contact";
import Form from "@/app/components/form";
import Footer from "@/app/components/footer";

function Content() {
  const [isDrawer, setIsDrawer] = useState(false);

  const [loading, setLoading] = useState(true);

  function changeLoading() {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
  }

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

  useEffect(() => {
    changeLoading();
  }, []);

  return (
    <>
      <div className="relative bg-white flex">
        <WhatsappContact></WhatsappContact>
        <div
          className={`fixed top-0 left-0  ${
            isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
          } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
        >
          <Navigation
            isDrawer={isDrawer}
            setIsDrawer={setIsDrawer}
          ></Navigation>
          {isDrawer && <Drawer></Drawer>}
        </div>
        <div className="min-w-screen w-full flex flex-col  justify-between pt-[60px] lg:pl-[80px] lg:pt-0">
          <Branding></Branding>
          <Form color="#A52DE6"></Form>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Content;
