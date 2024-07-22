import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_areas, api_vacantes } from "../data/enviroments/api.enviroment";
import hexToRgba from "hex-to-rgba";
import Link from "next/link";
import Image from "next/image";
type Props = {
  idColor: number;
  imgUrl: string;
  jobPosition: string;
  jobDescription: string;
  slug: string;
};

interface Area {
  id: number;
  name: string;
  acf: {
    color: string;
  };
}

const CardJob: React.FC<Props> = ({
  idColor,
  imgUrl,
  jobPosition,
  jobDescription,
  slug,
}) => {
  const [area, setArea] = useState<Area | null>(null);
  const [dataColor, setColor] = useState("");
  const [isEnter, setIsEnter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEnter() {
    setIsEnter(true);
  }

  function handleLeave() {
    setIsEnter(false);
  }

  const fetchColor = async () => {
    try {
      const response = await axios.get(
        `${api_areas}/${idColor}?per_page=100`
      );
      setArea(response.data)
      setColor(response.data.acf.color);
    } catch (error) {
      console.error("Error fetching color data:", error);
    }
  };

  useEffect(() => {
    fetchColor();
  }, [idColor]);

  return (
    <div className="relative flex flex-col justify-between text-center rounded-xl shadow-md h-full bg-white p-8">
      <div className="text-center mb-6">
        <Image
          width={80}
          height={80}
          loading="lazy"
          src={imgUrl}
          alt={"Imagen relacionada a " + jobPosition}
          title={"Imagen sobre " + jobPosition}
          className=" shadow-lg rounded-[100%] h-20 w-20 mx-auto  object-cover mb-4"
        />
        {area && (
          <span
            style={{
              color: dataColor,
              backgroundColor: hexToRgba(dataColor, 0.2),
            }}
            className="px-4 py-0.5 text-sm font-medium rounded-full inline-block mx-auto"
          >
            {area.name}
          </span>
        )}
      </div>
      <div className="mb-6">
        <h3 className="text-[#3D3D3D] text-xl font-medium capitalize">
          {jobPosition}
        </h3>
        {/* <span style={{ color: dataColor }} className="font-medium text-lg">
          S/ {sueldo}
        </span> */}
      </div>
      <p className="mb-6 text-[#666]">{jobDescription}</p>
      <Link
        href="/bolsa-de-trabajo/[slug]/"
        as={`/bolsa-de-trabajo/${slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        aria-label={`Ver vacante de ${jobPosition}`}
        role="button"
        className={`mx-auto relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
          isEnter && " transition-all"
        } transition-all`}
      >
        <div
          style={{
            backgroundColor: dataColor,
            opacity: isEnter ? 1 : 0.2,
          }}
          className={`rounded-full w-12 h-full absolute transition-all duration-300 ${
            isEnter ? "w-full" : ""
          }`}
        ></div>
        <div
          style={{ color: isEnter ? "white" : dataColor }}
          className={`pl-4 z-[1] text-lg`}
        >
          Postular {">"}
        </div>
      </Link>
    </div>
  );
};

export default CardJob;
