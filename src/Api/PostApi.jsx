import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP Get method
export const PostApi = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// Api for indvidual countries
export const getCountyIndivData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
