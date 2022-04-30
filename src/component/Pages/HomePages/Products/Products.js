import React from "react";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();

  return (
    <div className="max-w-7xl mx-auto py-10 lg:px-12 px-4">
      <h2 className="font-bold text-center  header-font text-4xl text-[#89c74a]">
        Our Products
      </h2>
      <p className="header-font text-center text-gray-600 pt-5">
        Your favorite choice and healthy food
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
