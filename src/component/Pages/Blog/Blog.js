import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-54">
      <h2 className="header mb-10">Blog</h2>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-x-32 gap-y-10">
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              Difference between javascript and nodejs?
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut
              ratione modi aspernatur sint, quasi ea esse laudantium ipsa
              doloribus alias nihil cum, dolorem cupiditate placeat blanditiis
              repellat sed magni!
            </p>
          </div>
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              What is the purpose of jwt and how does it work?
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut
              ratione modi aspernatur sint, quasi ea esse laudantium ipsa
              doloribus alias nihil cum, dolorem cupiditate placeat blanditiis
              repellat sed magni!
            </p>
          </div>
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              Differences between sql and nosql databases ?
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut
              ratione modi aspernatur sint, quasi ea esse laudantium ipsa
              doloribus alias nihil cum, dolorem cupiditate placeat blanditiis
              repellat sed magni!
            </p>
          </div>
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              When should you use nodejs and when should you use mongodb?
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut
              ratione modi aspernatur sint, quasi ea esse laudantium ipsa
              doloribus alias nihil cum, dolorem cupiditate placeat blanditiis
              repellat sed magni!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
