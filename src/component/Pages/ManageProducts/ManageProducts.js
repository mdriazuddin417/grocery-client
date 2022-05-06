import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ManageSingleProduct from "../ManageSingeProduct/ManageSingleProduct";

const Manageinventory = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const url = `https://grocery-shop2.herokuapp.com/products?page=${page}&size=${size}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("https://grocery-shop2.herokuapp.com/count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / 10);
        setPageCount(page);
      });
  }, []);
  console.log(pageCount);
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-15 p-5 ">
      <div className="text-right mb-4 ">
        <Link to="/addproduct">
          <button className="btn btn3">Add Product++</button>
        </Link>
      </div>
      <table className="table-fixed border border-[#e9e9e9] w-full">
        <thead>
          <tr className="bg-[#e9e9e9] py-2 lg:text-lg text-[10px] sm:text-base md:text-md ">
            <th className="border border-[#e9e9e9]  py-4">IMAGE</th>
            <th className="border border-[#e9e9e9]  py-4">PRODUCT</th>
            <th className="border border-[#e9e9e9]  py-4">PRICE</th>
            <th className="border border-[#e9e9e9]  py-4">Quantity</th>
            <th className="border border-[#e9e9e9]  py-4">UPDATE</th>
            <th className="border border-[#e9e9e9]  py-4">REMOVE</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map((product) => (
            <ManageSingleProduct
              key={product._id}
              product={product}
            ></ManageSingleProduct>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-8">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={
              page === number
                ? "bg-[#183fee] p-2 border rounded-md shadow m-2 text-white focus:ring-3 ring-offset-1 ring-blue-400 "
                : " p-2 border rounded-md shadow m-2"
            }
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select
          className="border focus:outline-none border-blue-700 rounded-lg px-2 font-semibold"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Manageinventory;
