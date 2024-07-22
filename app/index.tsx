"use client";

import { useEffect, useState } from "react";
import Page from "./home/page";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const [isFade, setIsFade] = useState(false);

  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstVisit(false);
      setIsLoading(false);
    } else {
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    if (isFirstVisit) {
      const timer1 = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      const timer2 = setTimeout(() => {
        setIsFade(true);
      }, 3000);

      return () => {
        if (timer1) clearTimeout(timer1);
        if (timer2) clearTimeout(timer2);
      };
    }
  }, [isFirstVisit]);

  return (
    <>
      {isLoading ? (
        <div
          className={`bg-[#9623DE] w-full h-screen flex justify-center items-center  ${
            isFade &&
            "animate-fade animate-duration-1000 animate-ease-linear animate-reverse"
          }`}
        >
          <div className="flex gap-4">
            <div className=" rounded-full p-2  bg-[#9623DE]">
              <video
                height={160}
                width={160}
                className="animate-spin animate-duration-1000 animate-ease-in-out"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source src="/animation-cat.webm" type="video/webm" />
                <track
                  src="/captions.vtt"
                  kind="subtitles"
                  srcLang="es"
                  label="Español"
                />
                Tu navegador no soporta este video
              </video>
              {/*  <Image
                height={160}
                width={160}
                className="w-40 h-40 object-contain rounded-full animate-spin animate-once animate-duration-[1000ms] animate-ease-linear animate-reverse"
                src="/animation-cat.gif"
                alt="Gato gif"
                title="gif de gato"
              /> */}
            </div>
          </div>
        </div>
      ) : (
        <Page />
      )}
    </>
  );
}

export default Index;
