"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { sectionColors } from "@/app/components/blog/sectionColors";
import Image from "next/image";

interface PostProps {
  post: Posts;
}

interface Posts {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  acf: {
    introducion: string;
    secciones: string[];
    titulo: string;
    banner: string;
    fecha: string;
    "autor-name": string;
    "autor-profile": string;
    descripcion: string;
    descripcion_corta: string;
    "descripcion-imagen": string;
  };
}

const formatDate = (dateStr: string): string => {
  const year = parseInt(dateStr?.slice(0, 4), 10);
  const month = parseInt(dateStr?.slice(4, 6), 10) - 1;
  const day = parseInt(dateStr?.slice(6, 8), 10);

  const date = new Date(year, month, day);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
};

const Banner: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[calc(50vh)] md:h-[600px] xl:h-[800px] relative  ">
        <Image
          quality={75}
          fill
          sizes="100vw"
          priority={true}
          className="w-full h-full object-cover"
          src={post.acf?.banner}
          alt={"Banner " + post.acf?.titulo}
          title={"Imagen sobre " + post.acf?.titulo}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-[#1E004D] bg-opacity-50 flex justify-start items-end">
          <RevealWrapper origin="left" duration={1500} className={`w-full`}>
            <div className="w-full max-w-[1440px] mx-auto px-8 pb-8 lg:px-16 lg:pb-16 xl:  flex flex-col gap-1 md:gap-4 lg:gap-4 ">
              <div className="flex flex-wrap mb-2 gap-2 ">
                {post?.acf?.secciones.map((tag,index) => (
                  <Link
                    href="/blog/[slug]/"
                    as={`/blog/${tag}`}
                    title= {tag === "diseno-web"
                      ? "Diseño Web"
                      : tag.replace(/-/g, " ")}
                    aria-label="Ver categoría"
                    key={index}
                    className="text-xs px-2 py-1  text-white font-medium shadow-md capitalize"
                    style={{
                      backgroundColor: sectionColors[tag],
                      color: "white",
                    }}
                  >
                    {tag === "diseno-web"
                      ? "Diseño Web"
                      : tag.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
              <h1 className="capitalize text-white text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold drop-shadow-xl">
                <Typewriter words={[`${post.title.rendered}`]} typeSpeed={60} />
              </h1>
              <div className="py-4 text-[#CACACA] flex gap-2 lg:gap-4 md:text-lg text-sm ">
                <div className="flex gap-1 lg:gap-2 items-center">
                  <Image
                    width={40}
                    height={40}
                    loading="lazy"
                    className="w-5 h-5 md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] aspect-square rounded-full object-cover"
                    src={post.acf["autor-profile"]}
                    alt={'Perfil de '+post.acf["autor-name"]}
                    title={'Imagen del autor(a):' + post.acf["autor-name"]}
                  />{" "}
                  <span className=" drop-shadow">{post.acf["autor-name"]}</span>
                </div>

                <div className="flex  items-center justify-start gap-1 ">
                  <svg
                    className="h-3 md:h-4 w-auto lg:h-5"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1813_933)">
                      <path
                        d="M12.6875 7C12.6875 8.50842 12.0883 9.95506 11.0217 11.0217C9.95506 12.0883 8.50842 12.6875 7 12.6875C5.49158 12.6875 4.04494 12.0883 2.97833 11.0217C1.91172 9.95506 1.3125 8.50842 1.3125 7C1.3125 5.49158 1.91172 4.04494 2.97833 2.97833C4.04494 1.91172 5.49158 1.3125 7 1.3125C8.50842 1.3125 9.95506 1.91172 11.0217 2.97833C12.0883 4.04494 12.6875 5.49158 12.6875 7ZM0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7ZM6.34375 3.28125V7C6.34375 7.21875 6.45312 7.42383 6.63633 7.54688L9.26133 9.29688C9.56211 9.49922 9.96953 9.41719 10.1719 9.11367C10.3742 8.81016 10.2922 8.40547 9.98867 8.20312L7.65625 6.65V3.28125C7.65625 2.91758 7.36367 2.625 7 2.625C6.63633 2.625 6.34375 2.91758 6.34375 3.28125Z"
                        fill="#cacaca"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1813_933">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className=" drop-shadow">
                    {post?.acf?.fecha
                      ? formatDate(post.acf.fecha)
                      : "sin fecha"}
                  </span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
