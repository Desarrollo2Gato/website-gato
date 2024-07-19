"use client";

import { useEffect, useState } from "react";
import Banner from "./banner";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import "react-awesome-slider/dist/styles.css";
import Collage from "./collage";
import Detail from "./detail";
import Footer from "../components/footer";
import WhatsappContact from "../components/whatsapp-contact";
import Form from "../components/form";
import GridClients from "../components/clientes/grid-clients";

function Home() {
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
    <div className="relative bg-white flex w-full">
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
        <header>
          <h1 className="sr-only">Gato: Marketing y Desarrollo de Software</h1>
        </header>
        <Banner></Banner>
        <Collage></Collage>
        <Detail></Detail>
        <GridClients></GridClients>
        <Form color="#6D28D9"></Form>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Home;
