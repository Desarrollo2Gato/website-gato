import React from "react";
import Star from "../components/job/star";
import Image from "next/image";

interface Props {
  profile: string;
  name: string;
  role: string;
  testimonio: string;
  score: number;
}
const Testimonios: React.FC<Props> = ({
  profile,
  name,
  role,
  testimonio,
  score,
}) => {
  const renderStars = (score: number) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <Star key={index} filled={index < score} />
    ));
  };

  return (
    <div className="w-full relative bg-[#6D28D9] text-white h-auto  rounded-2xl shadow-lg ">
      <div className=" px-6 py-8">
        <div className="flex gap-4">
          <Image
            width={48}
            height={48}
            className=" relative  h-12 w-12 object-cover rounded-[100%] shadow-sm"
            src={profile}
            alt={name}
            title={name}
          />
          <div className="flex flex-wrap justify-start items-start gap-2 w-full">
            <div className="flex flex-col gap-1">
              <span className="text-xl">{name}</span>{" "}
              <span className="text-sm">{role}</span>
            </div>
            <div className="flex h-full justify-center items-start pt-2">
              {renderStars(score)}
            </div>
          </div>
        </div>
        <p className="mt-2">{testimonio}</p>
      </div>
    </div>
  );
};

export default Testimonios;
