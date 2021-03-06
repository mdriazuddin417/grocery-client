import React, { useEffect, useState } from "react";

const useFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch(" https://grocery-shop2.herokuapp.com/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  return [feedbacks, setFeedbacks];
};

export default useFeedbacks;
