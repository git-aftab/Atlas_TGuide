import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ Country }) => {
  return (
    <div className="p-6 md:px-8 lg:px-10">
      <div className="red-border-gradient h-auto max-w-sm mx-auto rounded-lg shadow-lg p-4 flex flex-col items-center">
        
        {/* Flag */}
        <img
          className="rounded-md h-40 w-40 object-contain"
          src={Country.flags.svg}
          alt={Country.name.common}
        />

        {/* Country Name */}
        <h2 className="text-xl font-semibold mt-4 text-center">
          {Country.name.common.length > 12
            ? Country.name.common.slice(0, 12) + "..."
            : Country.name.common}
        </h2>

        {/* Capital */}
        <p className="text-gray-400 text-sm">
          <span className="font-medium text-gray-300">Capital: </span>
          {Country.capital}
        </p>

        {/* Population */}
        <p className="text-gray-400 text-sm">
          <span className="font-medium text-gray-300">Population: </span>
          {Country.population.toLocaleString()}
        </p>

        {/* Region */}
        <p className="text-gray-400 text-sm">
          <span className="font-medium text-gray-300">Region: </span>
          {Country.region}
        </p>

        {/* Button */}
        <div className="mt-4">
          <NavLink to={`/country/${Country.name.common}`}>
            <button className="rounded-full border px-4 py-2 text-sm hover:bg-gray-700 hover:border-0 active:bg-emerald-600 transition">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
