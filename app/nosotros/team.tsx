"use client";

import { Modal } from "keep-react";
import Typography from "@mui/material/Typography";
import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_trabajador } from "../data/enviroments/api.enviroment";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface Worker {
  acf: {
    tipo_de_trabajador: string;
    imagen: string;
    rol: string;
    nombre: string;
    area: number;
    fb: string;
    ig: string;
    in: string;
    education: string;
  };
}
function Team() {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    nombre: "",
    imagen: "",
    rol: "",
    description: "",
    fb: "",
    ig: "",
    in: "",
    education: "",
  });
  const [workers, setWorkers] = useState<Worker[]>([]);

  const fetchData = async () => {
    try {
      const [workersResponse] = await Promise.all([
        axios.get(`${api_trabajador}`),
      ]);
      setWorkers(workersResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const ceoWorkers = workers.filter(
    (worker) => worker.acf.tipo_de_trabajador === "ceo"
  );
  const filteredWorkers = workers.filter(
    (worker) => worker.acf.tipo_de_trabajador !== "ceo"
  );
  console.log(filteredWorkers);


  const workersByArea: { [key: number]: Worker[] } = {};

  filteredWorkers.forEach(worker => {
    const area = worker.acf.area;
    if (!workersByArea[area]) {
      workersByArea[area] = [];
    }
    workersByArea[area].push(worker);
  });
  const groupedWorkers = Object.values(workersByArea).flat();

  const openModal = (data: any) => {
    setData(data);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto xl:px-24 md:px-16 px-8  flex flex-col pt-8 pb-16">
        <div className="flex justify-center">
          <RevealWrapper origin="top" duration={1000}>
            <h2
              className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-3"
            >
              Nuestro equipo
            </h2>
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-center mt-16 gap-4 md:gap-8 ">
          <div className="w-full 2xl:w-2/5 xl:w-2/4 md:w-2/3 mx-auto grid grid-cols-2 px-2 gap-4 md:gap-8 justify-center">
            {ceoWorkers.map((item, index) => (
              <RevealWrapper
                origin="bottom"
                duration={index * 300 + 1000}
                key={index}
              >
                <div className="flex flex-col text-center gap-2 overflow-hidden rounded-2xl">
                  <img
                    loading="lazy"
                    role="button"
                    onClick={() => openModal(item.acf)}
                    className="rounded-2xl w-full hover:scale-105 transition-all cursor-pointer  "
                    src={item.acf?.imagen}
                    alt={item.acf?.nombre}
                    title={item.acf.nombre}
                  />
                  <span className="text-gray-500 rounded-lg px-2 ">
                    {item.acf.rol}
                  </span>
                  <span>{item.acf.nombre}</span>
                </div>
              </RevealWrapper>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8 justify-center">
            { groupedWorkers.map((item, index) => (
                <RevealWrapper
                  origin="bottom"
                  duration={index * 300 + 1000}
                  key={index}
                >
                  <div className="flex flex-col text-center gap-2 overflow-hidden rounded-2xl">
                    <img
                      loading="lazy"
                      role="button"
                      onClick={() => openModal(item.acf)}
                      className="rounded-2xl w-full hover:scale-105 transition-all cursor-pointer "
                      src={item.acf.imagen}
                      alt={item.acf.nombre}
                      title={item.acf.nombre}
                    />
                    <span className="  text-gray-500 rounded-lg px-2 ">
                      {item.acf.rol}
                    </span>
                    <span>{item.acf.nombre}</span>
                  </div>
                </RevealWrapper>
              ))}
          </div>
        </div>
      </div>

      {/* modal detail team */}

      <ModalDetail isOpen={isOpen} closeModal={closeModal} data={data} />
    </div>
  );
}

function ModalDetail({
  isOpen,
  closeModal,
  data,
}: {
  isOpen: any;
  closeModal: any;
  data: any;
}) {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Body className="space-y-3">
        <Modal.Content>
          <Typography variant="body2" className="!mb-6">
            <Typography
              variant="h3"
              className="mb-4 text-metal-900 text-center"
            >
              {data.rol}
            </Typography>
            <Typography variant="body2" className=" font-normal text-metal-600">
              <img
                loading="lazy"
                className="rounded-lg my-2"
                src={data.imagen}
                alt={data.rol}
              />
            </Typography>
            <Typography variant="body2" className="">
              <Typography variant="h5" className=" text-metal-900 text-center">
                {data.nombre}
              </Typography>
              <Typography
                variant="h6"
                className="capitalize  text-[#888] text-center"
              >
                {data.education}
              </Typography>
              <div className="flex justify-around items-center text-2xl mt-4 text-[#666] ">
                <Link href={data.fb} target="_blank">
                  {" "}
                  <FaFacebookF className="hover:text-[#444] transition-all duration-500" />
                </Link>
                <Link href={data.linkedin} target="_blank">
                  {" "}
                  <FaLinkedinIn className="hover:text-[#444] transition-all duration-500" />
                </Link>
                <Link href={data.ig} target="_blank">
                  {" "}
                  <FaInstagram className="hover:text-[#444] transition-all duration-500" />
                </Link>
              </div>
            </Typography>
          </Typography>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  );
}

export default Team;
