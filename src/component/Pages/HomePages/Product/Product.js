import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, selerName, image, price, text, quantity } = product;

  return (
    <div className=" hover:shadow-2xl p-10 text-center space-y-2 rounded-lg shadow duration-300">
      <img
        src={image}
        alt=""
        className="transform hover:scale-110 duration-300"
      />
      <p className="text-[#d51243] text-2xl font-bold"> ${price} </p>
      <p className="content-header text-3xl"> {name}</p>
      <p className="text-gray-600 text-justify"> {text.slice(0, 200)}</p>
      <p className="content-header">Supplier name: {selerName}</p>
      <p className="text-[#11bd5e]">IN STOCK</p>
      <p>
        The available products:
        <span className=" text-3xl text-[#233a95] font-semibold">
          {" "}
          {quantity}
        </span>
      </p>
      <Link to={"/shipping"}>
        <button className="bg-color1 text-white rounded-full py-3 px-5 hover:bg-orange-600 duration-300 mt-3 focus:outline-none focus:ring focus:ring-orange-300 ">
          Update Stock
        </button>
      </Link>
    </div>
  );
};

export default Product;
