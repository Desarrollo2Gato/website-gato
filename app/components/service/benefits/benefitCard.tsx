import { RevealWrapper } from 'next-reveal';
import React from 'react'

type Props ={
    title: string;
    content: string;
    color: string;
}

const benefitCard = (prop:Props) => {
  const mainColor = prop.color
  return (
    <div>
      <RevealWrapper origin='left' duration={1500} className={"flex gap-4 items-start"}>
      <div className={`p-4 h-[60px] aspect-square bg-[${mainColor}] bg-opacity-20 rounded-lg `}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28571 3.21429C3.69643 3.21429 3.21429 3.69643 3.21429 4.28571V25.7143C3.21429 26.3036 3.69643 26.7857 4.28571 26.7857H25.7143C26.3036 26.7857 26.7857 26.3036 26.7857 25.7143V4.28571C26.7857 3.69643 26.3036 3.21429 25.7143 3.21429H4.28571ZM0 4.28571C0 1.92188 1.92188 0 4.28571 0H25.7143C28.0781 0 30 1.92188 30 4.28571V25.7143C30 28.0781 28.0781 30 25.7143 30H4.28571C1.92188 30 0 28.0781 0 25.7143V4.28571ZM22.567 11.8527L13.9955 20.4241C13.3661 21.0536 12.3482 21.0536 11.7254 20.4241L7.43973 16.1384C6.81027 15.5089 6.81027 14.4911 7.43973 13.8683C8.0692 13.2455 9.08705 13.2388 9.70982 13.8683L12.8571 17.0156L20.2902 9.57589C20.9196 8.94643 21.9375 8.94643 22.5603 9.57589C23.183 10.2054 23.1897 11.2232 22.5603 11.846L22.567 11.8527Z"
                  fill={mainColor}
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4 text-[#666666]">
              <h3 className="font-bold capitalize text-xl">{prop.title}</h3>
              <p className="font-light">
                {prop.content}
              </p>
            </div>
      </RevealWrapper>
            
          </div>
  )
}

export default benefitCard
