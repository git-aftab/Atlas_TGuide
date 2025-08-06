import React from "react";
import { MdPlace } from "react-icons/md";

import footerContact from "../../Api/footer.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
            <div className="px-2 flex items-center hover:bg-[#001011] rounded-lg" key={idx}>
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
          <p className="text-[#929292]">Copyright ©2025. All Rights Reserved </p>
          <span className="text-blue-600 pl-1">@Md_Aftab</span>
        </div>
        <div className="flex">
          <p className="text-[#929292] px-1 cursor-pointer">Back To Home</p>
          <p className="text-[#5500ff] text-xl px-1 cursor-pointer"><FaLinkedin/></p>
          <p className="text-pink-800 text-xl px-1 cursor-pointer"><FaSquareInstagram/></p>
          <p className="text-[#929292] px-1 cursor-pointer">Contact</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
