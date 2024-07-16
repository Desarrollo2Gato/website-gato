import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_vacantes } from "../data/enviroments/api.enviroment";
import hexToRgba from "hex-to-rgba";
import Link from "next/link";
type Props = {
  idColor: number;
  imgUrl: string;
  jobPosition: string;
  jobDescription: string;
  sueldo: string;
  slug: string;
};

interface Area {
  id: number;
  acf: {
    name: string;
    color: string;
  };
}

const CardJob: React.FC<Props> = ({
  idColor,
  imgUrl,
  jobPosition,
  jobDescription,
  sueldo,
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
        `https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/area/${idColor}`
      );
      const fetchedArea = response.data as Area;
      console.log(response.data);
      setArea(fetchedArea);
      setColor(fetchedArea.acf.color);
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
        <img
          src={imgUrl}
          alt={"Imagen relacionada a " + jobPosition}
          title={"Imagen sobre " + jobPosition}
          className=" shadow-lg rounded-[100%] h-20 w-20 mx-auto  object-cover mb-4"
        />
        {area && (
          <span
            style={{
              color: dataColor,
              backgroundColor: hexToRgba(dataColor, 0.09),
            }}
            className="px-4 py-0.5 text-sm font-medium rounded-full inline-block mx-auto"
          >
            {area.acf.name}
          </span>
        )}
      </div>
      <div className="mb-6">
        <h3 className="text-[#3D3D3D] text-xl font-medium capitalize">
          {jobPosition}
        </h3>
        <span style={{ color: dataColor }} className="font-medium text-lg">
          S/ {sueldo}
        </span>
      </div>
      <p className="mb-6 text-[#666]">{jobDescription}</p>
      <Link
        href="/bolsadetrabajo/[slug]/"
        as={`/bolsadetrabajo/${slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
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
          className={`pl-4 z-10 text-lg`}
        >
          Postular {">"}
        </div>
      </Link>
    </div>
  );
};

export default CardJob;
