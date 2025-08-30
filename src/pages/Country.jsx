import React, { useTransition, useState, useEffect } from "react";
import {PostApi} from "../Api/PostApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";

const Country = () => {
  const [ispending, startTransition] = useTransition();
  const [Countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const response = await PostApi();
      console.log(response);
      // setCountries(response.data);
      setCountries(response.data);
    });
  }, []);

  if (ispending)
    return (
      <h1 className="h-[100vh] flex justify-center items-center">
        <Loader />
      </h1>
    );
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {Countries.map((countriesList, index) => {
          return <CountryCard key={index} Country={countriesList} />;
        })}
      </div>
    </section>
  );
};

export default Country;
