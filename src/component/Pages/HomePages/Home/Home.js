import React from "react";
import Loading from "../../../Loading/Loading";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Feedbacks from "../Feedbacks/Feedbacks";
import Helpline from "../HelpLine/Helpline";
import LatestNews from "../LatestNews/LatestNews";
import Newsletter from "../NewsLetter/Newsletter";
import Products from "../Products/Products";
import Question from "../Question/Question";

import SubBanner from "../SubBanner/SubBanner";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Banner />
      <SubBanner />
      <Products />
      <Feedbacks />
      <Question />
      <Newsletter />
      <LatestNews />
      <Helpline />
    </div>
  );
};

export default Home;
