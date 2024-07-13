import React, { MouseEventHandler, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Plan } from "./iPlan";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

type SliderPlansProps = {
  color: string;
  data: Plan[];
  handleViewPlan: (plan: Plan) => void;
};

const sliderPlans = ({ color, data, handleViewPlan }: SliderPlansProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainColor = color;


  function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      >
        <svg
          className="h-10 -translate-y-full"
          width="100%"
          height="100%"
          viewBox="0 0 33 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7917 46.2361C33.4028 43.8931 33.4028 40.0881 31.7917 37.7452L7.04657 1.75723C5.43556 -0.585747 2.81927 -0.585747 1.20826 1.75723C-0.402756 4.10019 -0.402756 7.90517 1.20826 10.2481L23.0407 42L1.22115 73.7519C-0.38987 76.0948 -0.38987 79.8998 1.22115 82.2428C2.83216 84.5857 5.44845 84.5857 7.05946 82.2428L31.8046 46.2548L31.7917 46.2361Z"
            fill={mainColor}
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <svg
          className="rotate-180 h-10 -translate-y-full"
          width="100%"
          height="100%"
          viewBox="0 0 33 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7917 46.2361C33.4028 43.8931 33.4028 40.0881 31.7917 37.7452L7.04657 1.75723C5.43556 -0.585747 2.81927 -0.585747 1.20826 1.75723C-0.402756 4.10019 -0.402756 7.90517 1.20826 10.2481L23.0407 42L1.22115 73.7519C-0.38987 76.0948 -0.38987 79.8998 1.22115 82.2428C2.83216 84.5857 5.44845 84.5857 7.05946 82.2428L31.8046 46.2548L31.7917 46.2361Z"
            fill={mainColor}
          />
        </svg>
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 4,
    speed: 500,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [

      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          infinite: true,
        },
      },
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings} className="">
        {data.map((item, index) => (
          
          <div key={index} className="max-w-full flex flex-col gap-5 h-fit">
            <div
              style={{ borderColor: mainColor }} 
              className={` border-2  rounded-lg p-2 md:p-6 flex flex-col justify-center items-center gap-5 max-w-full  h-auto aspect-square`}
            >
              <h3
              style={{ backgroundColor: mainColor }} 
                className={`uppercase font-bold text-white text-[1.1rem] lg:text-[1.4rem] shadow-xl w-full text-center rounded-md p-2 truncate`}
              >
                {item.name}
              </h3>
              <p style={{ color: mainColor }}  className={` text-[1rem] lg:text-[1.2rem] text-center truncate w-full`}>
                {item.descriptionCorta}
              </p>
              <div
                style={{ color: mainColor }}
                className={`w-full flex flex-col items-center justify-center text-[${mainColor}]`}
              >
                <span className="font-bold text-[1rem] lg:text-[1.3rem]  text-center uppercase">{item.word}</span>
                <div className="flex font-black items-center">
                  <span className="text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.8rem]">S/</span>
                  <span className="text-[2.5rem] md:text-[3rem] lg:text-[2.8rem] 2xl:text-[3.2rem]">{item.price}</span>
                  <span className="text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.8rem]">.00</span>
                </div>
              </div>
            </div>
            <div
              className={`detalle w-full uppercase bg-[${mainColor}] font-bold text-white text-xl shadow-xl w-full rounded-md py-2 capitalize flex justify-between px-6 mt-4 items-center`}
              onClick={() => handleViewPlan(item)}
            >
              ver plan
              <svg
                className="max-w-[40px]"
                width="100%"
                height="100%"
                viewBox="0 0 80 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.4142 16.4142C80.1953 15.6332 80.1953 14.3668 79.4142 13.5858L66.6863 0.85787C65.9052 0.0768208 64.6389 0.0768207 63.8579 0.857869C63.0768 1.63892 63.0768 2.90525 63.8579 3.6863L75.1716 15L63.8579 26.3137C63.0768 27.0948 63.0768 28.3611 63.8579 29.1421C64.6389 29.9232 65.9052 29.9232 66.6863 29.1421L79.4142 16.4142ZM-1.56913e-07 17L78 17L78 13L1.56913e-07 13L-1.56913e-07 17Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default sliderPlans;
