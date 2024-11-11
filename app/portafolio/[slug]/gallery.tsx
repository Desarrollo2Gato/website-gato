import { useImageSize } from "@/app/hooks/useImageSize";
import Image from "next/image";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { CardClientSkeleton } from "@/app/components/skeleton";
import { IImage } from "@/app/types";
import ModalImg from "@/app/components/modalImg";

type GalleryProps = {
  client: string;
  color: string;
  img_sq_1: IImage;
  img_sq_2: IImage;
  img_sq_3: IImage;
  img_sq_4: IImage;
  img_vd_1: IImage;
  img_vd_2: IImage;
  dcpt_sq_1: string;
  dcpt_sq_2: string;
  dcpt_sq_3: string;
  dcpt_sq_4: string;
  dcpt_vd_1: string;
  dcpt_vd_2: string;
  fb?: string;
  ig?: string;
  linkedin?: string;
  web?: string;
  tiktok?: string;
  isLoading?: boolean;
  textColor: string;
};
const Gallery: React.FC<GalleryProps> = ({
  client,
  color = "#9353B6",
  img_sq_1,
  img_sq_2,
  img_sq_3,
  img_sq_4,
  img_vd_1,
  img_vd_2,
  dcpt_sq_1,
  dcpt_sq_2,
  dcpt_sq_3,
  dcpt_sq_4,
  dcpt_vd_1,
  dcpt_vd_2,
  fb,
  ig,
  linkedin,
  web,
  tiktok,
  isLoading = false,
  textColor = "#ffffff",
}) => {
  const [selectedImg, setSelectedImg] = useState<IImage | null>(null);
  const [open, setOpen] = useState<boolean>(true);
  const handleImg = (img: IImage | null) => {
    if (img === null) return;
    setSelectedImg(img);
    setOpen(true);
  };

  return (
    <section id="resultados" className="bg-white text-stone-700">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 pt-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-4">
            Galeria de{" "}
            <span style={{ color: color }} className={``}>
              fotos
            </span>
          </h2>
          <p className="text-stone-500 md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            Conoce lo que hicimos por {client}, para lograr sus objetivos
            empresariales.
          </p>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="grid grid-cols-2 gap-6 md:w-1/2">
            <div
              className="relative overflow-hidden rounded-lg shadow-md group"
              role="button"
              onClick={() => handleImg(img_sq_1)}
            >
              {isLoading ? (
                <CardClientSkeleton width={"100%"} height={"100%"} />
              ) : img_sq_1 ? (
                <>
                  <Image
                    className="object-cover rounded-lg w-full h-full"
                    src={img_sq_1.url}
                    alt={img_sq_1.alt ? img_sq_1.alt : "Imagen 1 de la galeria"}
                    title={
                      img_sq_1.title ? img_sq_1.title : "Imagen 1 de la galeria"
                    }
                    width={img_sq_1.width}
                    height={img_sq_1.height}
                  />
                  <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                    <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                      {dcpt_sq_1}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <FaImage className="text-zinc-300 text-2xl xl:text-4xl" />
                </div>
              )}
            </div>
            <div
              className="relative overflow-hidden rounded-lg shadow-md group"
              role="button"
              onClick={() => handleImg(img_sq_2)}
            >
              {isLoading ? (
                <CardClientSkeleton width={"100%"} height={"100%"} />
              ) : img_sq_2 ? (
                <>
                  <Image
                    className="object-cover rounded-lg w-full h-full"
                    src={img_sq_2.url}
                    alt={img_sq_2.alt ? img_sq_2.alt : "Imagen 2 de la galeria"}
                    title={
                      img_sq_2.title ? img_sq_2.title : "Imagen 2 de la galeria"
                    }
                    width={img_sq_2.width}
                    height={img_sq_2.height}
                  />
                  <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                    <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                      {dcpt_sq_2}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <FaImage className="text-zinc-300 text-2xl xl:text-4xl" />
                </div>
              )}
            </div>
            <div
              className="relative overflow-hidden rounded-lg shadow-md group"
              role="button"
              onClick={() => handleImg(img_sq_3)}
            >
              {isLoading ? (
                <CardClientSkeleton width={"100%"} height={"100%"} />
              ) : img_sq_3 ? (
                <>
                  <Image
                    className="object-cover rounded-lg w-full h-full"
                    src={img_sq_3.url}
                    alt={img_sq_3.alt ? img_sq_3.alt : "Imagen 3 de la galeria"}
                    title={
                      img_sq_3.title ? img_sq_3.title : "Imagen 3 de la galeria"
                    }
                    width={img_sq_3.width}
                    height={img_sq_3.height}
                  />
                  <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                    <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                      {dcpt_sq_3}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <FaImage className="text-zinc-300 text-2xl xl:text-4xl" />
                </div>
              )}
            </div>
            <div
              className="relative overflow-hidden rounded-lg shadow-md group"
              role="button"
              onClick={() => handleImg(img_sq_4)}
            >
              {isLoading ? (
                <CardClientSkeleton width={"100%"} height={"100%"} />
              ) : img_sq_4 ? (
                <>
                  <Image
                    className="object-cover rounded-lg w-full h-full"
                    src={img_sq_4.url}
                    alt={img_sq_4.alt ? img_sq_4.alt : "Imagen 4 de la galeria"}
                    title={
                      img_sq_4.title ? img_sq_4.title : "Imagen 4 de la galeria"
                    }
                    width={img_sq_4.width}
                    height={img_sq_4.height}
                  />
                  <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                    <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                      {dcpt_sq_4}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <FaImage className="text-zinc-300 text-2xl xl:text-4xl" />
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:w-1/2">
            <div
              className="relative overflow-hidden w-full aspect-[2/1]  rounded-lg shadow-md group"
              role="button"
              onClick={() => handleImg(img_vd_1)}
            >
              {isLoading ? (
                <CardClientSkeleton width={"100%"} height={"100%"} />
              ) : img_vd_1 ? (
                <>
                  <Image
                    className="object-cover rounded-lg w-full h-full"
                    src={img_vd_1.url}
                    alt={img_vd_1.alt ? img_vd_1.alt : "Imagen 4 de la galeria"}
                    title={
                      img_vd_1.title ? img_vd_1.title : "Imagen 4 de la galeria"
                    }
                    width={img_vd_1.width}
                    height={img_vd_1.height}
                  />
                  <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                    <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                      {dcpt_vd_1}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <FaImage className="text-zinc-300 text-2xl xl:text-4xl" />
                </div>
              )}
            </div>
            <div
              className="relative overflow-hidden w-full aspect-[2/1]  rounded-lg shadow-md group"
              role="button"
              onClick={() => handleImg(img_vd_2)}
            >
              {isLoading ? (
                <CardClientSkeleton width={"100%"} height={"100%"} />
              ) : img_vd_2 ? (
                <>
                  <Image
                    className="object-cover rounded-lg w-full h-full"
                    src={img_vd_2.url}
                    alt={img_vd_2.alt ? img_vd_2.alt : "Imagen 4 de la galeria"}
                    title={
                      img_vd_2.title ? img_vd_2.title : "Imagen 4 de la galeria"
                    }
                    width={img_vd_2.width}
                    height={img_vd_2.height}
                  />
                  <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                    <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                      {dcpt_vd_2}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <FaImage className="text-zinc-300 text-2xl xl:text-4xl" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-4 w-full justify-center mt-10 ">
          {ig && (
            <SocialLink href={ig} color={color} textColor={textColor}>
              <AiFillInstagram />
            </SocialLink>
          )}
          {fb && (
            <SocialLink href={fb} color={color} textColor={textColor}>
              <FaFacebookF />
            </SocialLink>
          )}
          {tiktok && (
            <SocialLink href={tiktok} color={color} textColor={textColor}>
              <FaTiktok />
            </SocialLink>
          )}
          {linkedin && (
            <SocialLink href={linkedin} color={color} textColor={textColor}>
              <FaLinkedinIn />
            </SocialLink>
          )}
          {web && (
            <SocialLink href={web} color={color} textColor={textColor}>
              <FaGlobe style={{ color: textColor }} />
            </SocialLink>
          )}
        </div>
      </div>
      {selectedImg && (
        <ModalImg
          open={open}
          setOpen={setOpen}
          url={selectedImg.url}
          alt={selectedImg.alt ? selectedImg.alt : "imagen"}
          title={selectedImg.title ? selectedImg.title : "imagen"}
          height={selectedImg.height}
          width={selectedImg.width}
        />
      )}
    </section>
  );
};

type SocialLinkProps = {
  href: string;
  color: string;
  children: React.ReactNode;
  textColor: string;
};
const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  color = "#9353B6",
  children,
  textColor = "#ffffff",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        backgroundColor: color,
        color: isHovered ? color : textColor,
      }}
      target="_blank"
      className={`aspect-square overflow-hidden rounded-full flex items-center justify-center text-[1.2rem] w-10 h-10 transition-all duration-500 relative group hover:shadow-md `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{ backgroundColor: textColor }}
        className="absolute w-full h-full top-0 left-0  opacity-0 group-hover:opacity-100 group-hover:w-full -translate-x-full group-hover:translate-x-0 transition-all duration-500 rounded-full transform"
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Gallery;
