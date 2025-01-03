import React, { useEffect, useState } from "react";
import CardJob from "./cardJob";
import { api_areas, api_vacantes } from "../data/enviroments/api.enviroment";
import axios from "axios";
import Pagination from "../components/Pagination";
interface Job {
  acf: {
    area: number;
    imagen_url: string;
    job_position: string;
    description: string;
    descripcion_corta: string;
    salary: string;
  };
  slug: string;
}

interface Area {
  id: number;
  name: string;
  acf: {
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
      const response = await axios.get(api_areas);
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
    const matchesArea = selectedArea === 0 || job.acf.area === selectedArea;
    const matchesSearchTerm =
      job.acf.job_position.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesArea && matchesSearchTerm;
  });

  const renderVacanteItem = (item: any) => (
    <CardJob
      key={item.id}
      idColor={item.acf.area}
      imgUrl={item.acf.imagen_url}
      jobPosition={item.acf.job_position}
      jobDescription={item.acf.descripcion_corta}
      slug={item.slug}
    />
  );
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto relative sm:px-12 lg:px-16 px-8 py-16">
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
              <option value="0">Todos</option>
              {areas.map((area) => (
                <option key={area.id} value={area.id.toString()}>
                  {area.name}
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

          {filteredData.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-12">
              <p className="text-center text-gray-400 col-span-4">
                No hay vacantes disponibles para el área seleccionada o término
                de búsqueda.
              </p>
            </div>
          ) : (
            <Pagination
              dataName="proyectos"
              data={filteredData}
              itemsPerPageMobile={6}
              itemsPerPageTablet={9}
              itemsPerPageDesktop={12}
              itemsPerPageLargeDesktop={15}
              render={renderVacanteItem}
              gridClass={
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-12"
              }
            />
            /* filteredData.map((job, index) => (
                <CardJob
                  key={index}
                  idColor={job.acf.area}
                  imgUrl={job.acf.imagen_url}
                  jobPosition={job.acf.job_position}
                  jobDescription={job.acf.descripcion_corta}
                  slug={job.slug}
                />
              )) */
          )}
        </div>
      </div>
    </div>
  );
};

export default Vacantes;
