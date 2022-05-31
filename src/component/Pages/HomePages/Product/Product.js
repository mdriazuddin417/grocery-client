import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, selerName, image, price, text, quantity, _id } = product;
  const navigate = useNavigate();
  const handleProduct = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className=" hover:shadow-2xl p-10 text-center space-y-2 rounded-lg shadow duration-300 relative h-[600px]">
      <img
        src={image}
        alt=""
        className="transform hover:scale-110 duration-300 rounded-lg w-full h-[200px]"
      />
      <p className="text-[#d51243] text-2xl font-bold"> ${price} </p>
      <p className="content-header text-3xl"> {name}</p>
      <p className="text-gray-600 text-justify"> {text.slice(0, 100)}</p>
      <p className="content-header">Supplier name: {selerName}</p>
      <p className="text-[#11bd5e]">
        {" "}
        <span className="text-gray-300 text-xm font-semibold">5kg </span> IN
        STOCK
      </p>
      <p className="mb-20">
        The available products:{" "}
        <span className=" text-2xl text-[#233a95] font-semibold ">
          {quantity}
        </span>
      </p>

      <div className="absolute bottom-4 left-32">
        <button
          className="btn btn2"
          onClick={() => {
            handleProduct(_id);
          }}
        >
          Shipping Now
        </button>
      </div>
    </div>
  );
};

export default Product;
