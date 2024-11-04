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
import { useState } from "react";

type GalleryProps = {
  client: string;
  color: string;
  img_sq_1: string;
  img_sq_2: string;
  img_sq_3: string;
  img_sq_4: string;
  img_vd_1: string;
  img_vd_2: string;
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
};
const Gallery: React.FC<GalleryProps> = ({
  client,
  color,
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
}) => {
  const size_sq_1 = useImageSize(img_sq_1);
  const size_sq_2 = useImageSize(img_sq_2);
  const size_sq_3 = useImageSize(img_sq_3);
  const size_sq_4 = useImageSize(img_sq_4);
  const size_vd_1 = useImageSize(img_vd_1);
  const size_vd_2 = useImageSize(img_vd_2);

  return (
    <section id="resultados" className="bg-white text-stone-700">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 pt-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-4">
            Galeria de <span className={`text-[${color}]`}>fotos</span>
          </h2>
          <p className="text-stone-500 md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            Conoce lo que hicimos por {client}, para lograr sus objetivos
            empresariales.
          </p>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="grid grid-cols-2 gap-6 md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              {img_sq_1 && size_sq_1 && (
                <Image
                  className="object-cover rounded-lg w-full h-full"
                  src={img_sq_1}
                  alt="Imagen 1 "
                  width={size_sq_1?.width}
                  height={size_sq_1?.height}
                />
              )}
              <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                  {dcpt_sq_1}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              {img_sq_2 && size_sq_2 && (
                <Image
                  className="object-cover rounded-lg w-full h-full"
                  src={img_sq_2}
                  alt="Imagen 1 "
                  width={size_sq_2?.width}
                  height={size_sq_2?.height}
                />
              )}
              <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                  {dcpt_sq_2}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              {img_sq_3 && size_sq_3 && (
                <Image
                  className="object-cover rounded-lg w-full h-full"
                  src={img_sq_3}
                  alt="Imagen 1 "
                  width={size_sq_3?.width}
                  height={size_sq_3?.height}
                />
              )}
              <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                  {dcpt_sq_3}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              {img_sq_4 && size_sq_4 && (
                <Image
                  className="object-cover rounded-lg w-full h-full"
                  src={img_sq_4}
                  alt="Imagen 1 "
                  width={size_sq_4?.width}
                  height={size_sq_4?.height}
                />
              )}
              <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                  {dcpt_sq_4}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:w-1/2">
            <div className="relative overflow-hidden w-full aspect-[2/1]  rounded-lg shadow-md group">
              {img_vd_1 && size_vd_1 && (
                <Image
                  className="object-cover rounded-lg w-full h-full"
                  src={img_vd_1}
                  alt="Imagen 1 "
                  width={size_vd_1?.width}
                  height={size_vd_1?.height}
                />
              )}
              <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                  {dcpt_vd_1}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden w-full aspect-[2/1]  rounded-lg shadow-md group">
              {img_vd_2 && size_vd_2 && (
                <Image
                  className="object-cover rounded-lg w-full h-full"
                  src={img_vd_2}
                  alt="Imagen 1 "
                  width={size_vd_2?.width}
                  height={size_vd_2?.height}
                />
              )}
              <div className="absolute opacity-0 w-full h-1/4 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-neutral-900 bottom-0 group-hover:opacity-100 group-hover:h-full transform transition-all duration-500 flex items-end">
                <p className="text-white text-center text-xs md:text-sm m-1 sm:m-2 md:m-4 drop-shadow-sm w-full">
                  {dcpt_vd_2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-4 w-full justify-center mt-10 ">
          {ig && (
            <SocialLink href={ig} color={color} textColor="#fff">
              <AiFillInstagram />
            </SocialLink>
          )}
          {fb && (
            <SocialLink href={fb} color={color} textColor="#fff">
              <FaFacebookF />
            </SocialLink>
          )}
          {tiktok && (
            <SocialLink href={tiktok} color={color} textColor="#fff">
              <FaTiktok />
            </SocialLink>
          )}
          {linkedin && (
            <SocialLink href={linkedin} color={color} textColor="#fff">
              <FaLinkedinIn />
            </SocialLink>
          )}
          {web && (
            <SocialLink href={web} color={color} textColor="#fff">
              <FaGlobe />
            </SocialLink>
          )}
        </div>
      </div>
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
  color,
  children,
  textColor,
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
      <div className="absolute w-full h-full top-0 left-0 bg-white opacity-0 group-hover:opacity-100 group-hover:w-full -translate-x-full group-hover:translate-x-0 transition-all duration-500 rounded-full transform" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
};
export default Gallery;
