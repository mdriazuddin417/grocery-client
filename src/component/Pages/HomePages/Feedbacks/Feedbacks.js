import React from "react";
import "./feedbacks.css";
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
import useFeedbacks from "../../../hooks/useFeedbacks";
import Feedback from "../../Feedback/Feedback";
const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useFeedbacks();
  return (
    <div className="feedbacks">
      <h3 className="header-font text-black font-bold text-4xl text-center pt-10">
        Our Client Say
      </h3>
      <p className="header-font text-gray-600 text-center pb-5">
        One of the most important aspects of running a successful business.
      </p>

      <div className="max-w-7xl mx-auto lg:px-12 p-4 ">
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
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <Feedback feedback={feedback}></Feedback>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedbacks;
