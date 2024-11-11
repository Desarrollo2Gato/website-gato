import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type ButtonGatoProp = {
  wIcon?: boolean;
  type: "primary" | "secondary";
  bgColor: string;
  bgHover: string;
  textColor: string;
  textHover: string;
  url: string;
  text: string;
  isFull?: boolean;
};
const ButtonGato: React.FC<ButtonGatoProp> = ({
  type = "primary",
  wIcon = false,
  bgColor,
  bgHover,
  textColor,
  textHover,
  url,
  text,
  isFull = false,
}) => {
  const [isHoverd, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <Link
        href={url}
        style={{
          color:
            type === "primary"
              ? isHoverd
                ? textHover
                : textColor
              : isHoverd
              ? textHover
              : textColor,
          backgroundColor: bgColor,
          borderColor: type === "primary" ? bgColor : bgHover,
        }}
        className={`${
          isFull ? "w-full" : ""
        } lg:px-6 lg:py-2 px-4 py-2  text-sm md:text-base xl:text-lg rounded-full  border-2  font-semibold relative transition-all duration-700 ease-in-out`}
        // onClick={() => redirect(url)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{ backgroundColor: bgHover }}
          className={`absolute top-0 left-0 rounded-full h-full aspect-square  transform transition-all duration-700 ease-in-out ${
            isHoverd ? "w-full opacity-100" : "opacity-0  w-10"
          }`}
        ></div>{" "}
        <span className="relative flex gap-2 items-center justify-center">
          {text} {wIcon && <FaArrowRightLong />}
        </span>
      </Link>
    </>
  );
};

export default ButtonGato;
