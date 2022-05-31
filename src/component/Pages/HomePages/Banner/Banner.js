import "./Banner.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Autoplay,
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bg1 from "../../../../image/bg_1.jpg";
import bg2 from "../../../../image/bg_2.jpg";
import bg3 from "../../../../image/bg_3.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper h-[80vh]"
      >
        <SwiperSlide className="relative">
          <img src={bg1} alt="" />
          <div className="absolute lg:top-20 lg:right-44 bg-[#ffffff95] w-[200px] right-5 top-3  lg:w-[400px] rounded-lg  lg:space-y-8 space-y-2 text-left lg:px-20 lg:py-10 p-5">
            <p className="text-xl content-header">100% Healthy & Affordable</p>
            <h2 className="header-font lg:text-5xl text-2xl font-bold text-[#89c74a]">
              Organic Vegetables{" "}
            </h2>
            <p className="content-header lg:text-2xl text-md">
              Small Changes Big Difference
            </p>
            <button className="bg-color1 text-white rounded-full lg:py-3 py-1 px-5 hover:bg-orange-600 duration-300 focus:outline-none focus:ring focus:ring-orange-300">
              Visits Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={bg2} alt="" />
          <div className="absolute lg:top-20 lg:right-44 bg-[#ffffff95]  lg:w-[500px] rounded-lg  lg:space-y-8 space-y-1 text-left lg:px-20 lg:py-10 w-[200px] right-5 top-3 p-4">
            <p className="lg:text-xl text-sm  content-header">
              Natural Health Care Ingredients
            </p>
            <h2 className="text-[#d08126] lg:text-5xl text-xl font-bold header-font">
              Grocery Shopping
            </h2>
            <p className="content-header lg:text-2xl text-xl">
              Save upto 30% off
            </p>
            <button className="bg-[#d08126] text-white  rounded-full lg:py-3 py-1 px-5  duration-300 hover:bg-[#89c74a] focus:outline-none focus:ring focus:ring-[#84b355]">
              Visits Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={bg3} alt="" />
          <div className="absolute lg:bottom-1/4 bottom-10 lg:left-1/2 left-20 bg-[#ffffff95]   rounded-lg  lg:space-y-8  space-y-2 lg:px-10 lg:py-5 p-4 lg:mr-7 mr-2 text-center">
            <p className="lg:text-3xl text-2xl content-header  ">
              Grocery shop
            </p>
            <h2 className="header-font lg:text-5xl text-xl font-bold text-[#e7160e]">
              Vegetable 100% Organic
            </h2>
            <p className="content-header lg:text-2xl text-md">
              Small Changes Big Difference
            </p>
            <button className="bg-[#e7160e] text-white rounded-full lg:py-3 py-1 px-5 hover:bg-orange-600 duration-300 focus:outline-none focus:ring focus:ring-orange-300">
              Visits Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
