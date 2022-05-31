import React from "react";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();

  return (
    <div className="max-w-7xl mx-auto pb-10 lg:px-12 px-4">
      <h2 className="header">Our Products</h2>
      <p className="header-font text-center text-gray-600 pb-5">
        Fresh, healthy and full of Goodness. View our wide range of fresh
        fruits.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 product-card ">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
