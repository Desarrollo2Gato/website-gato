import { IImage } from "@/app/types";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type Tsubservices = {
  id: string;
  title: ReactNode;
  name: string;
  description: string;
  items: string[];
  process?: string[];
};

type subServicesProps = {
  subservices: Tsubservices[];
  description: string;
  img: IImage;
};
const SubServices: React.FC<subServicesProps> = ({
  subservices,
  description,
  img,
}) => {
  const [selectedSubserviceId, setSelectedSubserviceId] = useState<string>(
    subservices[0].id
  );

  const [selectedSubservice, setSelectedSubservice] = useState<Tsubservices>(
    subservices[0]
  );

  const handleSubService = (id: string) => {
    setSelectedSubserviceId(id);
    const infoSubService = subservices.find((item) => item.id === id);
    if (infoSubService) {
      setSelectedSubservice(infoSubService);
    }
  };

  return (
    <section className="bg-zinc-50 w-full">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 ">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6">
            ¿Qué te <span className="text-[#9353B6]">ofrecemos</span>?
          </h2>
          <p className="text-stone-600 md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            {description}
          </p>
        </div>
        {/* subservices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 border-b-2 border-zinc-200 pb-8">
          {subservices.map((item, index) => (
            <div
              role="button"
              onClick={() => handleSubService(item.id)}
              key={index}
              className={`flex gap-2 border-2 ${
                item.id === selectedSubserviceId
                  ? "border-[#9353B6]"
                  : "border-white"
              }  bg-white rounded-full hover:shadow-lg shadow-md px-6 py-3 items-center transition-all duration-500 `}
            >
              <span>
                <IoMdCheckmarkCircleOutline
                  className={`${
                    item.id === selectedSubserviceId
                      ? "text-[#9353B6]"
                      : "text-stone-500"
                  } text-lg lg:text-xl`}
                />
              </span>
              <span
                className={`${
                  item.id === selectedSubserviceId
                    ? "text-[#9353B6]"
                    : "text-stone-500"
                } font-semibold capitalize`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="py-8">
          {selectedSubservice && (
            <>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/2 lg:w-[60%]">
                  <div className="text-center mb-8 ">
                    <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6 text-left">
                      {selectedSubservice.title}
                    </h2>
                    <p className="text-stone-500 text-left text-lg">
                      {selectedSubservice.description}
                    </p>
                  </div>
                  <ul className="">
                    {selectedSubservice.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 flex-row items-start text-[#9353B6] mb-2"
                      >
                        <span>
                          <IoMdCheckmarkCircleOutline className="text-[#9353B6] text-lg mt-1" />
                        </span>
                        <span className="text-stone-500 ">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-[40%] flex items-center ">
                  <Image
                    className="aspect-auto object-contain h-full w-auto max-w-full"
                    src={img.url}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                    title={img.title}
                  />
                </div>
              </div>
              {selectedSubservice.process &&
                selectedSubservice.process.length > 0 && (
                  <div>
                    <h3 className="font-bold text-stone-500 mb-4">
                      ¿Cómo lo hacemos?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedSubservice.process.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-full flex items-center  shadow-md h-auto"
                        >
                          <span className="flex justify-center items-center h-full w-auto  text-center text-white bg-[#9353B6] p-4 text-xl  font-semibold rounded-l-full">
                            0{index + 1}
                          </span>
                          <p className="px-2 md:px-4 py-2">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default SubServices;
