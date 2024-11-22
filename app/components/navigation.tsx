"use client";

import { Button, Modal } from "keep-react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query"; //todo-> uninstall this package
import Image from "next/image";

function Navigation({
  isDrawer,
  setIsDrawer,
}: {
  isDrawer: any;
  setIsDrawer: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // const isMdOrLarger = useMediaQuery("(min-width: 1024px)");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className=" flex w-full lg:w-[80px] lg:h-full h-[60px] left-0 top-0 lg:flex-col justify-between  bg-white items-center shadow-lg ">
      <div className="h-full w-full flex lg:flex-col justify-between items-center px-4  lg:py-4">
        <Link href={"/"} className="h-full lg:w-full lg:h-auto">
          <Image
            height={60}
            width={60}
            className="object-contain"
            src="https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png"
            alt="GATO logo"
            title="GATO logo"
          />
        </Link>

        {/* <div className="-rotate-90">
        <span className="w-full ">GATO</span>
      </div> */}
        <Link
          href={"/"}
          className="hidden lg:flex  flex-col justify-center items-center gap-1 text-3xl text-stone-700"
        >
          <span className="font-bold">G</span>
          <span className="font-bold">A</span>
          <span className="font-bold">T</span>
          <span className="font-bold">O</span>
          
        </Link>

        {/* ------------------------------------------ */}
        <div>
          {isDrawer ? (
            <svg
              className="fill-slate-600"
              role="button"
              onClick={() => setIsDrawer(false)}
              xmlns="http://www.w3.org/2000/svg"
              x="20px"
              y="20px"
              width="28"
              height="28"
              viewBox="0 0 70 70"
            >
              <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
            </svg>
          ) : (
            <svg
              className="fill-slate-600"
              role="button"
              onClick={() => setIsDrawer(true)}
              data-testid="geist-icon"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="28"
              height="28"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </div>
        {/* ------------------------------------------ */}

        <Modal isOpen={isOpen} onClose={closeModal}>
          <Modal.Body className="space-y-3">
            <Modal.Content>
              <p>
                Tenemos un canal exclusivo para atender clientes, da click en el
                boton siguiente e inicia una conversación con nosotros
              </p>
              <Typography variant="body1" className="!mb-6">
                <Typography
                  variant="h3"
                  className="mb-2 text-body-1 font-medium text-metal-900"
                >
                  Renderización
                </Typography>
                <Typography
                  variant="body2"
                  className="text-body-4 font-normal text-metal-600"
                ></Typography>
              </Typography>
            </Modal.Content>
            <Modal.Footer>
              <Button
                onClick={closeModal}
                size="sm"
                variant="outline"
                color="secondary"
              >
                Cerrar
              </Button>
              <Button onClick={closeModal} size="sm" color="success">
                Siguiente
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>

      <div className="bg-[#4608AD] flex justify-center items-center  text-center lg:max-h-52 max-w-full lg:overflow-hidden h-full px-4">
        <Link
          href={"/contactanos"}
          className="lg:-rotate-90   flex justify-center items-center lg:min-w-48 "
        >
          <span className="w-full text-white font-semibold">Contáctanos</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
