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
          <img
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
            <span className="text-white text-2xl md:text-3xl font-semibold">
              {title}
            </span>
          </div>
        </div>

        <div
        style={{ backgroundColor: color }}
          className={`back absolute top-0 left-0 z-[1]  w-full h-full flex justify-center items-center flex-col p-3  text-white text-center transition-all duration-600 origin-center rounded-xl`}
        >
          <span className="text-2xl md:text-3xl mb-2 font-semibold">
            {title}
          </span>
          <p className="text-center w-full lg:w4/5 xl:w-3/5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default cardSolution;
