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
import hexToRgba from "hex-to-rgba";
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

  const [activeSection, setActiveSection] = useState<string | null>(
    "#marketing-digital"
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) {
              setActiveSection(`#${sectionId}`);
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        });
      },
      { threshold: 0.4 }
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

  const handleSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", sectionId);
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <div className="relative  bg-white flex overflow-visible">
        <WhatsappContact></WhatsappContact>
        <div className="lg:hidden">
          <NavServices
            activeSection={activeSection}
            handleSection={handleSection}
          />
        </div>

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
        <div className=" w-full flex flex-col  justify-between pt-[60px] lg:pl-[80px] lg:pt-0">
          <BannerServices></BannerServices>
          <div className="hidden lg:flex sticky z-[1] top-0 justify-between flex-row gap-4 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-4 sm:px-12 lg:px-16 px-8 ">
            <div className="max-w-[1440px] mx-auto w-full flex flex-row gap-1 justify-between ">
              {/* mk */}
              <button
                style={{
                  backgroundColor:
                    activeSection === "#marketing-digital"
                      ? hexToRgba("#a52de6", "0.10")
                      : "white",
                }}
                className={`${
                  activeSection === "#marketing-digital" ? "shadow" : ""
                } rounded-md items-center px-2 py-2 flex-row flex gap-1 xl:gap-2 flex-1 justify-center group hover:shadow
                `}
                onClick={() => handleSection("#marketing-digital")}
              >
                <svg
                  className="h-5 w-5 xl:h-6 xl:w-6 object-contain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z"
                    fill={
                      activeSection === "#marketing-digital"
                        ? "#a52de6"
                        : "#888888"
                    }
                  />
                  <path
                    d="M16.6703 22.34C16.5403 22.6 16.2703 22.75 16.0003 22.75C15.8903 22.75 15.7703 22.72 15.6703 22.67L12.0003 20.84L8.33026 22.67C8.23026 22.72 8.11026 22.75 8.00026 22.75C7.73026 22.75 7.46026 22.6 7.33026 22.34C7.14026 21.96 7.29026 21.51 7.67026 21.33L11.2503 19.54V17H12.7503V19.54L16.3303 21.33C16.7103 21.51 16.8603 21.96 16.6703 22.34Z"
                    fill={
                      activeSection === "#marketing-digital"
                        ? "#a52de6"
                        : "#888888"
                    }
                  />
                  <path
                    d="M3 2V14.1C3 16 4 17 5.9 17H18.1C20 17 21 16 21 14.1V2H3ZM16.98 8.58L13.83 11.21C13.54 11.45 13.17 11.55 12.82 11.49C12.46 11.43 12.15 11.21 11.96 10.89L10.91 9.14L7.98 11.58C7.84 11.7 7.67 11.75 7.5 11.75C7.29 11.75 7.07 11.66 6.92 11.48C6.65 11.16 6.7 10.69 7.02 10.42L10.17 7.79C10.46 7.55 10.83 7.45 11.18 7.51C11.54 7.57 11.85 7.79 12.04 8.11L13.09 9.86L16.02 7.42C16.34 7.15 16.81 7.2 17.08 7.52C17.34 7.84 17.3 8.31 16.98 8.58Z"
                    fill={
                      activeSection === "#marketing-digital"
                        ? "#a52de6"
                        : "#888888"
                    }
                  />
                </svg>
                <span
                  className={`${
                    activeSection === "#marketing-digital"
                      ? "text-[#a52de6]"
                      : "text-[#888888]"
                  } text-xs xl:text-sm text-center font-medium transform transition-all duration-700`}
                >
                  Marketing Digital
                </span>
              </button>
              {/* dw */}
              <button
                style={{
                  backgroundColor:
                    activeSection === "#diseno-web"
                      ? hexToRgba("#0bc2e1", "0.10")
                      : "white",
                }}
                className={`${
                  activeSection === "#diseno-web" ? "shadow" : ""
                } rounded items-center px-2 py-1 flex-row flex gap-1 xl:gap-2 flex-1 justify-center group hover:shadow
                `}
                onClick={() => handleSection("#diseno-web")}
              >
                <svg
                  className="h-5 w-5 xl:h-6 xl:w-6 object-contain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.99 9.71C20.65 9.57 20.2 9.5 19.64 9.5H14.36C12.62 9.5 12 10.12 12 11.88V19.62C12 20.2 12.07 20.65 12.22 21C12.53 21.72 13.19 22 14.36 22H19.64C21.38 22 22 21.37 22 19.62V11.88C22 10.69 21.72 10.02 20.99 9.71ZM18 19.75H16C15.98 19.75 15.95 19.75 15.93 19.74C15.78 19.73 15.65 19.68 15.54 19.58C15.36 19.45 15.25 19.24 15.25 19C15.25 18.59 15.59 18.25 16 18.25H18C18.41 18.25 18.75 18.59 18.75 19C18.75 19.41 18.41 19.75 18 19.75Z"
                    fill={
                      activeSection === "#diseno-web" ? "#0bc2e1" : "#888888"
                    }
                  />
                  <path
                    d="M20.9898 6.19V7C20.9898 7.55 20.5398 8 19.9898 8H14.3598C11.7998 8 10.4998 9.31 10.4998 11.88V21C10.4998 21.55 10.0498 22 9.49977 22H7.54977C7.14977 22 6.82977 21.68 6.82977 21.29C6.82977 20.89 7.14977 20.58 7.54977 20.58H9.49977V16.75H5.99977C3.77977 16.64 2.00977 14.81 2.00977 12.56V6.19C2.00977 3.88 3.88977 2 6.20977 2H16.7998C19.1098 2 20.9898 3.88 20.9898 6.19Z"
                    fill={
                      activeSection === "#diseno-web" ? "#0bc2e1" : "#888888"
                    }
                  />
                </svg>
                <span
                  className={`${
                    activeSection === "#diseno-web"
                      ? "text-[#0bc2e1]"
                      : "text-[#888888]"
                  } text-xs xl:text-sm text-center font-medium transform transition-all duration-700`}
                >
                  Diseño Web
                </span>
              </button>
              {/* ds */}
              <button
                style={{
                  backgroundColor:
                    activeSection === "#desarrollo-software"
                      ? hexToRgba("#007cf8", "0.10")
                      : "white",
                }}
                className={`${
                  activeSection === "#desarrollo-software" ? "shadow" : ""
                } rounded items-center px-2 py-1 flex-row flex gap-1 xl:gap-2 flex-1 justify-center group hover:shadow
                `}
                onClick={() => handleSection("#desarrollo-software")}
              >
                <svg
                  className="h-5 w-5 xl:h-6 xl:w-6 object-contain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54ZM10.03 17.47C10.32 17.76 10.32 18.24 10.03 18.53C9.88 18.68 9.69 18.75 9.5 18.75C9.31 18.75 9.12 18.68 8.97 18.53L6.97 16.53C6.68 16.24 6.68 15.76 6.97 15.47L8.97 13.47C9.26 13.18 9.74 13.18 10.03 13.47C10.32 13.76 10.32 14.24 10.03 14.53L8.56 16L10.03 17.47ZM17.03 16.53L15.03 18.53C14.88 18.68 14.69 18.75 14.5 18.75C14.31 18.75 14.12 18.68 13.97 18.53C13.68 18.24 13.68 17.76 13.97 17.47L15.44 16L13.97 14.53C13.68 14.24 13.68 13.76 13.97 13.47C14.26 13.18 14.74 13.18 15.03 13.47L17.03 15.47C17.32 15.76 17.32 16.24 17.03 16.53Z"
                    fill={
                      activeSection === "#desarrollo-software"
                        ? "#007cf8"
                        : "#888888"
                    }
                  />
                </svg>
                <span
                  className={`${
                    activeSection === "#desarrollo-software"
                      ? "text-[#007cf8]"
                      : "text-[#888888]"
                  } text-xs xl:text-sm text-center font-medium transform transition-all duration-700`}
                >
                  Desarrollo de Software
                </span>
              </button>
              {/* branding */}
              <button
                style={{
                  backgroundColor:
                    activeSection === "#branding"
                      ? hexToRgba("#a52de6", "0.10")
                      : "white",
                }}
                className={`${
                  activeSection === "#branding" ? "shadow" : ""
                } rounded items-center px-2 py-1 flex-row flex gap-1 xl:gap-2 flex-1 justify-center group hover:shadow
                `}
                onClick={() => handleSection("#branding")}
              >
                <svg
                  className="h-5 w-5 xl:h-6 xl:w-6 object-contain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2502 18.4701L19.6002 18.8601C19.2302 18.9501 18.9402 19.2301 18.8602 19.6001L18.5102 21.0701C18.3202 21.8701 17.3002 22.1201 16.7702 21.4901L13.7802 18.0501C13.5402 17.7701 13.6702 17.3301 14.0302 17.2401C15.8002 16.8101 17.3902 15.8201 18.5602 14.4101C18.7502 14.1801 19.0902 14.1501 19.3002 14.3601L21.5202 16.5801C22.2802 17.3401 22.0102 18.2901 21.2502 18.4701Z"
                    fill={activeSection === "#branding" ? "#a52de6" : "#888888"}
                  />
                  <path
                    d="M2.69919 18.4701L4.34919 18.8601C4.71919 18.9501 5.00919 19.2301 5.08919 19.6001L5.43919 21.0701C5.62919 21.8701 6.64919 22.1201 7.17919 21.4901L10.1692 18.0501C10.4092 17.7701 10.2792 17.3301 9.91919 17.2401C8.14919 16.8101 6.55919 15.8201 5.38919 14.4101C5.19919 14.1801 4.85919 14.1501 4.64919 14.3601L2.42919 16.5801C1.66919 17.3401 1.93919 18.2901 2.69919 18.4701Z"
                    fill={activeSection === "#branding" ? "#a52de6" : "#888888"}
                  />
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 10.45 5.43 11.78 6.17 12.89C7.25 14.49 8.96 15.62 10.95 15.91C11.29 15.97 11.64 16 12 16C12.36 16 12.71 15.97 13.05 15.91C15.04 15.62 16.75 14.49 17.83 12.89C18.57 11.78 19 10.45 19 9C19 5.13 15.87 2 12 2ZM15.06 8.78L14.23 9.61C14.09 9.75 14.01 10.02 14.06 10.22L14.3 11.25C14.49 12.06 14.06 12.38 13.34 11.95L12.34 11.36C12.16 11.25 11.86 11.25 11.68 11.36L10.68 11.95C9.96 12.37 9.53 12.06 9.72 11.25L9.96 10.22C10 10.03 9.93 9.75 9.79 9.61L8.94 8.78C8.45 8.29 8.61 7.8 9.29 7.69L10.36 7.51C10.54 7.48 10.75 7.32 10.83 7.16L11.42 5.98C11.74 5.34 12.26 5.34 12.58 5.98L13.17 7.16C13.25 7.32 13.46 7.48 13.65 7.51L14.72 7.69C15.39 7.8 15.55 8.29 15.06 8.78Z"
                    fill={activeSection === "#branding" ? "#a52de6" : "#888888"}
                  />
                </svg>
                <span
                  className={`${
                    activeSection === "#branding"
                      ? "text-[#a52de6]"
                      : "text-[#888888]"
                  } text-xs xl:text-sm text-center font-medium transform transition-all duration-700`}
                >
                  Branding
                </span>
              </button>
              {/* mobile */}
              <button
                style={{
                  backgroundColor:
                    activeSection === "#desarrollo-movil"
                      ? hexToRgba("#007cf8", "0.10")
                      : "white",
                }}
                className={`${
                  activeSection === "#desarrollo-movil" ? "shadow" : ""
                } rounded items-center px-2 py-1 flex-row flex gap-1 xl:gap-2 flex-1 justify-center group hover:shadow
                `}
                onClick={() => handleSection("#desarrollo-movil")}
              >
                <svg
                  className="h-5 w-5 xl:h-6 xl:w-6 object-contain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.24 2H7.76C5 2 4 3 4 5.81V18.19C4 21 5 22 7.76 22H16.23C19 22 20 21 20 18.19V5.81C20 3 19 2 16.24 2ZM12 19.3C11.04 19.3 10.25 18.51 10.25 17.55C10.25 16.59 11.04 15.8 12 15.8C12.96 15.8 13.75 16.59 13.75 17.55C13.75 18.51 12.96 19.3 12 19.3ZM14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
                    fill={
                      activeSection === "#desarrollo-movil"
                        ? "#007cf8"
                        : "#888888"
                    }
                  />
                </svg>
                <span
                  className={`${
                    activeSection === "#desarrollo-movil"
                      ? "text-[#007cf8]"
                      : "text-[#888888]"
                  } text-xs xl:text-sm text-center font-medium transform transition-all duration-700`}
                >
                  Desarrollo Móvil
                </span>
              </button>
              {/* email mk */}
              <button
                style={{
                  backgroundColor:
                    activeSection === "#email-marketing"
                      ? hexToRgba("#a52de6", "0.10")
                      : "white",
                }}
                className={`${
                  activeSection === "#email-marketing" ? "shadow" : ""
                } rounded items-center px-2 py-1 flex-row flex gap-1 xl:gap-2 flex-1 justify-center group hover:shadow
              `}
                onClick={() => handleSection("#email-marketing")}
              >
                <svg
                  className="h-5 w-5 xl:h-6 xl:w-6 object-contain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6897 11.5308C18.1197 11.3808 17.4497 11.3008 16.6497 11.3008C15.5397 11.3008 15.1297 11.5708 14.5597 12.0008C14.5297 12.0208 14.4997 12.0508 14.4697 12.0808L13.5197 13.0908C12.7197 13.9308 11.2797 13.9408 10.4797 13.0808L9.52969 12.0808C9.49969 12.0508 9.46969 12.0208 9.43969 12.0008C8.86969 11.5708 8.45969 11.3008 7.34969 11.3008C6.54969 11.3008 5.87969 11.3808 5.30969 11.5308C2.92969 12.1708 2.92969 14.0608 2.92969 15.7208V16.6508C2.92969 19.1608 2.92969 22.0008 8.27969 22.0008H15.7197C19.2697 22.0008 21.0697 20.2008 21.0697 16.6508V15.7208C21.0697 14.0608 21.0697 12.1708 18.6897 11.5308ZM14.3297 18.4008H9.66969C9.28969 18.4008 8.97969 18.0908 8.97969 17.7008C8.97969 17.3108 9.28969 17.0008 9.66969 17.0008H14.3297C14.7097 17.0008 15.0197 17.3108 15.0197 17.7008C15.0197 18.0908 14.7097 18.4008 14.3297 18.4008Z"
                    fill={
                      activeSection === "#email-marketing"
                        ? "#a52de6"
                        : "#888888"
                    }
                  />
                  <path
                    d="M12.6684 4.3L13.3184 4.95C13.5784 5.21 14.0084 5.21 14.2684 4.95C14.5284 4.69 14.5284 4.26 14.2684 4L12.4684 2.2C12.4084 2.14 12.3284 2.09 12.2484 2.05C12.1684 2.02 12.0884 2 11.9984 2C11.9084 2 11.8284 2.02 11.7384 2.05C11.6584 2.08 11.5984 2.13 11.5384 2.18C11.5284 2.19 11.5284 2.19 11.5184 2.19L9.71844 4C9.45844 4.26 9.45844 4.69 9.71844 4.95C9.97844 5.21 10.4084 5.21 10.6684 4.95L11.3184 4.3V6H12.6684V4.3Z"
                    fill={
                      activeSection === "#email-marketing"
                        ? "#a52de6"
                        : "#888888"
                    }
                  />
                  <path
                    d="M19.2091 10.12C19.1691 10.1 19.1191 10.09 19.0791 10.08H19.0691C18.3591 9.89 17.5691 9.8 16.6491 9.8C15.1091 9.8 14.3791 10.25 13.7191 10.75C13.5791 10.85 13.4791 10.95 13.3791 11.05L12.4291 12.06C12.3291 12.16 12.1691 12.22 11.9991 12.22C11.9391 12.22 11.7191 12.21 11.5691 12.05L10.5891 11.02C10.4891 10.91 10.3691 10.82 10.3391 10.8C9.61906 10.25 8.88906 9.8 7.34906 9.8C6.42906 9.8 5.63906 9.89 4.91906 10.08C4.87906 10.09 4.82906 10.1 4.78906 10.12C4.79906 8.13 4.99906 6 9.20906 6H11.3291V9.08C11.3291 9.45 11.6291 9.75 11.9991 9.75C12.3691 9.75 12.6691 9.45 12.6691 9.08V6H14.7891C18.9991 6 19.1991 8.13 19.2091 10.12Z"
                    fill={
                      activeSection === "#email-marketing"
                        ? "#a52de6"
                        : "#888888"
                    }
                  />
                </svg>
                <span
                  className={`${
                    activeSection === "#email-marketing"
                      ? "text-[#a52de6]"
                      : "text-[#888888]"
                  } text-xs xl:text-sm text-center font-medium transform transition-all duration-700`}
                >
                  Email Marketing
                </span>
              </button>
            </div>
          </div>
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
