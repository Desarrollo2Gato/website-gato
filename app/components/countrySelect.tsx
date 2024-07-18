"use client";
import Select, { SingleValue, StylesConfig } from "react-select";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Country {
  name: string;
  code: string;
  id: number;
}
interface CountrySelectProps {
  onChange: (countryCode: string) => void;
}
const CountrySelect: React.FC<CountrySelectProps> = ({ onChange }) => {

  const [codes, setCodes] = useState<Country[]>([]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Desarrollo2Gato/countries/main/data.json"
      );
      let countryData: Country[] = response.data.map(
        (country: any, index: number) => ({
          id: index + 1,
          name: country.country,
          code: country.calling_code,
        })
      );
      countryData = countryData.sort((a, b) => a.name.localeCompare(b.name));
      setCodes(countryData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const options = codes.map((country) => ({
    value: country.code,
    label: `(${country.code}) ${country.name}`,
    key: country.id,
  }));

  const customStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (provided, state) => ({
      ...provided,
      color: "#3D3D3D",
      fontSize: '14px',
      border: "none",
      paddingTop: "16px",
      paddingBottom: "4px",
      borderBottom: "1px solid #3D3D3D",
      backgroundColor: "transparent",
      borderRadius: 0,
      paddingLeft: 0,
      outline: "none",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        borderBottom: "1px solid #3D3D3D",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#3D3D3D",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#3D3D3D",
    }),
    menu: (provided) => ({
      ...provided,
      border: "1px solid #3D3D3D",
      color: "#3D3D3D",
      borderRadius: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      margin:0,
      backgroundColor: state.isSelected ? "#3D3D3D" : "transparent",
      color: state.isSelected ? "#fff" : "#3D3D3D",
      "&:hover": {
        backgroundColor: "#3D3D3D",
        color: "#fff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
  };
  const handleChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  return (
    <Select
      inputId="country_code"
      options={options}
      styles={customStyles}
      placeholder="Cod. de país"
      onChange={handleChange}
    />
  );
};

export default CountrySelect;
