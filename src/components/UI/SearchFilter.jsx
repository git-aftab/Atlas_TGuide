import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <section className="flex px-9">
      <div className="">
        <input
          className="border border-[#929292] px-4 py-2 rounded-md"
          type="text"
          placeholder="search..."
          value={search}
          onChange={handleInputChange}
        />
      </div>
      <div className=" flex justify-center items-center">
        <select className="cursor-pointer border px-4 py-2 rounded-md ml-5 border-[#929292]" name="" id="" value={filter} onChange={handleSelectChange}>
          <option className="bg-blue-600 text-white font-semibold font-sans" value="all">All</option>
          <option className="bg-blue-600 text-white font-semibold font-sans" value="Africa">Africa</option>
          <option className="bg-blue-600 text-white font-semibold font-sans" value="Americas">Americas</option>
          <option className="bg-blue-600 text-white font-semibold font-sans" value="Asia">Asia</option>
          <option className="bg-blue-600 text-white font-semibold font-sans" value="Europe">Europe</option>
          <option className="bg-blue-600 text-white font-semibold font-sans" value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
