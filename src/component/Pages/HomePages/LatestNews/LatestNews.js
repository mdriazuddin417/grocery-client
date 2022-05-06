import React from "react";
import img1 from "../../../../image/item1.webp";
import img2 from "../../../../image/item2.webp";
import img3 from "../../../../image/item3.webp";
import { BiUserCircle } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
const LatestNews = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 p-4  lg:py-10 ">
      <h2 className="header">Latest News</h2>
      <p className="text-center header-font text-gray-600">
        LT Foods to step up investments on new product development
      </p>
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
              Tapping on the rising consumer consciousness towards food quality,
              a Bengaluru-based agritech firm is providing greenhouse produce
              through managed farms in partnership with small farm holders.
            </p>
            <button className="btn btn2 flex justify-around items-center">
              Read more{" "}
              <BsArrowRightShort className="text-3xl arrow duration-300 " />
            </button>
          </div>
        </div>
        <div className="space-y-5 overflow-hidden">
          <img
            src={img2}
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
              LT Foods expects to spend 4% of branded sales on marketing which
              is 75% of its total revenue. A report by RedSeer forecasted the
              ready-to-cook market in India to grow 18% to reach Rs 4800 crore
              by 2024.
            </p>
            <button className="btn btn2 flex justify-around items-center">
              Read more{" "}
              <BsArrowRightShort className="text-3xl arrow duration-300 " />
            </button>
          </div>
        </div>
        <div className="space-y-5 overflow-hidden">
          <img
            src={img3}
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
              The main goods which recorded healthy growth in exports include
              oil cake meal, oilseeds, fruit pulps and purees, cereals and
              millets, spices and condiments, tea, dry fruits, sugar, pulses,
              coffee, and essential oil.
            </p>
            <button className="btn btn2 flex justify-around items-center">
              Read more{" "}
              <BsArrowRightShort className="text-3xl arrow duration-300 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
