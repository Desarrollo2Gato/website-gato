"use client";

import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import Items from "./items";
import BannerServices from "./banner";
import WhatsappContact from "../components/whatsapp-contact";
import CatFloat from "../components/catFloat";
import Testimonios from "./testimonios";
import "@/app/components/slider3items.css";
function Services() {
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
        <div className="w-full flex flex-col  justify-between pt-[60px] lg:pl-[80px] lg:pt-0">
          <BannerServices></BannerServices>
          <Items></Items>
          <Testimonios/>
        </div>
      </div>
    </>
  );
}

export default Services;
