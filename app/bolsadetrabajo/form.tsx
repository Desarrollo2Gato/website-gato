"use client";
import React, { FormEvent, useEffect, useState } from "react";
import CountrySelect from "../components/countrySelect";
import axios from "axios";


const Form = ({ vacante }: { vacante: string }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    file: "",
    /* salary: "", */
    jobPosition: "",
    description: "",
    country_code: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function handleEnter() {
    setIsEnter(true);
  }

  function handleLeave() {
    setIsEnter(false);
  }
  async function captureTokenDynamic() {
    /* console.log(
      "Capturing token with:",
      process.env.NEXT_PUBLIC_EMAIL,
      process.env.NEXT_PUBLIC_PASSWORD
    ); */
    try {
      const response: any = await axios.post(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/jwt-auth/v1/token",
        {
          username: process.env.NEXT_PUBLIC_EMAIL,
          password: process.env.NEXT_PUBLIC_PASSWORD,
        }
      );
      console.log("Token captured:", response.data.token);
      return response.data.token;
    } catch (error) {
      console.error("Error capturing token:", error);
      setModalMessage("Error al capturar el token.");
      setIsModalOpen(true);
      throw error;
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted, capturing token...");
      const token = await captureTokenDynamic();
      console.log("Token received, sending data...", data);
      await axios.post(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/api/v1/",
        {
          name: data.name,
          email: data.email,
          phone: `${data.country_code} ${data.phone}`,
          file: data.file[0],
          /* salary: data.salary, */
          jobPosition: data.jobPosition,
          description: data.description,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setIsSubmitting(false);
      setModalMessage(
        "Gracias por dejar tus datos, Un ejecutivo te contactara o puedes contactarnos."
      );
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error sending data:", error);
      setIsSubmitting(false);
      setModalMessage(
        "Error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos"
      );
      setIsModalOpen(true);
    }
  }

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } 
  };
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto p-8 md:p-16 xl:px-32 flex gap-10">
        <img
          src="https://i.pinimg.com/originals/27/07/76/270776ad2bf7eba7d5479e09e32282dd.jpg"
          alt="Familia gato"
          className="w-3/5 shadow-xl object-cover rounded-xl"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 text-[#3D3D3D]"
        >
          <div className="flex flex-col gap-6 text-[#3D3D3D]">
            <div className="relative w-full">
              <input
                className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                placeholder=""
                id="name"
                type="text"
                defaultValue={data.name}
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <label
                htmlFor="name"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Nombre Completo
              </label>
            </div>
            <div className="relative w-full ">
              <input
                className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                placeholder=""
                id="email"
                type="email"
                defaultValue={data.email}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <label
                htmlFor="email"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Correo
              </label>
            </div>
            <div className="w-full flex gap-4">
              {/* countries */}
              <div className="w-full md:w-2/4">
                <CountrySelect />
              </div>
              <div className="relative w-full md:w-2/4">
                <input
                  className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  placeholder=""
                  id="phone"
                  type="text"
                  maxLength={15}
                  defaultValue={data.phone}
                  required
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
                <label
                  htmlFor="phone"
                  className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
                  >
                  Número
                </label>
              </div>
            </div>
            <div className="relative w-full">
              <input
                className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                placeholder=""
                id="jobPosition"
                type="text"
                defaultValue={data.jobPosition}
                required
                onChange={(e) => setData({ ...data, jobPosition: e.target.value })}
              />
              <label
                htmlFor="jobPosition"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Vacante
              </label>
            </div>
            {/* <select
              id="jobPosition"
              required
              className="h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans  font-normal text-[#3D3D3D] outline outline-0 text-sm"
              defaultValue={data.jobPosition}
              onChange={(e) => setData({ ...data, jobPosition: e.target.value })}
            >
              <option value="">Seleccione un puesto</option>
              <option value="puesto">Puesto</option>
              <option value="puesto">Puesto</option>
              <option value="puesto">Puesto</option>
              <option value="puesto">Puesto</option>
              <option value="puesto">Puesto</option>
            </select> */}
            <div className="relative w-full">
              <input
                type="file"
                required
                title="Adjunte su CV"
                id="file"
                className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file"
                className="block w-full pb-1 border-b border-[#3D3D3D] bg-transparent  font-sans font-normal text-[#3D3D3D] outline outline-0 transition-all cursor-pointer pl-1 text-sm pt-4"
              >
                {fileName?  fileName : 'Adjunte su CV' }
              </label>
              {/* <span className="block font-sans text-sm font-normal text-[#666] pl-1 mt-2">
                {fileName}
              </span> */}
            </div>

            <div className="relative w-full">
              <textarea
                className="resize-none peer  w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                rows={4}
                placeholder=""
                id="description"
                defaultValue={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
              />
              <label
                htmlFor="description"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Cuéntanos sobre ti
              </label>
            </div>
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              role="button"
              className={`mx-auto relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
                isEnter && " transition-all"
              } transition-all`}
            >
              <div
                className={`bg-[#9353B6] rounded-full w-12 h-full absolute transition-all  ${
                  isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
                }`}
              ></div>
              <button
                disabled={isSubmitting}
                className={`pl-4 pr-2   ${
                  isEnter ? "text-white z-10 text-lg" : `text-[#9353B6] text-lg`
                }
                `}
              >
                Postular
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
