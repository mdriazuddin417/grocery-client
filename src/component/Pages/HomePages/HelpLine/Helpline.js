import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const Helpline = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-5 lg:mx-24 py-10 bg-[#89c74a] rounded-xl  ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5  ">
        <div className="flex gap-4 justify-center items-center">
          <div className="w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center text-[#89c74a] hover:bg-[#fe8801] hover:text-white duration-300">
            <ImTruck className="text-3xl " />
          </div>
          <div className="space-y-1 text-white">
            <p className="header-font  text-xl font-bold">Free Shipping </p>
            <p>World wide</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center text-[#89c74a] hover:bg-[#fe8801] hover:text-white duration-300">
            <FaPhoneAlt className="text-3xl " />
          </div>
          <div className="space-y-1 text-white">
            <p className="header-font  text-xl font-bold">Helpline </p>
            <p>+88-01786552964</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center text-[#89c74a] hover:bg-[#fe8801] hover:text-white duration-300">
            <BiSupport className="text-3xl " />
          </div>
          <div className="space-y-1 text-white">
            <p className="header-font  text-xl font-bold">24 × 7 </p>
            <p>Free For Business</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center text-[#89c74a] hover:bg-[#fe8801] hover:text-white duration-300">
            <GiReturnArrow className="text-3xl " />
          </div>
          <div className="space-y-1 text-white">
            <p className="header-font  text-xl font-bold"> Returns </p>
            <p>30 Days Free Exchange</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
