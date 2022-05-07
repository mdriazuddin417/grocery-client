import React, { useEffect, useState } from "react";

const useFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  return [feedbacks, setFeedbacks];
};

export default useFeedbacks;
