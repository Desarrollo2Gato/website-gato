"use client";

// todo pending, no create

import { RevealWrapper } from "next-reveal";
import React from "react";

function TimeLine2({ data, numCols }: { data: any[]; numCols: number }) {
  const defineNumCols = "grid-cols-" + numCols;
  return (
    <>
      <div className={`row-span-3 grid w-full ${defineNumCols} `}>
        {data.map((item, index) => {
          return index % 2 === 0 ? (
            <TopTitle key={index} title={item.title} />
          ) : (
            <TopDescription key={index} description={item.items[0]} />
          );
        })}
      </div>
      <div
        className={`row-span-1 grid w-full ${defineNumCols} h-12 items-center`}
      >
        {Array.from({ length: data.length }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[2px] bg-violet-700 flex justify-center relative"
          >
            <div className="rounded-full w-10 h-10 bg-white border-2 border-violet-700 flex justify-center items-center absolute -top-4">
              <div className="w-7 h-7 bg-violet-700 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
      <div className={`row-span-3 grid w-full ${defineNumCols}`}>
        {data.map((item, index) => {
          return index % 2 === 0 ? (
            <BottomDescription key={index} description={item.items[0]} />
          ) : (
            <BottomTitle key={index} title={item.title} />
          );
        })}
      </div>
    </>
  );
}

function TopDescription({ description }: { description: string }) {
  return (
    <div className="flex flex-col justify-end items-center">
      <p className="text-center text-sm font-light">{description}</p>
      <div className="h-10 w-[1px] bg-gray-300"></div>
    </div>
  );
}

function BottomDescription({ description }: { description: string }) {
  return (
    <div className="flex flex-col justify-start items-center ">
      <div className="h-10 w-[1px] bg-gray-300"></div>
      <p className="text-center text-sm font-light">{description}</p>
    </div>
  );
}

function TopTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-end">
      <span className="font-semibold text-violet-700">{title}</span>
    </div>
  );
}

function BottomTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-start">
      <span className="font-semibold text-violet-700">{title}</span>
    </div>
  );
}

function SectionBottom({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="grid grid-cols-5 ">
      <RevealWrapper
        duration={2000}
        origin="left"
        className="col-span-3  flex flex-col justify-center items-start p-4  bg-blue-600 rounded-lg "
      >
        <div className="text-white">
          <span>{title}</span>
          <p className="font-light text-sm">{items[0]}</p>
        </div>
      </RevealWrapper>
    </div>
  );
}
function SectionTop({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <div className="grid grid-cols-5 ">
        <div className="col-span-2"></div>
        <RevealWrapper
          duration={2000}
          origin="right"
          className="col-span-3  flex flex-col justify-center items-start p-4  bg-sky-600 rounded-lg"
        >
          <div className="text-white">
            <span>{title}</span>
            <p className="font-light text-sm">{items[0]}</p>
          </div>
        </RevealWrapper>
      </div>
    </>
  );
}

export default TimeLine2;
