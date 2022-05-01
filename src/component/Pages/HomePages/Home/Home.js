import React from "react";
import Banner from "../Banner/Banner";
import Feedbacks from "../Feedbacks/Feedbacks";
import Helpline from "../HelpLine/Helpline";
import LatestNews from "../LatestNews/LatestNews";
import Products from "../Products/Products";

import SubBanner from "../SubBanner/SubBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
      <Products />
      <Feedbacks />
      <LatestNews />
      <Helpline />
    </div>
  );
};

export default Home;
