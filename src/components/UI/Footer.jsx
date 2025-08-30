import React from "react";
import { MdPlace } from "react-icons/md";

import footerContact from "../../Api/footer.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="relative bottom-0">
      <div className="grid grid-cols-3  mt-5 md:mx-20 lg:mx-40">
        {footerContact.map((footerData, idx) => {
          const { icon, title, details } = footerData;
          return (
            <div
              className="px-2 flex items-center hover:bg-[#001011] rounded-lg"
              key={idx}
            >
              <p className="text-blue-600 text-2xl mr-5 text-center">
                {footerIcons[icon]}
              </p>
              <div className="">
                <p className="font-semibold">{title}</p>
                <p className="text-[#929292]">{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copiryt h-15 bg-gray-900 grid items-center">
        <div className="md:mx-20 lg:mx-40 flex justify-between">
          <div className="flex ">
            <p className="text-[#929292]">
              Copyright ©2025. All Rights Reserved{" "}
            </p>
            <span className="text-blue-600 pl-1">@Md_Aftab</span>
          </div>
          <div className="flex">
            <p className="text-[#929292] px-1 cursor-pointer text-xl hover:text-white hover:scale-102 transition-transform duration-300">
              <NavLink to="/">
                <GoHomeFill />
              </NavLink>
            </p>
            <p className="text-[#5500ff] text-xl px-1 cursor-pointer">
              <a
                className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
                href="http://www.linkedin.com/in/md-aftab-360996328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </p>
            <p className="text-pink-800 text-xl px-1 cursor-pointer">
              <a
                className="hover:text-pink-600 hover:scale-110 transition-transform duration-300"
                href="https://www.instagram.com/mdaftab_408?igsh=MXJ4OTJ6djhyMzIyeA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>
            </p>
            <p className="text-[#929292] px-1 cursor-pointer">
              <a
                className="hover:text-gray-300 hover:scale-110 transition-transform duration-300"
                href="https://github.com/git-aftab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
