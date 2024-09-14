"use client";

import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import Items from "./items";
import BannerServices from "./banner";
import WhatsappContact from "../components/whatsapp-contact";
import Testimonios from "./testimonios";
import "@/app/components/slider3items.css";
import Footer from "../components/footer";
import Form from "../components/form";
import NavServices from "../components/service/navServices";
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
  const [activeSection, setActiveSection] = useState<string | null>("#marketing-digital");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.2 }
    ); 

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  useEffect(() => {
    changeLoading();
  }, []);
  const handleSection = (sectionId: string): void => {
    const element = document.querySelector(`${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <>
      <div className="relative bg-white flex">
        <WhatsappContact></WhatsappContact>
        <NavServices
          activeSection={activeSection}
          handleSection={handleSection}
        />

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
          <Testimonios />
          <Form color="#6D28D9" />
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Services;
