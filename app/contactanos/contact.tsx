"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Form from "../components/form";
import Drawer from "../components/drawer";
import WhatsappContact from "../components/whatsapp-contact";
import Header from "./header";
import Ubication from "./ubication";
import Footer from "../components/footer";

function Contact() {
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
        className={`fixed top-0 left-0  ${isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"} h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
        <div className="w-full flex flex-col  justify-between pt-[60px] lg:pl-[80px] lg:pt-0">
          {/* <Header></Header> */}
          <Header></Header>
          <Form color="#4608AD"></Form>
          <Ubication></Ubication>
      <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Contact;
