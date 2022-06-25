import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetail";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { toast } from "react-toastify";
const CheckOut = () => {
  const { id } = useParams();
  const [product, setProduct] = useProductDetails(id);

  let { name, image, price, selerName, text, quantity } = product;
  const newPrice = parseInt(price) * parseInt(quantity);

  const handleDeliveredBtn = async () => {
    let deliver = 1;
    let quantityParse = parseInt(quantity);
    let newQuantity = quantityParse - deliver;
    const productInfo = {
      name: name,
      image: image,
      price: price,
      selerName: selerName,
      text: text,
      quantity: newQuantity,
    };
    const url = ` https://grocery-shop2.herokuapp.com/products/${id}`;

    await axios
      .put(url, {
        productInfo,
      })
      .then((data) => {
        setProduct(productInfo);
        toast.success("Product Delivered Successfully !!");
      });
  };

  //============================================
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    
    const increaseQuantity = parseInt(data.increase) + parseInt(quantity);
    const productInfo = {
      name: name,
      image: image,
      price: price,
      selerName: selerName,
      text: text,
      quantity: increaseQuantity,
    };

    const url = ` https://grocery-shop2.herokuapp.com/products/${id}`;

    await axios
      .put(url, {
        productInfo,
      })
      .then((data) => {
        setProduct(productInfo);
      });
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto lg:pt-20 lg:px-12 lg:pb-12">
      <PageTitle title="CheckOut"></PageTitle>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full h-[400px] rounded">
          <img src={image} alt="" className="h-full w-full" />
        </div>
        
        <div className="space-y-5">
          <h3 className="header-font text-4xl font-semibold">{name}</h3>
          <p>{text}</p>
          <p className="font-bold ">
            Price :{" "}
            <span className="text-[#89c74a] ml-14 text-2xl">
              <span>$ </span>
              {price} /kg
            </span>
          </p>
          <p className="font-bold ">
            New Price :{" "}
            <span className="text-[#89c74a] ml-14 text-2xl">
              <span>$ </span>
              {newPrice}
            </span>
          </p>
          {/* <p className="flex  items-center font-bold">
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
          </p> */}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="number"
                required
                {...register("increase", { min: 1 })}
                className="focus:outline-1 outline-lime-400 border rounded-lg border-gray-300 py-1 pl-2"
              />

              <input
                className="bg-lime-600 text-white px-3 py-1 border rounded-lg border-gray-300 ml-1 focus:ring-2 ring-offset-0 ring-lime-400"
                type="submit"
                value={"Submit"}
              />
            </form>
          </div>
          <button
            className=" bg-[#89c74a] text-white px-3 py-1 rounded focus:ring-2 ring-offset-1 ring-[#8ecf4d]"
            onClick={handleDeliveredBtn}
          >
            Delivered
          </button>
          <div className="flex  justify-start items-center space-x-2">
            <p>Share with us:</p>
            <div className="flex space-x-7 text-xl text-[#89c74a] ">
              <a
                href="www.facebook.com"
                className="hover:text-black duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="www.github.com"
                className="hover:text-black duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="www.linkedin.com"
                className="hover:text-black duration-300"
              >
                <GrLinkedinOption />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
