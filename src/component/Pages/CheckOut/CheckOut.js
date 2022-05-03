import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetail";

const CheckOut = () => {
  const { id } = useParams();
  const [product, setProduct] = useProductDetails(id);
  const [input, setInput] = useState("");
  let { name, image, price, selerName, text, quantity } = product;

  const handleDeliveredBtn = (quantity) => {};

  return (
    <div className="max-w-7xl mx-auto lg:pt-20 lg:px-12 lg:pb-12">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="space-y-7">
          <h3 className="header-font text-4xl font-semibold">{name}</h3>
          <p>{text}</p>
          <p className="font-bold ">
            Price :{" "}
            <span className="text-[#89c74a] ml-14 text-2xl">
              <span>$ </span>
              {price}
            </span>
          </p>
          <p className="flex  items-center font-bold">
            Size :
            <div className="flex gap-4 justify-center items-center ml-16">
              <button className="border rounded-lg focus:text-[#89c74a]  border-gray focus:border-[#89c74a] p-2 ">
                5kg
              </button>
              <button className="border rounded-lg focus:text-[#89c74a]  border-gray focus:border-[#89c74a] p-2">
                3kg
              </button>
              <button className="border rounded-lg focus:text-[#89c74a]  border-gray focus:border-[#89c74a] p-2">
                1kg
              </button>
            </div>
          </p>
          <p className="font-bold">
            Type : <span className="text-[#89c74a] text-xl ml-14">Fruits</span>
          </p>
          <p className="font-bold">
            Seller Name :{" "}
            <span className="text-[#89c74a] text-xl ml-2">{selerName}</span>
          </p>
          <p className="font-bold">
            Quantity :{" "}
            <span className="text-[#89c74a] text-xl ml-6">{quantity}</span>
          </p>
          <div>
            <label htmlFor="quantity" className="font-bold">
              Quantity Update:{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="increase quantity"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-gray-200 py-2 px-1 rounded-lg focus:outline-offset-1 outline-lime-300"
            />
            <button
              className=" bg-[#89c74a] text-white px-3 py-2 rounded focus:ring-2 ring-offset-1 ring-[#8ecf4d]"
              // onClick={handleQuantity}
            >
              Add
            </button>
          </div>
          <button
            className=" bg-[#89c74a] text-white px-3 py-1 rounded focus:ring-2 ring-offset-1 ring-[#8ecf4d]"
            onClick={() => handleDeliveredBtn(quantity)}
          >
            Delivered
          </button>
          <div>
            <p>Share with us:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
