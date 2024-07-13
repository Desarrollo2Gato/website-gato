"use client";

// todo pending, no create

import { RevealWrapper } from "next-reveal";
import React from "react";

function TimeLine({ data }: { data: any[] }) {
  const dataTemporal = [
    {
      title: "",
      items: [],
    },
    {
      title: "",
      items: [],
    },
  ];
  return (
    <>
      {/*  */}

      {data.map((item, index) => {
        return (index + 1) % 2 === 0 ? (
          <SectionRight
            key={index}
            title={item.title}
            items={item.items}
          ></SectionRight>
        ) : (
          <SectionLeft
            key={index}
            title={item.title}
            items={item.items}
          ></SectionLeft>
        );
      })}
    </>
  );
}

function SectionLeft({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <RevealWrapper
        duration={2000}
        origin="left"
        className="col-span-2  flex flex-col justify-center items-start py-8  "
      >
        <div className="flex flex-col rounded-md bg-white shadow-large p-2 ">
          <span className=" md:text-lg text-sm text-blue-600">{title}</span>
          <span className="md:text-sm text-xs ">
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </span>
        </div>
      </RevealWrapper>
      <div className="flex flex-col justify-center items-center relative">
        <div className="w-1 h-full bg-blue-500 rounded-md "></div>
        <div className="md:w-16 md:h-16 w-8 h-8 bg-blue-500 rounded-full absolute"></div>
        <div className="w-1 h-full bg-blue-500  rounded-md "></div>
      </div>
      <RevealWrapper
        duration={2000}
        origin=" right"
        className="col-span-2  flex items-center"
      >
        <img
          loading="lazy"
          className="rounded-full md:w-20 md:h-20 w-16 h-16 border-2 border-blue-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxGd2Ch0SsWo0cE-w1XPmmaWRNB6vtOKQPQVedM7ACQ&s"
          alt=""
        />
      </RevealWrapper>
    </>
  );
}
function SectionRight({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <RevealWrapper
        duration={2000}
        origin="left"
        className="col-span-2 justify-end flex items-center"
      >
        <img
          loading="lazy"
          className="rounded-full md:w-20 md:h-20 w-16 h-16 border-2 border-blue-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxGd2Ch0SsWo0cE-w1XPmmaWRNB6vtOKQPQVedM7ACQ&s"
          alt=""
        />
      </RevealWrapper>

      <div className="flex flex-col justify-center items-center relative">
        <div className="w-1 h-full bg-blue-500 rounded-md "></div>
        <div className="md:w-16 md:h-16 w-8 h-8 bg-blue-500 rounded-full absolute"></div>
        <div className="w-1 h-full bg-blue-500  rounded-md "></div>
      </div>

      <RevealWrapper
        duration={2000}
        origin="right"
        className="col-span-2  flex flex-col justify-center items-start py-8 "
      >
        <div className="flex flex-col rounded-md bg-white shadow-large p-2 ">
          <span className=" md:text-lg text-sm text-blue-600">{title}</span>
          <span className="md:text-sm text-xs ">
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </span>
        </div>
      </RevealWrapper>
    </>
  );
}

export default TimeLine;
