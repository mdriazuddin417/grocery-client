import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#9ee05c93]">
      <div className="max-w-7xl mx-auto lg:py-16 p-5">
        <h2 className="header-font text-center text-2xl font-bold mb-4">
          SubsCribe to our Newsletter
        </h2>
        <div className="text-center">
          <input
            type="text"
            placeholder="Your email address"
            className="py-3 w-[350px] px-5 rounded-full text-center mb-2 shadow-md focus:outline-none"
          />{" "}
          <br />
          <button className=" px-10 py-2 text-white focus:ring-2 ring-offset-1 ring-[#a9e969] shadow rounded-full bg-[#89c74a]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
