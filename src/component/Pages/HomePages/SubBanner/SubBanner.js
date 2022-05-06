import React from "react";

import img1 from "../../../../image/myproject-4.png";
import img2 from "../../../../image/item1.webp";

const SubBanner = () => {
  return (
    <div className="max-w-7px px-12 py-10 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
        <div className=" bg-[#ffdfdf]   overflow-hidden  hover:shadow-lg grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 text-center align-middle p-4">
          <div className="flex justify-center items-center">
            <img src={img2} alt="" className="w-80 " />
          </div>
          <div className=" flex justify-center items-center flex-col">
            <p className="header-font text-2xl">Fruits</p>
            <p className="text-xl">
              <span className="font-semibold">100%</span> Fresh products
            </p>
            <button className="px-5 py-1 text-white bg-[#fe6d30] rounded-full hover:bg-[#89c74a] duration-300 focus:outline-none focus:ring focus:ring-[#84b355]">
              Delivered
            </button>
          </div>
        </div>
        <div className=" bg-[#fff08a]   overflow-hidden  hover:shadow-lg grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 text-center align-middle p-4">
          <div className="flex justify-center items-center">
            <img src={img1} alt="" className="w-80 " />
          </div>
          <div className=" flex justify-center items-center flex-col">
            <p className="header-font text-2xl">Fruits</p>
            <p className="text-xl">
              <span className="font-semibold">100%</span> Fresh products
            </p>
            <button className="px-5 py-1 text-white bg-[#fe6d30] rounded-full hover:bg-[#89c74a] duration-300 focus:outline-none focus:ring focus:ring-[#84b355]">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
