import React, { MouseEventHandler, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramEmbed from "./reel";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const TestimoniosSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            fill="#6D28D9"
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
            fill="#6D28D9"
          />
        </svg>
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
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
        <div className="h-fit">
          <InstagramEmbed url="https://www.instagram.com/reel/C7SNb2HiNUY/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
        </div>
        <div className="h-fit">
          <InstagramEmbed url="https://www.instagram.com/reel/C7SNb2HiNUY/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
        </div>
        <div className="h-fit">
          <InstagramEmbed url="https://www.instagram.com/reel/C7SNb2HiNUY/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
        </div>
        <div className="h-fit">
          <InstagramEmbed url="https://www.instagram.com/reel/C7SNb2HiNUY/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
        </div>
      </Slider>
    </div>
  );
};

export default TestimoniosSlider;