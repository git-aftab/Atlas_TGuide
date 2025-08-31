import React, {
  startTransition,
  useEffect,
  useState,
  useTransition,
} from "react";
import { NavLink, useParams } from "react-router-dom";
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
      console.log(res.data[0]);
      if (res.status === 200) {
        setcountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (ispending) return <Loader />;
  return (
    <div className="relative flex flex-col items-center px-4 bg-gray-900 min-h-screen py-6">
      {country && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-x-10 text-lg md:text-2xl w-full max-w-6xl">
          {/* Flag Section */}
          <div className="w-full flex justify-center">
            <img
              className="p-4 w-full max-w-md rounded-md"
              src={country.flags?.svg || country.flags?.png}
              alt={country.name?.common || "Country flag"}
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-[#929292] font-semibold">Country: </span>
              {country.name?.common}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">Capital: </span>
              {country.capital}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">
                Official Name:{" "}
              </span>
              {country.name?.official}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">
                Native Name:{" "}
              </span>
              {Object.keys(country.name.nativeName)
                .map((key) => country.name.nativeName[key].common)
                .join(" ,")}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">Population: </span>
              {country.population}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">Region: </span>
              {country.region}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">
                Sub Region:{" "}
              </span>
              {country.subregion}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">Currencies: </span>
              {Object.values(country.currencies)
                .map((val) => val.name)
                .join(" ,")}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">Languages: </span>
              {Object.keys(country.languages)
                .map((key) => country.languages[key])
                .join(" ,")}
            </div>
            <div>
              <span className="text-[#929292] font-semibold">Borders: </span>
              {country.borders?.length
                ? country.borders.join(" ,")
                : "None"}
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-6 md:mt-10">
        <NavLink to={"/country"}>
          <button className="px-4 py-2 rounded-md bg-emerald-600 border border-[#929292] font-semibold hover:bg-emerald-100 hover:text-emerald-800 cursor-pointer">
            Go Back
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CardDetails;
