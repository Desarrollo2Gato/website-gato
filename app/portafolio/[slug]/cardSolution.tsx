import Image from "next/image";
import React from "react";
interface cardProps {
  color: string;
  title: string;
  description: string;
  imgSrc: string;
  svgPath: string;
}
const cardSolution: React.FC<cardProps> = ({
  color,
  title,
  description,
  imgSrc,
  svgPath,
}) => {
  return (
    <div className="container min-w-full w-auto md:h-[550px] h-[450px]">
      <div className="card w-full h-full relative group shadow-md transition-all duration-500 rounded-xl bg-black">
        <div className="front absolute top-0 left-0 z-[2] w-full h-full ">
          <Image
            width={700}
            height={1000}
            loading="lazy"
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center flex-col rounded-xl">
            <div
              className="h-16 lg:w-[100px] lg:h-auto mb-6"
              dangerouslySetInnerHTML={{
                __html: `
                ${svgPath}
              `,
              }}
            />
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              {title}
            </h3>
          </div>
        </div>

        <div
          style={{ backgroundColor: color }}
          className={`back absolute top-0 left-0 z-[1]  w-full h-full  p-2  text-white text-center transition-all duration-600 origin-center rounded-xl `}
        >
          <div className="w-full h-full p-1 md:p-4 lg:p-6 flex justify-center items-center flex-col overflow-y-auto">
            <h4 className="text-2xl md:text-3xl mb-2 font-semibold ">
              {title}
            </h4>
            <p className="text-center w-full ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardSolution;
