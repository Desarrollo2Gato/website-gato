<div className="xl:px-24 md:px-12 sm:px-12  px-8 flex   pt-8 relative">
        {position === 0 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right ">
              <h2 className={`${sizing.title} text-black w-full font-semibold`}>
                Agencia de{" "}
              </h2>

              <div className="flex flex-col gap-2">
                <span
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}

                  <TypeAnimation
                    className={`${bg_colors[position]}`}
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      words[position],
                      1000,
                    ]}
                    speed={2}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start xl:mt-16  md:mt-8 mt-4 ">
              <div className="w-full flex justify-between xl:pr-24 pr-8">
                <p
                  // className={`font-light ${sizing.description} text-[#7A7678]`}
                  className={`font-light ${sizing.description} text-white md:leading-tight`}
                >
                  <Typewriter
                    words={[
                      "En Genius, somos expertos en el desarrollo de software a medida que impulsa la innovación y la eficiencia en tu empresa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {position === 1 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col  animate-fade-right  ">
              <h2 className={`${sizing.title} text-black w-full font-semibold`}>
                Agencia de{" "}
              </h2>

              <div className="flex flex-col gap-2">
                <span
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}

                  <TypeAnimation
                    className={`${bg_colors[position]}`}
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      words[position],
                      1000,
                    ]}
                    speed={2}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start xl:mt-16  md:mt-8 mt-4 ">
              <div className="w-full flex justify-between xl:pr-24 pr-8">
                <p
                  className={`font-light ${sizing.description} text-white  md:leading-tight`}
                >
                  <Typewriter
                    words={[
                      "En Genius, nos especializamos en el desarrollo web de vanguardia que potencia la presencia en línea de tu empresa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {position === 2 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right animate-duration-500  ">
              <h2 className={`${sizing.title} text-black w-full font-semibold`}>
                Agencia de{" "}
              </h2>
              <div className="flex flex-col gap-2">
                <span
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}

                  <TypeAnimation
                    className={`${bg_colors[position]}`}
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      words[position],
                      1000,
                    ]}
                    speed={2}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start xl:mt-16  md:mt-8 mt-4 ">
              <div className="w-full flex justify-between xl:pr-24 pr-8">
                <p
                  className={`font-light ${sizing.description} text-white  md:leading-tight`}
                >
                  <Typewriter
                    words={[
                      "En Genius, te ofrecemos orientación experta para optimizar tus estrategias de marketing y maximizar el retorno de inversión en cada iniciativa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {/* //todo data about company */}
        {/* <div className=" p- text-slate-700 z-0  flex flex-col gap-8 text-right">
          <div className="flex flex-col">
            <span className="text-[4rem] ">
              {" "}
              <CountUp end={40} />
            </span>
            <span className="opacity-80  font-light">Años en el mercado</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[4rem] ">
              <CountUp end={300} />
            </span>
            <span className="opacity-80  font-light">
              {" "}
              Proyectos realizados
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[4rem] ">
              <CountUp end={10} />
            </span>
            <span className="opacity-80  font-light">Colaboradores</span>
          </div>
        </div> */}

        {/* <div className=" hidden md:flex text-slate-700 z-0     text-right  justify-center  ">
          <img className="w-[40rem] floating-image" src="banner.png" alt="" />
        </div> */}

        {/*  */}
      </div>
