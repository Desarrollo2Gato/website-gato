"use client";

import { RevealWrapper } from "next-reveal";
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
                    d="M28.1204 9.30653C26.987 8.0532 25.0937 7.42653 22.347 7.42653H22.027V7.3732C22.027 5.1332 22.027 2.35986 17.0137 2.35986H14.987C9.97371 2.35986 9.97371 5.14653 9.97371 7.3732V7.43986H9.65371C6.89371 7.43986 5.01371 8.06653 3.88038 9.31986C2.56038 10.7865 2.60038 12.7599 2.73371 14.1065L2.74704 14.1999L2.85783 15.3631C2.8721 15.5129 2.95293 15.6483 3.07869 15.7309C3.38568 15.9325 3.97633 16.3154 4.32038 16.5065C4.50704 16.6265 4.70704 16.7332 4.90704 16.8399C7.18704 18.0932 9.69371 18.9332 12.2404 19.3465C12.3604 20.5999 12.907 22.0665 15.827 22.0665C18.747 22.0665 19.3204 20.6132 19.4137 19.3199C22.1337 18.8799 24.7604 17.9332 27.1337 16.5465C27.2137 16.5065 27.267 16.4665 27.3337 16.4265C27.8836 16.1157 28.4548 15.73 28.9707 15.3556C29.0835 15.2738 29.1558 15.1478 29.1712 15.0093L29.2004 14.7465L29.267 14.1199C29.2804 14.0399 29.2804 13.9732 29.2937 13.8799C29.4004 12.5332 29.3737 10.6932 28.1204 9.30653ZM17.4537 18.4399C17.4537 19.8532 17.4537 20.0665 15.8137 20.0665C14.1737 20.0665 14.1737 19.8132 14.1737 18.4532V16.7732H17.4537V18.4399ZM11.8804 7.42653V7.3732C11.8804 5.10653 11.8804 4.26653 14.987 4.26653H17.0137C20.1204 4.26653 20.1204 5.11986 20.1204 7.3732V7.43986H11.8804V7.42653Z"
                    fill={`${selected === 1 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M28.1029 18.1823C28.4559 18.0128 28.8611 18.2937 28.8257 18.6837L28.3201 24.2531C28.0401 26.9198 26.9468 29.6398 21.0801 29.6398H10.9201C5.05345 29.6398 3.96012 26.9198 3.68012 24.2665L3.19941 18.9786C3.16436 18.5932 3.56105 18.313 3.91317 18.4737C5.37082 19.1388 8.49371 20.5167 10.3226 20.9777C10.4873 21.0192 10.6213 21.1369 10.6901 21.2922C11.4819 23.0762 13.2523 24.0265 15.8268 24.0265C18.3758 24.0265 20.1695 23.0397 20.9633 21.2524C21.0323 21.097 21.1667 20.9793 21.3316 20.9376C23.2712 20.4472 26.584 18.9114 28.1029 18.1823Z"
                    fill={`${selected === 1 ? "#A52DE6" : "#7A7678"}`}
                  />
                </svg>
              </div>
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
                  className="w-full h-full md:w-[32px] md:h-[32px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3337 3.6665H2.66699C2.12033 3.6665 1.66699 3.21317 1.66699 2.6665C1.66699 2.11984 2.12033 1.6665 2.66699 1.6665H29.3337C29.8803 1.6665 30.3337 2.11984 30.3337 2.6665C30.3337 3.21317 29.8803 3.6665 29.3337 3.6665Z"
                    fill={`${selected === 2 ? "#0BC2E1" : "#7A7678"}`}
                  />
                  <path
                    d="M22.227 29.7865C22.0537 30.1332 21.6937 30.3332 21.3337 30.3332C21.187 30.3332 21.027 30.2932 20.8937 30.2265L16.0003 27.7865L11.107 30.2265C10.9737 30.2932 10.8137 30.3332 10.667 30.3332C10.307 30.3332 9.94701 30.1332 9.77368 29.7865C9.52034 29.2798 9.72034 28.6798 10.227 28.4398L15.0003 26.0532V22.6665H17.0003V26.0532L21.7737 28.4398C22.2803 28.6798 22.4803 29.2798 22.227 29.7865Z"
                    fill={`${selected === 2 ? "#0BC2E1" : "#7A7678"}`}
                  />
                  <path
                    d="M4 2.6665V18.7998C4 21.3332 5.33333 22.6665 7.86667 22.6665H24.1333C26.6667 22.6665 28 21.3332 28 18.7998V2.6665H4ZM22.64 11.4398L18.44 14.9465C18.0533 15.2665 17.56 15.3998 17.0933 15.3198C16.6133 15.2398 16.2 14.9465 15.9467 14.5198L14.5467 12.1865L10.64 15.4398C10.4533 15.5998 10.2267 15.6665 10 15.6665C9.72 15.6665 9.42667 15.5465 9.22667 15.3065C8.86667 14.8798 8.93333 14.2532 9.36 13.8932L13.56 10.3865C13.9467 10.0665 14.44 9.93317 14.9067 10.0132C15.3867 10.0932 15.8 10.3865 16.0533 10.8132L17.4533 13.1465L21.36 9.89317C21.7867 9.53317 22.4133 9.59984 22.7733 10.0265C23.12 10.4532 23.0667 11.0798 22.64 11.4398Z"
                    fill={`${selected === 2 ? "#0BC2E1" : "#7A7678"}`}
                  />
                </svg>
              </div>
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
                  className="w-full h-full md:w-[32px] md:h-[32px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6663 30.3335H9.33301C8.78634 30.3335 8.33301 29.8802 8.33301 29.3335C8.33301 28.7868 8.78634 28.3335 9.33301 28.3335H22.6663C23.213 28.3335 23.6663 28.7868 23.6663 29.3335C23.6663 29.8802 23.213 30.3335 22.6663 30.3335Z"
                    fill={`${selected === 4 ? "#007CF8" : "#7A7678"}`}
                  />
                  <path
                    d="M24.0003 2.6665H8.00033C5.05366 2.6665 2.66699 5.05317 2.66699 7.99984V19.9998C2.66699 22.9465 5.05366 25.3332 8.00033 25.3332H24.0003C26.947 25.3332 29.3337 22.9465 29.3337 19.9998V7.99984C29.3337 5.05317 26.947 2.6665 24.0003 2.6665ZM13.3203 9.75984C14.067 9.75984 14.667 10.3598 14.667 11.0932C14.667 11.8265 14.067 12.4265 13.3337 12.4265C12.6003 12.4265 12.0003 11.8265 12.0003 11.0932C12.0003 10.3598 12.587 9.75984 13.3203 9.75984ZM9.12033 9.75984C9.86699 9.75984 10.467 10.3598 10.467 11.0932C10.467 11.8265 9.86699 12.4265 9.13366 12.4265C8.40032 12.4265 7.80032 11.8265 7.80032 11.0932C7.80032 10.3598 8.37366 9.75984 9.12033 9.75984ZM23.0137 19.8132H9.01366C8.45366 19.8132 8.00033 19.3598 8.00033 18.8132C8.00033 18.2665 8.44032 17.8132 8.98699 17.8132H23.027C23.5737 17.8132 24.027 18.2665 24.027 18.8132C24.027 19.3598 23.5737 19.8132 23.0137 19.8132ZM23.0137 12.0932H18.107C17.5603 12.0932 17.107 11.6398 17.107 11.0932C17.107 10.5465 17.5603 10.0932 18.107 10.0932H23.0137C23.5603 10.0932 24.0137 10.5465 24.0137 11.0932C24.0137 11.6398 23.5737 12.0932 23.0137 12.0932Z"
                    fill={`${selected === 4 ? "#007CF8" : "#7A7678"}`}
                  />
                </svg>
              </div>

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
                  className="w-full h-full md:w-[32px] md:h-[32px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.1204 9.30653C26.987 8.0532 25.0937 7.42653 22.347 7.42653H22.027V7.3732C22.027 5.1332 22.027 2.35986 17.0137 2.35986H14.987C9.97371 2.35986 9.97371 5.14653 9.97371 7.3732V7.43986H9.65371C6.89371 7.43986 5.01371 8.06653 3.88038 9.31986C2.56038 10.7865 2.60038 12.7599 2.73371 14.1065L2.74704 14.1999L2.85783 15.3631C2.8721 15.5129 2.95293 15.6483 3.07869 15.7309C3.38568 15.9325 3.97633 16.3154 4.32038 16.5065C4.50704 16.6265 4.70704 16.7332 4.90704 16.8399C7.18704 18.0932 9.69371 18.9332 12.2404 19.3465C12.3604 20.5999 12.907 22.0665 15.827 22.0665C18.747 22.0665 19.3204 20.6132 19.4137 19.3199C22.1337 18.8799 24.7604 17.9332 27.1337 16.5465C27.2137 16.5065 27.267 16.4665 27.3337 16.4265C27.8836 16.1157 28.4548 15.73 28.9707 15.3556C29.0835 15.2738 29.1558 15.1478 29.1712 15.0093L29.2004 14.7465L29.267 14.1199C29.2804 14.0399 29.2804 13.9732 29.2937 13.8799C29.4004 12.5332 29.3737 10.6932 28.1204 9.30653ZM17.4537 18.4399C17.4537 19.8532 17.4537 20.0665 15.8137 20.0665C14.1737 20.0665 14.1737 19.8132 14.1737 18.4532V16.7732H17.4537V18.4399ZM11.8804 7.42653V7.3732C11.8804 5.10653 11.8804 4.26653 14.987 4.26653H17.0137C20.1204 4.26653 20.1204 5.11986 20.1204 7.3732V7.43986H11.8804V7.42653Z"
                    fill={`${selected === 5 ? "#A52DE6" : "#7A7678"}`}
                  />
                  <path
                    d="M28.1029 18.1823C28.4559 18.0128 28.8611 18.2937 28.8257 18.6837L28.3201 24.2531C28.0401 26.9198 26.9468 29.6398 21.0801 29.6398H10.9201C5.05345 29.6398 3.96012 26.9198 3.68012 24.2665L3.19941 18.9786C3.16436 18.5932 3.56105 18.313 3.91317 18.4737C5.37082 19.1388 8.49371 20.5167 10.3226 20.9777C10.4873 21.0192 10.6213 21.1369 10.6901 21.2922C11.4819 23.0762 13.2523 24.0265 15.8268 24.0265C18.3758 24.0265 20.1695 23.0397 20.9633 21.2524C21.0323 21.097 21.1667 20.9793 21.3316 20.9376C23.2712 20.4472 26.584 18.9114 28.1029 18.1823Z"
                    fill={`${selected === 5 ? "#A52DE6" : "#7A7678"}`}
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
        <img
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
        <img
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
        <img
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
        <img
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
        <img
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
export default Detail;
