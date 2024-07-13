"use client";

import { RevealWrapper } from "next-reveal";

function Section1() {
  return (
    <div className="w-full  bg-white">
      <div className="w-full flex flex-col max-w-[1920px] mx-auto  xl:px-32 md:px-24 px-8 py-8 lg:py-16">
        <div className="w-full grid md:grid-cols-2 grid-cols-1   md:gap-10 gap-8">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <p className="text-xl font-semibold md:text-3xl ">
              Ayudamos a las marcas a resolver grandes desafíos y lograr mejores
              productos digitales.
            </p>
          </RevealWrapper>

          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <p className="md:text-xl font-light">
              Con un equipo de expertos dedicados, nuestro objetivo es ayudarte
              a mantener en claro tus objetivos y superar cualquier obstáculo
              que se interponga en tu camino hacia el progreso. Únete a nosotros
              en esta emocionante aventura, donde nuestro principal propósito es
              el éxito de tu proyecto.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
}

export default Section1;
