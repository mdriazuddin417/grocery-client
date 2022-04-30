import React from "react";

import img2 from "../../../../image/My project (3).png";

const SubBanner = () => {
  return (
    <div className="max-w-7px px-12 py-10 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
        <div className=" bg-[#ffdfdf]  h-[300px] overflow-hidden flex justify-center items-center relative p-10 hover:shadow-lg">
          <img src={img2} alt="" />
          <div className=" absolute top-50 right-2 space-y-3 pr-5">
            <p className="header-font text-2xl">Veggies</p>
            <p className="text-xl">
              <span className="font-semibold">100%</span> organic products
            </p>
            <button className="px-5 py-1 text-white bg-[#fe6d30] rounded-full hover:bg-[#89c74a] duration-300">
              Delivered
            </button>
          </div>
        </div>
        <div className="relative p-10 bg-[#fff08a]  h-[300px] overflow-hidden flex justify-center items-center hover:shadow-lg">
          <img src={img2} alt="" className="" />
          <div className=" absolute top-50 right-2 space-y-3 pr-5">
            <p className="header-font text-2xl">Fruits</p>
            <p className="text-xl">
              <span className="font-semibold">100%</span> Fresh products
            </p>
            <button className="px-5 py-1 text-white bg-[#fe6d30] rounded-full hover:bg-[#89c74a] duration-300">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
