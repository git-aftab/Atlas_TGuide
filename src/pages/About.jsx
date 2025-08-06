import countryFacts from "../Api/countryData.json";
import React from "react";

const About = () => {
  return (
    <div className="mt-10 mx-5 md:mx-20 lg:mx-40">
      <p className="md:text-3xl text-center font-bold">
        Explore! The Top Most Popular Country
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3  ">
        {countryFacts.map((countryDatas) => {
        const { id, name, capital, population, currency, interestingFact } =
          countryDatas;
        return (
          <div
            key={id}
            className="my-5 bg-gray-900 px-2 py-2 rounded-md border border-[#929292] cursor-pointer"
          >
            <div className=" md:col-span-1 md:ml-2">
              <p className="text-2xl font-semibold">{name}</p>
              <p><span className="text-gray-400">Capital:</span> {capital}</p>
              <p><span className="text-gray-400">Population:</span> {population}</p>
              <p><span className="text-gray-400">Currency:</span> {currency}</p>
              <p><span className="text-gray-400">Interesting Fact: </span>{interestingFact}</p>
            </div>
            {console.log(countryDatas)}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default About;
