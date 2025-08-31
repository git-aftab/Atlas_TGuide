import React, { useTransition, useState, useEffect } from "react";
import { PostApi } from "../Api/PostApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [ispending, startTransition] = useTransition();
  const [Countries, setCountries] = useState([]);
  const [search, setsearch] = useState();
  const [filter, setFilter] = useState("all");

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

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country
  };

  // filter
  const filterRegion=(country)=>{
    if(filter==="all") return country
    return country.region === filter
  }

  // Search logic
  const filterCountries = Countries.filter((country) => searchCountry(country) && filterRegion(country));
  return (
    <section className="min-h-[80vh]">
      <SearchFilter
        search={search}
        setSearch={setsearch}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {filterCountries.map((countriesList, index) => {
          return <CountryCard key={index} Country={countriesList} />;
        })}
      </div>
    </section>
  );
};

export default Country;
