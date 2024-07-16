import { useState } from "react";
import InfoDrawer from "./info-drawer";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function Drawer() {
  const [hovered, setHovered] = useState("");

  const [info, setInfo] = useState("");

  const [number, setNumber] = useState("");

  const [isRedirecting, setIsRedirecting] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  // todo -> define functions
  const handleHover = (word: any) => {
    setHovered(word);
  };

  const handleUnhover = () => {
    setHovered("");
    setInfo("");
  };

  function handleEnter(word: string) {
    setInfo(word);
    if (word === "Portafolio") {
      setNumber("01");
    } else if (word === "Nosotros") {
      setNumber("02");
    } else if (word === "Servicios") {
      setNumber("03");
    } else if (word === "Blog") {
      setNumber("04");
    }
  }

  function handleMouseLeave() {
    setNumber("");
    setInfo("");
  }

  function handleRedirect(word: string) {
    const newWord = word.toLocaleLowerCase();
    if ("/" + newWord !== pathname) {
      setIsRedirecting(true);
      setTimeout(() => {
        router.push(`/${newWord}`);
      }, 1000);
    }
  }

  const renderWord = (word: any) => {
    return (
      <span
        role="button"
        onClick={() => handleRedirect(word)}
        className={`relative xl:text-[3rem] md:text-[2rem] text-[1.5rem] font-semibold hover:text-black text-gray-500  transition-all ${
          hovered === word && "text-black"
        }`}
        onMouseEnter={() => handleHover(word)}
        // onMouseLeave={handleUnhover}
      >
        {Array.from(word).map((char: any, index) => (
          <span
            onMouseEnter={() => handleEnter(word)}
            onMouseLeave={() => handleMouseLeave}
            key={index}
            className="inline-block"
            style={{
              transitionDelay: `${index * 70}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <div className="overflow-y-scroll bg-white h-full w-screen  animate-fade-right animate-duration-500 animate-ease-linear animate-normal pt-8 md:pt-24 xl:  px-8 md:px-16 z-30">
        <div className="flex justify-between flex-col gap-4 md:gap-0 md:flex-row">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div
                className={`${
                  info === "Portafolio"
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Portafolio")}
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={`${
                  info === "Nosotros"
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Nosotros")}
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={`${
                  info === "Servicios"
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Servicios")}
              </div>
            </div>

            <div className="flex items-center">
              <div
                className={`${
                  info === "Blog"
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Blog")}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col">
              <span className="font-semibold">Escríbenos</span>
              <Link
                href={"mailto:info@gato.com"}
                className="text-slate-600
            hover:underline underline-offset-4 mb-1"
              >
                info@gato.com
              </Link>
              <Link
                href={"mailto:dortega@gato.com"}
                className="text-slate-600
            hover:underline underline-offset-4 mb-1"
              >
                dortega@gato.com
              </Link>
              <Link
                href={"mailto:mjara@gato.com"}
                className="text-slate-600
            hover:underline underline-offset-4 mb-1"
              >
                mjara@gato.com
              </Link>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold">Háblanos</span>
              <Link
                href={"tel:+51 980005257"}
                className="text-slate-600
            hover:underline underline-offset-4 mb-1"
              >
                +51 946380310
              </Link>
              {/* <Link
                href={"tel:+51 980005257"}
                className="text-slate-600 relative inline-block hover:underline underline-offset-4 mb-1"
              >
                +51 980005257
              </Link> */}
              <Link
                href={"tel:+51 952341679"}
                className="text-slate-600
            hover:underline underline-offset-4 mb-1"
              >
                +51 952341679
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href={"/bolsadetrabajo"}
                className="font-semibold text-slate-600 relative inline-block hover:underline underline-offset-4 mb-1"
              >
                Bolsa de trabajo
              </Link>
            </div>
          </div>
        </div>
        {/* information */}
        <div className="mt-12 flex flex-col">
          <div className="min-h-52 w-full ">
            <InfoDrawer word={info}></InfoDrawer>
          </div>
        </div>
      </div>
      {/* --------------- screen black ------------------------------------- */}
      {isRedirecting ? (
        <div
          className={`fixed h-screen w-screen  bg-black z-30  animate-fade-right animate-duration-[800ms] animate-ease-linear animate-normal`}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Drawer;
