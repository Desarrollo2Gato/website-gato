"use client";

import { api_clients } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { Spinner } from "keep-react";
import { RevealWrapper } from "next-reveal";
import React, { useEffect, useState } from "react";

function BannerClient() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<any>({});

  async function fetchData() {
    try {
      const response = await axios.get(api_clients + "?slug=flowers-travel");
      setData(response.data[0]);
      setIsLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <section className="md:min-h-screen  h-full  flex bg-gray-100  relative  overflow-hidden ">
        <div className="grid md:grid-cols-2 grid-cols-1 h-full w-full ">
          <div className="w-full h-full px-8 py-8 md:py-0">
            <RevealWrapper
              origin="left"
              duration={1500}
              className={
                "w-full h-full flex flex-col justify-center items-start"
              }
            >
              <span className="text-gray-400">INDUSTRY</span>
              <h2 className="md:text-[5rem] text-[3rem]">
                {data.title.rendered}
              </h2>
              <p className="md:text-xl text-base font-light">
                {data.acf.descripcion_corta}
              </p>
            </RevealWrapper>
          </div>
          <div className="w-full h-full md:px-0 px-8">
            <RevealWrapper
              origin="right"
              duration={1500}
              className={"w-full h-full  overflow-hidden"}
            >
              <img
                className="h-full object-cover"
                src="https://blog.mydock365.com/hubfs/How%20to%20Create%20a%20Company-Wide%20Team%20in%20Microsoft%20Teams%20-%20Dock%20365%20Blog.webp"
                alt=""
              />
            </RevealWrapper>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <Spinner color="info" size="lg" />
      </section>
    );
  }
}

export default BannerClient;
