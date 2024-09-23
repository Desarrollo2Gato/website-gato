"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sizing = {
  title: "xl:text-3xl md:text-2xl text-2xl uppercase text-[#3D3D3D]",
  description: "xl:text-2xl md:text-xl text-xl",
};

function Detail() {
  const [selected, setSelected] = useState<any>(1);

  const [isEnter, setIsEnter] = useState(false);

  function handleEnter() {
    setIsEnter(true);
  }

  function handleLeave() {
    setIsEnter(false);
  }

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 flex pb-16">
        <div className="flex flex-col md:flex-row w-full justify-between gap-6 md:gap-8 xl:gap-24">
          <RevealWrapper duration={1500} origin="left">
            <div className=" flex justify-center md:justify-start md:flex-col gap-2 md:gap-4 ">
              {/* mk */}
              <div
                role="button"
                onClick={() => setSelected(1)}
                className={`w-[44px] h-[44px] p-2 md:w-auto md:h-auto md:p-3 rounded-md  ${
                  selected === 1
                    ? "shadow-lg "
                    : "hover:shadow-lg transition-all ease-in-out duration-300"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full md:w-[32px] md:h-[32px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3337 3.6665H2.66699C2.12033 3.6665 1.66699 3.21317 1.66699 2.6665C1.66699 2.11984 2.12033 1.6665 2.66699 1.6665H29.3337C29.8803 1.6665 30.3337 2.11984 30.3337 2.6665C30.3337 3.21317 29.8803 3.6665 29.3337 3.6665Z"
                    fill={`${selected === 1 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M22.227 29.7865C22.0537 30.1332 21.6937 30.3332 21.3337 30.3332C21.187 30.3332 21.027 30.2932 20.8937 30.2265L16.0003 27.7865L11.107 30.2265C10.9737 30.2932 10.8137 30.3332 10.667 30.3332C10.307 30.3332 9.94701 30.1332 9.77368 29.7865C9.52034 29.2798 9.72034 28.6798 10.227 28.4398L15.0003 26.0532V22.6665H17.0003V26.0532L21.7737 28.4398C22.2803 28.6798 22.4803 29.2798 22.227 29.7865Z"
                    fill={`${selected === 1 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M4 2.6665V18.7998C4 21.3332 5.33333 22.6665 7.86667 22.6665H24.1333C26.6667 22.6665 28 21.3332 28 18.7998V2.6665H4ZM22.64 11.4398L18.44 14.9465C18.0533 15.2665 17.56 15.3998 17.0933 15.3198C16.6133 15.2398 16.2 14.9465 15.9467 14.5198L14.5467 12.1865L10.64 15.4398C10.4533 15.5998 10.2267 15.6665 10 15.6665C9.72 15.6665 9.42667 15.5465 9.22667 15.3065C8.86667 14.8798 8.93333 14.2532 9.36 13.8932L13.56 10.3865C13.9467 10.0665 14.44 9.93317 14.9067 10.0132C15.3867 10.0932 15.8 10.3865 16.0533 10.8132L17.4533 13.1465L21.36 9.89317C21.7867 9.53317 22.4133 9.59984 22.7733 10.0265C23.12 10.4532 23.0667 11.0798 22.64 11.4398Z"
                    fill={`${selected === 1 ? "#A52DE6" : "#7A7678"}`}
                  />
                </svg>
              </div>
              {/* disenio web */}
              <div
                role="button"
                onClick={() => setSelected(2)}
                className={`w-[44px] h-[44px] p-2 md:w-auto md:h-auto md:p-3 rounded-md  ${
                  selected === 2
                    ? "shadow-lg"
                    : "hover:shadow-lg transition-all ease-in-out duration-300"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9867 12.948C27.5333 12.7613 26.9333 12.668 26.1867 12.668H19.1467C16.8267 12.668 16 13.4946 16 15.8413V26.1613C16 26.9346 16.0933 27.5346 16.2933 28.0013C16.7067 28.9613 17.5867 29.3346 19.1467 29.3346H26.1867C28.5067 29.3346 29.3333 28.4946 29.3333 26.1613V15.8413C29.3333 14.2546 28.96 13.3613 27.9867 12.948ZM24 26.3346H21.3333C21.3067 26.3346 21.2667 26.3346 21.24 26.3213C21.04 26.308 20.8667 26.2413 20.72 26.108C20.48 25.9346 20.3333 25.6546 20.3333 25.3346C20.3333 24.788 20.7867 24.3346 21.3333 24.3346H24C24.5467 24.3346 25 24.788 25 25.3346C25 25.8813 24.5467 26.3346 24 26.3346Z"
                    fill={`${selected === 2 ? "#0BC2E1" : "#7A7678"}`}
                  />
                  <path
                    d="M27.9864 8.25464V9.33464C27.9864 10.068 27.3864 10.668 26.653 10.668H19.1464C15.733 10.668 13.9997 12.4146 13.9997 15.8413V28.0013C13.9997 28.7346 13.3997 29.3346 12.6664 29.3346H10.0664C9.53302 29.3346 9.10635 28.908 9.10635 28.388C9.10635 27.8546 9.53302 27.4413 10.0664 27.4413H12.6664V22.3346H7.99969C5.03969 22.188 2.67969 19.748 2.67969 16.748V8.25464C2.67969 5.17464 5.18635 2.66797 8.27969 2.66797H22.3997C25.4797 2.66797 27.9864 5.17464 27.9864 8.25464Z"
                    fill={`${selected === 2 ? "#0BC2E1" : "#7A7678"}`}
                  />
                </svg>
              </div>
              {/*  desarrollo sof*/}
              <div
                role="button"
                onClick={() => setSelected(3)}
                className={`w-[44px] h-[44px] p-2 md:w-auto md:h-auto md:p-3 rounded-md  ${
                  selected === 3
                    ? "shadow-lg "
                    : "hover:shadow-lg transition-all ease-in-out duration-300"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full md:w-[32px] md:h-[32px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.0533 8.71984L21.96 4.6265C20.7067 3.37317 19.0133 2.6665 17.24 2.6665H10.6667C6.66667 2.6665 4 5.33317 4 9.33317V22.6665C4 26.6665 6.66667 29.3332 10.6667 29.3332H21.3333C25.3333 29.3332 28 26.6665 28 22.6665V13.4265C28 11.6532 27.2933 9.95984 26.0533 8.71984ZM13.3733 23.2932C13.76 23.6798 13.76 24.3198 13.3733 24.7065C13.1733 24.9065 12.92 24.9998 12.6667 24.9998C12.4133 24.9998 12.16 24.9065 11.96 24.7065L9.29333 22.0398C8.90667 21.6532 8.90667 21.0132 9.29333 20.6265L11.96 17.9598C12.3467 17.5732 12.9867 17.5732 13.3733 17.9598C13.76 18.3465 13.76 18.9865 13.3733 19.3732L11.4133 21.3332L13.3733 23.2932ZM22.7067 22.0398L20.04 24.7065C19.84 24.9065 19.5867 24.9998 19.3333 24.9998C19.08 24.9998 18.8267 24.9065 18.6267 24.7065C18.24 24.3198 18.24 23.6798 18.6267 23.2932L20.5867 21.3332L18.6267 19.3732C18.24 18.9865 18.24 18.3465 18.6267 17.9598C19.0133 17.5732 19.6533 17.5732 20.04 17.9598L22.7067 20.6265C23.0933 21.0132 23.0933 21.6532 22.7067 22.0398Z"
                    fill={`${selected === 3 ? "#007CF8" : "#7A7678"}`}
                  />
                </svg>
              </div>
              {/* branding */}
              <div
                role="button"
                onClick={() => setSelected(5)}
                className={`w-[44px] h-[44px] p-2 md:w-auto md:h-auto md:p-3 rounded-md  ${
                  selected === 5
                    ? "shadow-lg "
                    : "hover:shadow-lg transition-all ease-in-out duration-300"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3337 24.6255L26.1337 25.1455C25.6403 25.2655 25.2537 25.6388 25.147 26.1322L24.6803 28.0922C24.427 29.1588 23.067 29.4922 22.3603 28.6522L18.3737 24.0655C18.0537 23.6922 18.227 23.1055 18.707 22.9855C21.067 22.4122 23.187 21.0922 24.747 19.2122C25.0003 18.9055 25.4537 18.8655 25.7337 19.1455L28.6937 22.1055C29.707 23.1188 29.347 24.3855 28.3337 24.6255Z"
                    fill={`${selected === 5 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M3.59924 24.6255L5.79924 25.1455C6.29257 25.2655 6.67924 25.6388 6.78591 26.1322L7.25257 28.0922C7.50591 29.1588 8.86591 29.4922 9.57257 28.6522L13.5593 24.0655C13.8793 23.6922 13.7059 23.1055 13.2259 22.9855C10.8659 22.4122 8.74591 21.0922 7.18591 19.2122C6.93257 18.9055 6.47924 18.8655 6.19924 19.1455L3.23924 22.1055C2.22591 23.1188 2.58591 24.3855 3.59924 24.6255Z"
                    fill={`${selected === 5 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M16.0003 2.66797C10.8403 2.66797 6.66699 6.8413 6.66699 12.0013C6.66699 13.9346 7.24033 15.708 8.22699 17.188C9.66699 19.3213 11.947 20.828 14.6003 21.2146C15.0537 21.2946 15.5203 21.3346 16.0003 21.3346C16.4803 21.3346 16.947 21.2946 17.4003 21.2146C20.0537 20.828 22.3337 19.3213 23.7737 17.188C24.7603 15.708 25.3337 13.9346 25.3337 12.0013C25.3337 6.8413 21.1603 2.66797 16.0003 2.66797ZM20.0803 11.708L18.9737 12.8146C18.787 13.0013 18.6803 13.3613 18.747 13.628L19.067 15.0013C19.3203 16.0813 18.747 16.508 17.787 15.9346L16.4537 15.148C16.2137 15.0013 15.8137 15.0013 15.5737 15.148L14.2403 15.9346C13.2803 16.4946 12.707 16.0813 12.9603 15.0013L13.2803 13.628C13.3337 13.3746 13.2403 13.0013 13.0537 12.8146L11.9203 11.708C11.267 11.0546 11.4803 10.4013 12.387 10.2546L13.8137 10.0146C14.0537 9.97464 14.3337 9.7613 14.4403 9.54797L15.227 7.97464C15.6537 7.1213 16.347 7.1213 16.7737 7.97464L17.5603 9.54797C17.667 9.7613 17.947 9.97464 18.2003 10.0146L19.627 10.2546C20.5203 10.4013 20.7337 11.0546 20.0803 11.708Z"
                    fill={`${selected === 5 ? "#A52DE6" : "#7A7678"}`}
                  />
                </svg>
              </div>
              {/* desarrollo movil */}
              <div
                role="button"
                onClick={() => setSelected(4)}
                className={`w-[44px] h-[44px] p-2 md:w-auto md:h-auto md:p-3 rounded-md  ${
                  selected === 4
                    ? "shadow-lg "
                    : "hover:shadow-lg transition-all ease-in-out duration-300"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.653 2.66797H10.3463C6.66634 2.66797 5.33301 4.0013 5.33301 7.74797V24.2546C5.33301 28.0013 6.66634 29.3346 10.3463 29.3346H21.6397C25.333 29.3346 26.6663 28.0013 26.6663 24.2546V7.74797C26.6663 4.0013 25.333 2.66797 21.653 2.66797ZM15.9997 25.7346C14.7197 25.7346 13.6663 24.6813 13.6663 23.4013C13.6663 22.1213 14.7197 21.068 15.9997 21.068C17.2797 21.068 18.333 22.1213 18.333 23.4013C18.333 24.6813 17.2797 25.7346 15.9997 25.7346ZM18.6663 8.33464H13.333C12.7863 8.33464 12.333 7.8813 12.333 7.33464C12.333 6.78797 12.7863 6.33464 13.333 6.33464H18.6663C19.213 6.33464 19.6663 6.78797 19.6663 7.33464C19.6663 7.8813 19.213 8.33464 18.6663 8.33464Z"
                    fill={`${selected === 4 ? "#007CF8" : "#7A7678"}`}
                  />
                </svg>
              </div>
              {/* email marketing */}
              <div
                role="button"
                onClick={() => setSelected(6)}
                className={`w-[44px] h-[44px] p-2 md:w-auto md:h-auto md:p-3 rounded-md  ${
                  selected === 6
                    ? "shadow-lg "
                    : "hover:shadow-lg transition-all ease-in-out duration-300"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9196 15.3731C24.1596 15.1731 23.2663 15.0664 22.1996 15.0664C20.7196 15.0664 20.1729 15.4264 19.4129 15.9997C19.3729 16.0264 19.3329 16.0664 19.2929 16.1064L18.0263 17.4531C16.9596 18.5731 15.0396 18.5864 13.9729 17.4397L12.7063 16.1064C12.6663 16.0664 12.6262 16.0264 12.5862 15.9997C11.8262 15.4264 11.2796 15.0664 9.79958 15.0664C8.73292 15.0664 7.83958 15.1731 7.07958 15.3731C3.90625 16.2264 3.90625 18.7464 3.90625 20.9597V22.1997C3.90625 25.5464 3.90625 29.3331 11.0396 29.3331H20.9596C25.6929 29.3331 28.0929 26.9331 28.0929 22.1997V20.9597C28.0929 18.7464 28.0929 16.2264 24.9196 15.3731ZM19.1063 24.5331H12.8929C12.3863 24.5331 11.9729 24.1197 11.9729 23.5997C11.9729 23.0797 12.3863 22.6664 12.8929 22.6664H19.1063C19.6129 22.6664 20.0263 23.0797 20.0263 23.5997C20.0263 24.1197 19.6129 24.5331 19.1063 24.5331Z"
                    fill={`${selected === 6 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M16.8915 5.73464L17.7582 6.6013C18.1049 6.94797 18.6782 6.94797 19.0249 6.6013C19.3715 6.25464 19.3715 5.6813 19.0249 5.33464L16.6249 2.93464C16.5449 2.85464 16.4382 2.78797 16.3315 2.73464C16.2249 2.69464 16.1182 2.66797 15.9982 2.66797C15.8782 2.66797 15.7715 2.69464 15.6515 2.73464C15.5449 2.77464 15.4649 2.8413 15.3849 2.90797C15.3715 2.9213 15.3715 2.9213 15.3582 2.9213L12.9582 5.33464C12.6116 5.6813 12.6116 6.25464 12.9582 6.6013C13.3049 6.94797 13.8782 6.94797 14.2249 6.6013L15.0915 5.73464V8.0013H16.8915V5.73464Z"
                    fill={`${selected === 6 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M25.6125 13.4933C25.5591 13.4667 25.4925 13.4533 25.4391 13.44H25.4258C24.4791 13.1867 23.4258 13.0667 22.1991 13.0667C20.1458 13.0667 19.1725 13.6667 18.2925 14.3333C18.1058 14.4667 17.9725 14.6 17.8391 14.7333L16.5725 16.08C16.4391 16.2133 16.2258 16.2933 15.9991 16.2933C15.9191 16.2933 15.6258 16.28 15.4258 16.0667L14.1191 14.6933C13.9858 14.5467 13.8258 14.4267 13.7858 14.4C12.8257 13.6667 11.8524 13.0667 9.79908 13.0667C8.57241 13.0667 7.51908 13.1867 6.55908 13.44C6.50574 13.4533 6.43908 13.4667 6.38574 13.4933C6.39908 10.84 6.66574 8 12.2791 8H15.1058V12.1067C15.1058 12.6 15.5058 13 15.9991 13C16.4925 13 16.8925 12.6 16.8925 12.1067V8H19.7191C25.3325 8 25.5991 10.84 25.6125 13.4933Z"
                    fill={`${selected === 6 ? "#A52DE6" : "#7A7678"}`}
                  />
                </svg>
              </div>
            </div>
          </RevealWrapper>

          {selected === 1 && (
            <Component1
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 2 && (
            <Component2
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 3 && (
            <Component3
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 4 && (
            <Component4
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}

          {selected === 5 && (
            <Component5
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 6 && (
            <Component6
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Component1({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className="flex flex-col gap-4 ">
        <h2 className={`${sizing.title}`} title="GATO - Marketing Digital">
          Marketing Digital
        </h2>
        <div className="flex flex-col gap-4">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Nuestros servicios de Marketing Digital, están orientados en
            transformar tus redes sociales en canales de ventas, según los
            objetivos de tu negocio.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-[#A52DE6] rounded-full w-12 h-full absolute transition-all ${
                isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
              }`}
            ></div>
            <Link
              href={"/servicios/marketing-digital"}
              rel="bookmark"
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#A52DE6]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          width={735}
          height={490}
          loading="lazy"
          className="rounded-md w-full h-auto mx-auto lg:max-w-[400px] md:max-w-[300px] md:w-auto md:h-full object-cover aspect-video shadow-lg"
          src="https://i.pinimg.com/736x/05/f6/a7/05f6a750173d902cdb9ecbf7783c9fd5.jpg"
          alt="GATO - Marketing Digital"
          title="GATO - Marketing Digital"
        />
      </div>
    </div>
  );
}

function Component2({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`} title="GATO - Diseño Web">
          Diseño Web
        </h2>
        <div className=" flex flex-col gap-4">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Nuestros servicios de Diseño Web crean sitios web personalizados y
            optimizados que reflejan la identidad de tu marca. Nos enfocamos en
            desarrollar sitios responsivos, rápidos y seguros que mejoran la
            experiencia del usuario y ayudan a alcanzar tus objetivos
            comerciales.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-[#0BC2E1] rounded-full w-12 h-full absolute transition-all ${
                isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
              }`}
            ></div>
            <Link
              href={"/servicios/diseno-web"}
              rel="bookmark"
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#0BC2E1]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          width={735}
          height={490}
          loading="lazy"
          className="rounded-md w-full h-auto mx-auto lg:max-w-[400px] md:max-w-[300px] md:w-auto md:h-full object-cover aspect-video shadow-lg"
          src="https://i.pinimg.com/originals/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
          alt="GATO - Diseño Web"
          title="GATO - Diseño Web"
        />
      </div>
    </div>
  );
}

function Component3({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`} title="GATO - Desarollo de software">
          Desarollo de software
        </h2>
        <div className="flex flex-col gap-4">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Transformamos tus ideas en software funcional. Desde la
            conceptualización hasta la implementación, creamos soluciones a
            medida que potencian tu negocio y simplifican tus operaciones.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-[#007CF8] rounded-full w-12 h-full absolute transition-all ${
                isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
              }`}
            ></div>
            <Link
              href={"/servicios/desarrollo-software"}
              rel="bookmark"
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#007CF8]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          width={735}
          height={490}
          loading="lazy"
          className="rounded-md w-full h-auto mx-auto lg:max-w-[400px] md:max-w-[300px] md:w-auto md:h-full object-cover aspect-video shadow-lg"
          src="https://i.pinimg.com/originals/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg"
          alt="GATO - Desarollo de software"
          title="GATO - Desarollo de software"
        />
      </div>
    </div>
  );
}

function Component4({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`} title="GATO - Desarrollo Móvil">
          Desarrollo Móvil
        </h2>
        <div className="flex flex-col gap-4">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Nuestros servicios de Desarrollo Móvil se centran en crear
            aplicaciones innovadoras y funcionales para dispositivos móviles.
            Nos especializamos en desarrollar aplicaciones que proporcionan una
            experiencia de usuario excepcional y están optimizadas para un
            rendimiento óptimo en una variedad de plataformas móviles.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-[#007CF8] rounded-full w-12 h-full absolute transition-all ${
                isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
              }`}
            ></div>
            <Link
              href={"/servicios/desarrollo-movil"}
              rel="bookmark"
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#007CF8]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          width={735}
          height={490}
          loading="lazy"
          className="rounded-md w-full h-auto mx-auto lg:max-w-[400px] md:max-w-[300px] md:w-auto md:h-full object-cover aspect-video shadow-lg"
          src="https://i.pinimg.com/736x/f7/8a/89/f78a89c21a83abd51bef3da2baf26c8d.jpg"
          alt="GATO - Desarrollo Móvil"
          title="GATO - Desarrollo Móvil"
        />
      </div>
    </div>
  );
}

function Component5({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`} title="GATO - Branding">
          Branding
        </h2>
        <div className="flex flex-col gap-4">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Capturamos la esencia de tu marca y la llevamos a nuevas alturas.
            Con la creación de identidades visuales impactantes te ayudamos a
            destacar en un mundo cada vez más competitivo.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-[#A52DE6] rounded-full w-12 h-full absolute transition-all ${
                isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
              }`}
            ></div>
            <Link
              href={"/servicios/branding"}
              rel="bookmark"
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#A52DE6]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          width={735}
          height={490}
          loading="lazy"
          className="rounded-md w-full h-auto mx-auto lg:max-w-[400px] md:max-w-[300px] md:w-auto md:h-full object-cover aspect-video shadow-lg"
          src="https://i.pinimg.com/originals/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
          alt="GATO - Branding"
          title="GATO - Branding"
        />
      </div>
    </div>
  );
}
function Component6({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`} title="GATO - Branding">
          E-mail Marketing
        </h2>
        <div className="flex flex-col gap-4">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Conectamos tu marca con tu audiencia a través de campañas de email
            impactantes. Diseñamos y optimizamos correos que generan resultados
            medibles, impulsando el posicionamiento y recolección de tu marca.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-[#A52DE6] rounded-full w-12 h-full absolute transition-all ${
                isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
              }`}
            ></div>
            <Link
              href={"/servicios/branding"}
              rel="bookmark"
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#A52DE6]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          width={735}
          height={490}
          loading="lazy"
          className="rounded-md w-full h-auto mx-auto lg:max-w-[400px] md:max-w-[300px] md:w-auto md:h-full object-cover aspect-video shadow-lg"
          src="https://i.pinimg.com/originals/14/75/d0/1475d0f8a6db1f9ce5867e423d45b894.png"
          alt="GATO - Branding"
          title="GATO - Branding"
        />
      </div>
    </div>
  );
}
export default Detail;
