import CardSolution from "./cardSolution";
import { RevealWrapper } from "next-reveal";

import React from "react";
interface ProcessProps {
  color: string;
  analisis: string;
  diseño: string;
  desarrollo: string;
  prueba: string;
  despliegue: string;
}

const process: React.FC<ProcessProps> = ({
  color,
  analisis,
  diseño,
  desarrollo,
  prueba,
  despliegue,
}) => {
  const cardContents = [
    {
      title: "Análisis",
      description: analisis,
      imgSrc:
        "https://i.pinimg.com/originals/a2/2e/fe/a22efe9d48ed268e8ecd621bedab507a.jpg",
      svgPath: `<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5C5 3.61719 3.88281 2.5 2.5 2.5C1.11719 2.5 0 3.61719 0 5V31.25C0 34.7031 2.79687 37.5 6.25 37.5H37.5C38.8828 37.5 40 36.3828 40 35C40 33.6172 38.8828 32.5 37.5 32.5H6.25C5.5625 32.5 5 31.9375 5 31.25V5ZM36.7656 11.7656C37.7422 10.7891 37.7422 9.20313 36.7656 8.22656C35.7891 7.25 34.2031 7.25 33.2266 8.22656L25 16.4609L20.5156 11.9766C19.5391 11 17.9531 11 16.9766 11.9766L8.22656 20.7266C7.25 21.7031 7.25 23.2891 8.22656 24.2656C9.20313 25.2422 10.7891 25.2422 11.7656 24.2656L18.75 17.2891L23.2344 21.7734C24.2109 22.75 25.7969 22.75 26.7734 21.7734L36.7734 11.7734L36.7656 11.7656Z" fill="white"/>
      </svg>`,
    },
    {
      title: "Diseño",
      description: diseño,
      imgSrc:
        "https://i.pinimg.com/736x/7b/4a/9d/7b4a9d33c3aadb07bb7c41f17a290523.jpg",
      svgPath: `<svg width="100%" height="100%" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_157_786)">
      <path d="M26.5078 28.6797C28.6406 28.375 30.5625 27.1641 31.7578 25.3281L44.3906 5.78907C45.375 4.26563 45.125 2.25001 43.7969 1.00782C42.4687 -0.23437 40.4453 -0.343745 38.9922 0.750005L20.5 14.625C18.625 16.0313 17.5156 18.2266 17.5 20.5703L26.5078 28.6797ZM24.9766 30.6641L15.9141 22.5078C11.2422 22.6797 7.5 26.5313 7.5 31.25C7.5 31.5547 7.51562 31.8594 7.54687 32.1563C7.6875 33.5234 6.75 35 5.375 35H5C3.61719 35 2.5 36.1172 2.5 37.5C2.5 38.8828 3.61719 40 5 40H16.25C21.0859 40 25 36.0859 25 31.25C25 31.0547 24.9922 30.8594 24.9844 30.6641H24.9766Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_157_786">
      <rect width="45" height="40" fill="white"/>
      </clipPath>
      </defs>
      </svg>`,
    },
    {
      title: "Desarrollo",
      description: desarrollo,
      imgSrc:
        "https://i.pinimg.com/originals/18/79/be/1879bebbfa4f2f1215bac7abf55b679e.jpg",
      svgPath: `<svg width="100%" height="100%" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_157_788)">
      <path d="M30.6875 0.0937366C29.3594 -0.289076 27.9766 0.484362 27.5938 1.81249L17.5938 36.8125C17.2109 38.1406 17.9844 39.5234 19.3125 39.9062C20.6406 40.289 22.0234 39.5156 22.4062 38.1875L32.4062 3.18749C32.7891 1.85936 32.0156 0.476549 30.6875 0.0937366ZM36.9844 9.47655C36.0078 10.4531 36.0078 12.039 36.9844 13.0156L43.9609 20L36.9766 26.9844C36 27.9609 36 29.5469 36.9766 30.5234C37.9531 31.5 39.5391 31.5 40.5156 30.5234L49.2656 21.7734C50.2422 20.7969 50.2422 19.2109 49.2656 18.2344L40.5156 9.48436C39.5391 8.5078 37.9531 8.5078 36.9766 9.48436L36.9844 9.47655ZM13.0234 9.47655C12.0469 8.49999 10.4609 8.49999 9.48438 9.47655L0.734375 18.2265C-0.242188 19.2031 -0.242188 20.7891 0.734375 21.7656L9.48438 30.5156C10.4609 31.4922 12.0469 31.4922 13.0234 30.5156C14 29.5391 14 27.9531 13.0234 26.9765L6.03906 20L13.0234 13.0156C14 12.039 14 10.4531 13.0234 9.47655Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_157_788">
      <rect width="50" height="40" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
    },
  ];
  const cardContents2 = [
    {
      title: "Prueba",
      description: prueba,
      imgSrc:
        "https://i.pinimg.com/originals/ef/88/2d/ef882d1548b0b76160b3caf2081f729c.jpg",
      svgPath: `<svg width="100%" height="100%" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3359 3.33594L15.3906 4.4375C15.1562 4.52344 15 4.75 15 5C15 5.25 15.1562 5.47656 15.3906 5.5625L18.3359 6.66406L19.4375 9.60938C19.5234 9.84375 19.75 10 20 10C20.25 10 20.4766 9.84375 20.5625 9.60938L21.6641 6.66406L24.6094 5.5625C24.8438 5.47656 25 5.25 25 5C25 4.75 24.8438 4.52344 24.6094 4.4375L21.6641 3.33594L20.5625 0.390625C20.4766 0.15625 20.25 0 20 0C19.75 0 19.5234 0.15625 19.4375 0.390625L18.3359 3.33594ZM3.60156 30.8906C2.14062 32.3516 2.14062 34.7266 3.60156 36.1953L6.30469 38.8984C7.76562 40.3594 10.1406 40.3594 11.6094 38.8984L41.3984 9.10156C42.8594 7.64062 42.8594 5.26562 41.3984 3.79687L38.6953 1.10156C37.2344 -0.359375 34.8594 -0.359375 33.3906 1.10156L3.60156 30.8906ZM37.8594 6.45312L29.6563 14.6563L27.8359 12.8359L36.0391 4.63281L37.8594 6.45312ZM0.585938 9.15625C0.234375 9.28906 0 9.625 0 10C0 10.375 0.234375 10.7109 0.585938 10.8438L5 12.5L6.65625 16.9141C6.78906 17.2656 7.125 17.5 7.5 17.5C7.875 17.5 8.21094 17.2656 8.34375 16.9141L10 12.5L14.4141 10.8438C14.7656 10.7109 15 10.375 15 10C15 9.625 14.7656 9.28906 14.4141 9.15625L10 7.5L8.34375 3.08594C8.21094 2.73438 7.875 2.5 7.5 2.5C7.125 2.5 6.78906 2.73438 6.65625 3.08594L5 7.5L0.585938 9.15625ZM28.0859 29.1563C27.7344 29.2891 27.5 29.625 27.5 30C27.5 30.375 27.7344 30.7109 28.0859 30.8437L32.5 32.5L34.1563 36.9141C34.2891 37.2656 34.625 37.5 35 37.5C35.375 37.5 35.7109 37.2656 35.8437 36.9141L37.5 32.5L41.9141 30.8437C42.2656 30.7109 42.5 30.375 42.5 30C42.5 29.625 42.2656 29.2891 41.9141 29.1563L37.5 27.5L35.8437 23.0859C35.7109 22.7344 35.375 22.5 35 22.5C34.625 22.5 34.2891 22.7344 34.1563 23.0859L32.5 27.5L28.0859 29.1563Z" fill="white"/>
      </svg>`,
    },
    {
      title: "Despliegue",
      description: despliegue,
      imgSrc:
        "https://i.pinimg.com/originals/f9/39/27/f939276508cdb01eeb36d2b8b03fbfd2.jpg",
      svgPath: `<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_157_792)">
      <path d="M1.25781 20.3281C-0.507812 21.3359 -0.343749 24.0234 1.53906 24.8047L12.5 29.375V37.4453C12.5 38.8594 13.6406 40 15.0547 40C15.8125 40 16.5313 39.6641 17.0156 39.0781L21.8594 33.2734L31.5391 37.3047C33.0156 37.9219 34.7266 36.9531 34.9688 35.375L39.9688 2.87499C40.1172 1.92968 39.7031 0.976556 38.9141 0.437494C38.125 -0.101569 37.0938 -0.148444 36.2578 0.328119L1.25781 20.3281ZM5.32813 22.3203L32.0078 7.07812L14.8516 26.25L14.9453 26.3281L5.32813 22.3203ZM31.5078 33.2344L18.4922 27.8047L35.2187 9.10937L31.5078 33.2344Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_157_792">
      <rect width="40" height="40" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
    },
  ];

  return (
    <div>
      <div className=" w-full flex flex-col xl:px-32 lg:px-16 px-8 py-8 lg:py-16 gap-4 xl:gap-10 lg:gap-6 bg-gray-100">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 xl:gap-12">
          {cardContents.map((content, index) => (
            <CardSolution
              key={index}
              color={color}
              title={content.title}
              description={content.description}
              imgSrc={content.imgSrc}
              svgPath={content.svgPath}
            />
          ))}
        </div>
        <div className=" lg:max-w-[960px] mx-auto min-w-full lg:min-w-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 xl:gap-12">
          {cardContents2.map((content, index) => (
            <RevealWrapper duration={1500} origin="left">
              <CardSolution
                color={color}
                key={index}
                title={content.title}
                description={content.description}
                imgSrc={content.imgSrc}
                svgPath={content.svgPath}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default process;
