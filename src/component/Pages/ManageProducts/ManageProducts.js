import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ManageSingleProduct from "../ManageSingeProduct/ManageSingleProduct";

const Manageinventory = () => {
  const [products, setProducts] = useProducts();
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
    </div>
  );
};

export default Manageinventory;
