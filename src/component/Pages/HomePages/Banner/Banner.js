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
        className="mySwiper swiper"
      >
        <SwiperSlide className="relative">
          <img src={bg1} alt="" />
          <div className="absolute top-20 right-44 bg-white  w-[400px] rounded-lg  space-y-8 text-left px-20 py-10">
            <p className="text-xl content-header">100% Healthy & Affordable</p>
            <h2 className="header-font text-5xl font-bold text-[#89c74a]">
              Organic Vegetables{" "}
            </h2>
            <p className="content-header text-2xl ">
              Small Changes Big Difference
            </p>
            <button className="bg-color1 text-white rounded-full py-3 px-5 hover:bg-orange-600 duration-300 focus:outline-none focus:ring focus:ring-orange-300">
              Visits Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={bg2} alt="" />
          <div className="absolute top-20 right-44 bg-white  w-[500px] rounded-lg  space-y-8 text-left px-20 py-10">
            <p className="text-xl content-header">
              Natural Health Care Ingredients
            </p>
            <h2 className="text-[#d08126] text-5xl font-bold header-font">
              Grocery Shopping
            </h2>
            <p className="content-header text-2xl ">Save upto 30% off</p>
            <button className="bg-[#d08126] text-white  rounded-full py-3 px-5 duration-300 hover:bg-[#89c74a] focus:outline-none focus:ring focus:ring-[#84b355]">
              Visits Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={bg3} alt="" />
          <div className="absolute bottom-1/4 left-1/2 bg-white   rounded-lg  space-y-8  px-10 py-5 mr-7 text-center">
            <p className="text-3xl content-header  ">Grocery shop</p>
            <h2 className="header-font text-5xl font-bold text-[#e7160e]">
              Vegetable 100% Organic
            </h2>
            <p className="content-header text-2xl ">
              Small Changes Big Difference
            </p>
            <button className="bg-[#e7160e] text-white rounded-full py-3 px-5 hover:bg-orange-600 duration-300 focus:outline-none focus:ring focus:ring-orange-300">
              Visits Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
