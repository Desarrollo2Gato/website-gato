import React from "react";

type Props = {
  color: string;
  paso: number;
  title: string;
  description: string;
  icono: string;
};

const processCard = (prop: Props) => {
  const mainColor = prop.color;
  return (
    <div className="flex gap-16 h-full items-center w-full">
      <div className="hidden h-full  w-1 relative lg:block ">
        <div
          className={` h-full w-1 block`}
          style={{ backgroundColor: mainColor }}
        >
          <div
            style={{ borderColor: mainColor }}
            className={`absolute  top-1/2 -left-[calc(50%-4px)]  transform  -translate-y-1/2 -translate-x-[calc(50%+2px)] w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] border rounded-full flex justify-center items-center bg-white`}
          >
            <div
              style={{ backgroundColor: mainColor }}
              className={`w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rounded-full`}
            ></div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="flex lg:items-center h-auto my-10 w-full">
        {/* triangulo */}
        <div
          className="hidden lg:block w-0 h-0"
          style={{
            borderTopWidth: "16px",
            borderTopStyle: "solid",
            borderTopColor: "transparent",
            borderRightWidth: "16px",
            borderRightStyle: "solid",
            borderRightColor: mainColor,
            borderBottomWidth: "16px",
            borderBottomStyle: "solid",
            borderBottomColor: "transparent",
          }}
        ></div>
        {/* info card */}
        <div
          style={{ backgroundColor: mainColor }}
          className={`h-auto md:h-fit w-full justify-between flex flex-col md:flex-row gap-4 2xl:gap-6 p-4 2xl:p-8 rounded-xl relative lg:items-center`}
        >
          {/* paso */}
          <div
            style={{ color: mainColor }}
            className={`w-[120px] md:w-[25%] lg:w-[50%] 2xl:w-[25%]`}
          >
            <div className="w-full h-full aspect-square flex flex-col justify-center items-center bg-white rounded-md p-4 gap-2 lg:gap-4">
              <span className="font-bold text-2xl 2xl:text-[2.5rem]">Paso</span>
              <span className="font-black text-4xl 2xl:text-[3.5rem]">
                {prop.paso}
              </span>
            </div>
          </div>
          {/* titulo y descripcion */}
          <div className="h-auto md:h-full text-white flex flex-col gap-4 2xl:gap-6 w-full justify-start flex-grow">
            <h3 className="font-bold text-white text-2xl 2xl:text-[2.2rem]">
              {prop.title}
            </h3>
            <p className="font-light lg:text-[1rem] 2xl:text-[1.5rem] ">
              {prop.description}
            </p>
          </div>
          {/* icono */}
          <div
            className="h-[100px] lg:h-[140px] w-auto aspect-square md:my-auto"
            dangerouslySetInnerHTML={{
              __html: `
                ${prop.icono}
              `,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default processCard;
