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
    <div className="relative text-center rounded-xl shadow-md h-full bg-white p-8">
      <div className="text-center mb-6">
        <img
          src={imgUrl}
          alt={jobPosition}
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
        <h3 className="text-[#3D3D3D] text-xl font-medium capitalize">{jobPosition}</h3>
        <span style={{ color: dataColor }} className="font-medium text-lg">S/ {sueldo}</span>
      </div>
      <p className="mb-6 text-[#666]">{jobDescription}</p>
      <div
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
        <Link
         href="/bolsadetrabajo/[slug]/"
         as={`/bolsadetrabajo/${slug}`}
          style={{ color: isEnter ? "white" : dataColor }}
          className={`pl-4 z-10 text-lg`}
        >
          Postular {'>'}
        </Link>
      </div>
      {/* </div>
      <div className=' w-full h-fit rounded-xl  bg-white  p-4 text-center'>
      <h3 className='text-[#444] font-medium'>{jobPosition}</h3>
      <p className='text-[#666] mt-4'>{jobDescription}</p>
      <p className='text-[#888] text-lg'>{sueldo}</p>
      <button style={{ backgroundColor: color }} className='rounded-lg text-white px-8 py-2 font-medium mt-4'>Postular</button> */}
    </div>
  );
};

export default CardJob;
