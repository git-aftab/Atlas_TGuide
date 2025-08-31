import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="max-w-[140rem] mx-4 md:mx-20 lg:mx-30 h-[5rem] flex items-center py-5 justify-between ">
        <NavLink to="/">
          <p className="text-xl md:text-4xl font-bold ">Atlas_TG</p>
        </NavLink>
        <nav>
          <div className="flex gap-2 md:gap-5 lg:gap-8">
            <p className="cursor-pointer md:text-xl lg:text-2xl font-semibold hover:text-gray-500 hover:border-b-[3px] hover:border-b-blue-600">
              <NavLink to="/">Home</NavLink>
            </p>
            <p className="cursor-pointer md:text-xl lg:text-2xl font-semibold hover:text-gray-500 hover:border-b-[3px] hover:border-b-blue-600">
              <NavLink to="/country">Country</NavLink>
            </p>
            <p className="cursor-pointer md:text-xl lg:text-2xl font-semibold hover:text-gray-500 hover:border-b-[3px] hover:border-b-blue-600">
              <NavLink to="/contact">Contact</NavLink>
            </p>
            <p className="cursor-pointer md:text-xl lg:text-2xl font-semibold hover:text-gray-500 hover:border-b-[3px] hover:border-b-blue-600">
              <NavLink to="/about">About</NavLink>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
