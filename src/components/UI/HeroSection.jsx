import React from 'react'
import Main_opt from "../../assets/Main_opt.avif"
import { BiSolidRightArrow } from 'react-icons/bi'

const HeroSection = () => {
  return (
    <div className='mx-4 md:mx-10 lg:mx-40 h-[30rem]'>
        <div className="grid grid-cols-2 items-center justify-center">
            <div className="col-span-2 mb-2 order-2 md:col-span-1 lg:col-span-1 md:order-1">
                <p className="text-xl font-medium py-4  md:text-4xl lg:text-4xl ">
                    Explore the world, One Country at a Time.
                </p>
                <p className="text-gray-300 md:text-xl ">
                    Discover the history, Culture and beauty of every nation. Sort, Search and Filter through countries to find details you need
                </p>
                <a href="about"><button className="text-white bg-emerald-500 border-none py-2 px-1 rounded-md flex items-center font-bold hover:bg-emerald-200 hover:text-emerald-500 ease-in-out cursor-pointer mt-4">Start Exploring <BiSolidRightArrow className='mt-1 text-emerald-800'/> </button></a>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-1 order-1  ">
                <img src={Main_opt} alt="" />
            </div>
        </div>
        {/* <NavLink to="/about"><About/></NavLink> */}
    </div>
  )
}

export default HeroSection