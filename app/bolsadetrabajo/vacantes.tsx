import React, { useEffect, useState } from "react";
import CardJob from "./cardJob";
import { api_vacantes } from "../data/enviroments/api.enviroment";
import axios from "axios";

interface Job {
  acf: {
    area: number[];
    imagen_url: string;
    job_position: string;
    description: string;
    salary: string;
  };
  slug: string;
}

interface Area {
  id: number;
  acf: {
    name: string;
    color: string;
  };
}

const Vacantes: React.FC = () => {
  const [data, setData] = useState<Job[]>([]);
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedArea, setSelectedArea] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchVacantes = async () => {
    try {
      const response = await axios.get(api_vacantes);
      setData(response.data);
      
    } catch (error) {
      console.error("Error fetching vacantes:", error);
    }
  };

  const fetchAreas = async () => {
    try {
      const response = await axios.get(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/area"
      );
      setAreas(response.data);
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  useEffect(() => {
    fetchVacantes();
    fetchAreas();
  }, []);

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(parseInt(event.target.value, 10));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((job) => {
    const matchesArea = selectedArea === 0 || job.acf.area.includes(selectedArea);
    const matchesSearchTerm =
      job.acf.job_position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.acf.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesArea && matchesSearchTerm;
  });

  return (
    <div className="bg-gray-100">
      <div className="max-w-[1920px] mx-auto relative xl:px-32 lg:px:16 px-8 py-16">
        <h2 className="text-[#444] text-3xl uppercase font-semibold text-center mb-8">
          Vacantes
        </h2>
        <p className="md:text-center text-[#666] mb-8">
          Buscamos talento apasionado y comprometido para unirse a nuestro
          equipo innovador y creativo. Ofrecemos un ambiente de trabajo dinámico
          y colaborativo. Explora nuestras oportunidades laborales y encuentra
          el puesto ideal para ti. ¡Únete a nosotros y lleva tu carrera al
          siguiente nivel!
        </p>

        <div>
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-8 text-[#444]">
            <select
              name="areas"
              id="areas"
              className="w-full md:w-[300px] rounded-lg outline-none px-4 py-2 border border-gray-100"
              value={selectedArea.toString()}
              onChange={handleAreaChange}
            >
              <option value="0">All</option>
              {areas.map((area) => (
                <option key={area.id} value={area.id.toString()}>
                  {area.acf.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Buscar vacante.."
              className="w-full md:w-[300px] rounded-lg outline-none px-4 py-2 border border-gray-100"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-12">
          {filteredData.length === 0 ? (
              <p className="text-center text-gray-400 col-span-4">
                No hay vacantes disponibles para el área seleccionada o término
                de búsqueda.
              </p>
            ) : (
              filteredData.map((job, index) => (
                <CardJob
                  key={index}
                  idColor={job.acf.area[0]}
                  imgUrl={job.acf.imagen_url}
                  jobPosition={job.acf.job_position}
                  jobDescription={job.acf.description}
                  sueldo={job.acf.salary}
                  slug={job.slug}
                />
              ))
            )}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Vacantes;
