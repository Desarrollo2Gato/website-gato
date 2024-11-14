"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import Section1 from "./section-1";
import Footer from "../components/footer";
import BannerAbout from "./banner";
import WhatsappContact from "../components/whatsapp-contact";
import Fundamentals from "./fundamentals";
import Team from "./team";
import GridClients from "../components/clientes/grid-clients";
import Form from "../components/form";

function About() {
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
        <header>
          <h1 className="sr-only">¿Quiénes Somos?</h1>
        </header>
          <BannerAbout></BannerAbout>
          <Fundamentals></Fundamentals>
          <Section1></Section1>
          <Team></Team>
          <GridClients></GridClients>
          <Form color="#9353B6"></Form>
          <Footer></Footer>
        </div>

        {/* //todo-> section loadin -----------------------------------------------*/}
        {/* {loading ? (
          <div className={`fixed h-screen  z-30 bg-black   `}></div>
        ) : (
          <div
            className={`fixed h-screen  bg-black   animate-fade-left animate-duration-[800ms] animate-ease-linear animate-reverse`}
          ></div>
        )} */}
        {/* //todo-> section loadin -----------------------------------------------*/}
      </div>
    </>
  );
}

export default About;
