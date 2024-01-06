import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="announcement scale-90 text-gray-700  text-sm  w-100 my-2">
        <p className="text-center w-100">
          <span className="bg-violet-200 rounded-full inline-flex mx-2 px-1 text-sm">
            Announcement
          </span>
           We are happy to anounce that we raise $2 Million Seed Funding
        </p>
      </div>
      <nav className="hidden sm:flex bg-redd-100 items-center mt-3 h-[80px]  justify-around align-center  ">
        <div className="left">
          <h1 className="font-bold text-xl">Mode UI</h1>
        </div>
        <div className="mid">
          <ul className="flex gap-x-5">
            <li className="flex">
              Card access
              <IoIosArrowDown className="mt-[6px] font-extralight ml-1" />
            </li>
            <li>Banking</li>
            <li>Processing</li>
            <li>About</li>
            <li>Carrier</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <button className="bg-violet-100  text-gray-500 flex rounded-md p-1 text-sm">
            Login
            <FaArrowRightToBracket className="mt-[5px] ml-1" />
          </button>
        </div>
      </nav>

      <div className="mobNav border flex sm:hidden justify-between p-4">
        <div className="left">
          <h1 className="font-bold text-lg">Mode UI</h1>
        </div>
        <div className="right flex gap-x-3">
          <button className="bg-violet-100  text-gray-500 flex rounded-md px-2 p-1 text-sm">
            Login
            <FaArrowRightToBracket className="mt-[5px] ml-1" />
          </button>
          <RiMenu2Fill className="mt-1 text-lg" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
