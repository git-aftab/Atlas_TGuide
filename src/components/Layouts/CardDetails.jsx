import React, {
  startTransition,
  useEffect,
  useState,
  useTransition,
} from "react";
import { useParams } from "react-router-dom";
import { getCountyIndivData } from "../../Api/PostApi";
import Loader from "../UI/Loader";

const CardDetails = () => {
  const params = useParams();
  console.log(params);
  const [ispending, setispending] = useTransition();
  const [country, setcountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountyIndivData(params.id);
      console.log(res.data[0]); // ✅ check what comes back
      setcountry(res.data[0]); // ✅ store actual country object
    });
  }, [params.id]);

  if (ispending) return <Loader />;
  return (
     <div className="grid grid-cols-2 justify-center items-center px-40 bg-gray-900 h-[80vh]">
      <div className="col-span-2 md:col-span-1 text-center">
        <img
          className="p-4 w-[100%] rounded-md"
          src={country.flags?.svg || country.flags?.png}
          alt={country.name?.common || 'Country flag'}
        />
      </div>
      <div className="col-span-2 md:col-span-1 text-center">
        <div className="flex flex-col">
          <div className="">
            <span className="text-[#929292] font-semibold">Country: </span>
            {country.name?.common}
          </div>
          <div className="">
            <span className="text-[#929292] font-semibold">Capital: </span>
            {country.capital}
          </div>
          <div className="">
            <span className="text-[#929292] font-semibold">Official Name: </span>
            {country.name?.official}
          </div>
          <div className="">
            <span className="text-[#929292] font-semibold">Population: </span>
            {country.population}
          </div>
          <div className="">
            <span className="text-[#929292] font-semibold">Region: </span>
            {country.region}
          </div>
          <div className="">
            <span className="text-[#929292] font-semibold">Country: </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
