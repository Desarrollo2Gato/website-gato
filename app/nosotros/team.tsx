"use client";

import { Button, Modal } from "keep-react";
import Typography from "@mui/material/Typography";
import { RevealWrapper } from "next-reveal";
import { CloudArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_areas, api_trabajador } from "../data/enviroments/api.enviroment";
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
interface Area {
  id: number;
  acf: {
    name: string;
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
  const [areas, setAreas] = useState<Area[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);

  const fetchData = async () => {
    try {
      const [workersResponse, areasResponse] = await Promise.all([
        axios.get(`${api_trabajador}`),
        
        axios.get(api_areas),
      ]);
      setWorkers(workersResponse.data);
      setAreas(areasResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  /*   const fetchWorkers = async () =>{
    try {
      const response = await axios.get(`${api_trabajador}`);
      setWorkers(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  } */

  useEffect(() => {
    fetchData(); /* 
    fetchWorkers(); */
  }, []);

  const ceoWorkers = workers.filter(
    (worker) => worker.acf.tipo_de_trabajador === "ceo"
  );
  const Workers = workers.filter(
    (worker) => worker.acf.tipo_de_trabajador !== "ceo"
  );

  const areaMap = areas.reduce((map, area) => {
    map[area.id] = area.acf.name;
    return map;
  }, {} as { [key: number]: string });

  const workersByAreaArray = Object.entries(
    Workers.reduce((groups, worker) => {
      const areaName = areaMap[worker.acf.area] || "Sin área";
      if (!groups[areaName]) {
        groups[areaName] = [];
      }
      groups[areaName].push(worker);
      return groups;
    }, {} as { [key: string]: Worker[] })
  );

  // Ordenar por el ID de área (que es el primer elemento de cada entrada)
  workersByAreaArray.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  // Convertir de nuevo a objeto
  const workersByArea = workersByAreaArray.reduce(
    (acc, [areaName, workers]) => {
      acc[areaName] = workers;
      return acc;
    },
    {} as { [key: string]: Worker[] }
  );

  const openModal = (data: any) => {
    setData(data);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto xl:px-24 md:px-16 px-8  flex flex-col pt-8 pb-16">
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
            {Object.keys(workersByArea).map((areaName) =>
              workersByArea[areaName].map((item, index) => (
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
              ))
            )}
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
            <Typography
              variant="body2"
              className=" font-normal text-metal-600"
            >
              <img
                loading="lazy"
                className="rounded-lg my-2"
                src={data.imagen}
                alt={data.rol}
              />
            </Typography>
            <Typography
              variant="body2"
              className=""
            >
              <Typography
              variant="h5"
              className=" text-metal-900 text-center"
            >
              {data.nombre}
            </Typography>
              <Typography
              variant="h6"
              className="capitalize  text-[#888] text-center"
            >
              {data.education}
            </Typography>
              <div className="flex justify-around items-center text-2xl mt-4 text-[#666] ">
                <Link href={data.fb} target="_blank"> <FaFacebookF className="hover:text-[#444] transition-all duration-500"  /></Link>
                <Link href={data.linkedin} target="_blank"> <FaLinkedinIn className="hover:text-[#444] transition-all duration-500" /></Link>
                <Link href={data.ig} target="_blank"> <FaInstagram className="hover:text-[#444] transition-all duration-500"/></Link>
              </div>
            </Typography>
          </Typography>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  );
}

export default Team;
