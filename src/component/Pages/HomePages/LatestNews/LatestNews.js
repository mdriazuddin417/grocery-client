import React from "react";
import img1 from "../../../../image/items-5.jpg";
import { BiUserCircle } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
const LatestNews = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 p-4  lg:py-10 ">
      <h2 className="header">Latest News</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-5">
        <div className="space-y-5 overflow-hidden ">
          <img
            src={img1}
            alt=""
            className="relative rounded transform duration-300 hover:scale-110"
          />
          <div className="space-y-5 px-10 py-5">
            <div>
              <p className="flex  items-center">
                <BiUserCircle className="text-[#89c74a] text-xl mr-2" /> By
                Ramamoorthi M
              </p>
              <p className="flex  items-center">
                <MdDateRange className="text-[#89c74a] text-xl mr-2" /> March
                26, 2022
              </p>
            </div>
            <h3 className="header-font text-xl font-semibold">
              Best in Quality Fresh Meat & Seafood
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              asperiores accusamus deserunt quos provident laudantium culpa
              maxime a reprehenderit{" "}
            </p>
            <button className="btn btn2">Read more</button>
          </div>
        </div>
        <div className="space-y-5 overflow-hidden">
          <img
            src={img1}
            alt=""
            className="relative rounded transform duration-300 hover:scale-110"
          />
          <div className="space-y-5 px-10 py-5">
            <div>
              <p className="flex  items-center">
                <BiUserCircle className="text-[#89c74a] text-xl mr-2" /> By
                Ramamoorthi M
              </p>
              <p className="flex  items-center">
                <MdDateRange className="text-[#89c74a] text-xl mr-2" /> March
                26, 2022
              </p>
            </div>
            <h3 className="header-font text-xl font-semibold">
              Best Way To Eat Dry Fruits And Nuts
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              asperiores accusamus deserunt quos provident laudantium culpa
              maxime a reprehenderit
            </p>
            <button className="btn btn2">Read more</button>
          </div>
        </div>
        <div className="space-y-5 overflow-hidden">
          <img
            src={img1}
            alt=""
            className="relative rounded transform duration-300 hover:scale-110"
          />
          <div className="space-y-5 px-10 py-5">
            <div>
              <p className="flex  items-center">
                <BiUserCircle className="text-[#89c74a] text-xl mr-2" /> By
                Ramamoorthi M
              </p>
              <p className="flex  items-center">
                <MdDateRange className="text-[#89c74a] text-xl mr-2" /> March
                26, 2022
              </p>
            </div>
            <h3 className="header-font text-xl font-semibold">
              Fruits & Vegetable Nutrients For Your Health
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              asperiores accusamus deserunt quos provident laudantium culpa
              maxime a reprehenderit{" "}
            </p>
            <button className="btn btn2">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
