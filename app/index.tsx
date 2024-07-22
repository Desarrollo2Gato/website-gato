"use client";

import { useEffect, useState, useRef } from "react";
import Page from "./home/page";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFade, setIsFade] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const timer1Ref = useRef<NodeJS.Timeout | null>(null);
  const timer2Ref = useRef<NodeJS.Timeout | null>(null);

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
    if (isFirstVisit) {
      timer1Ref.current = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      timer2Ref.current = setTimeout(() => {
        setIsFade(true);
      }, 3000);
    }

    return () => {
      if (timer1Ref.current) clearTimeout(timer1Ref.current);
      if (timer2Ref.current) clearTimeout(timer2Ref.current);
    };
  }, [isFirstVisit]);

  return (
    <>
      {isLoading ? (
        <div
          className={`bg-[#9623DE] w-full h-screen flex justify-center items-center ${
            isFade && "animate-fade animate-duration-1000 animate-ease-linear animate-reverse"
          }`}
        >
          <div className="flex gap-4">
            <div className="rounded-full p-2 bg-[#9623DE]">
              <video
                height={160}
                width={160}
                className="animate-spin animate-duration-1000 animate-ease-in-out"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/animation-cat.webm" type="video/webm" />
                <track
                  src="/captions.vtt"
                  kind="subtitles"
                  srcLang="es"
                  label="Español"
                />
                Tu navegador no soporta este video.
              </video>
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
