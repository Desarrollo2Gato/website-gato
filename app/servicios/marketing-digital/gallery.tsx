import Image from "next/image";

import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { IImage } from "@/app/types";
import ModalImg from "@/app/components/modalImg";

type GalleryProps = {
  gallery: IImage[];
};
const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<IImage | null>(null);

  const handleImageClick = (image: IImage) => {
    setSelectedImg(image);
    setOpen(true);
  };

  return (
    <section id="resultados" className="bg-zinc-50 text-stone-700">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 pt-16 pb-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-4">
            Galeria de{" "}
            <span style={{ color: "#9353B6" }} className={``}>
              fotos
            </span>
          </h2>
          <p className="text-stone-500 md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            Conoce nuestro trabajo
          </p>
        </div>
        {/* galeria */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {gallery.map((image) => (
            <div
              key={image.id}
              className="w-full aspect-square rounded-lg shadow-sm overflow-hidden"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                title={image.title}
                className="object-cover w-full h-[300px] rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div> */}
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
