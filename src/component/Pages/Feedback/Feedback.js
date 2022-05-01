import React from "react";
import { SwiperSlide } from "swiper/react";

const Feedback = ({ feedback }) => {
  const { name, cetagory, picture, about } = feedback;
  return (
    <div className="space-y-5 py-16 rounded cursor-pointer ">
      <div className="feedback flex text-left justify-center items-center ">
        <img src={picture} alt="" />
        <div className="ml-3">
          <p className="text-[#89c74a] font-bold text-xl">{name}</p>
          <p>{cetagory}</p>
        </div>
      </div>
      <div className=" w-[80%] mx-auto">
        <p className="text-gray-600 ">{about}</p>
      </div>
    </div>
  );
};

export default Feedback;
