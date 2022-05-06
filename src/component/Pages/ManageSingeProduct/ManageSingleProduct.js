import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import useProducts from "../../hooks/useProducts";

const ManageSingleProduct = ({ product }) => {
  const [products, setProducts] = useProducts();
  const { name, price, selerName, text, image, quantity, _id } = product;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure?");
    console.log(proceed);
    if (proceed) {
      const url = `https://grocery-shop2.herokuapp.com/products/${id}`;

      axios.delete(url).then((res) => {
        const newProducts = products.filter((product) => product._id !== id);
        setProducts(newProducts);
        console.log(res);
      });
    }
  };

  return (
    <tr className="border border-[#e9e9e9]">
      <td>
        <img src={image} alt="" />
      </td>
      <td className="lg:text-2xl font-semibold">{name}</td>
      <td className="lg:text-2xl font-semibold">${price}</td>
      <td className="lg:text-2xl font-semibold">{quantity}</td>
      <td>
        <Link to={`/checkout/${_id}`}>
          <button className="btn3">Stock</button>
        </Link>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <MdDelete
            className=" lg:text-3xl text-xl text-[red] cursor-pointer"
            onClick={() => handleDelete(_id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
