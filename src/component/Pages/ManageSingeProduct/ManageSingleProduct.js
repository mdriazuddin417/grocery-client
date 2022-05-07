import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import useProducts from "../../hooks/useProducts";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";
import { toast } from "react-toastify";

const ManageSingleProduct = ({ product }) => {
  const [products, setProducts] = useState([]);
  const { name, price, selerName, text, image, quantity, _id } = product;

  useEffect(() => {
    fetch(" https://grocery-shop2.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //================confirm modal=====================

  const handleDelete = (id) => {
    confirmAlert({
      message: "Are you sure ?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const url = ` https://grocery-shop2.herokuapp.com/products/${id}`;
            await axios.delete(url).then((res) => {
              if (res) {
                toast.success("Items Delete Successfully !!");
                const newProducts = products.filter(
                  (product) => product._id !== id
                );
                setProducts(newProducts);
                window.location.reload();
              }
            });
          },
        },
        {
          label: "No",
          onClick: () => {
            toast("No delete Items !");
            return;
          },
        },
      ],
    });
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
            className=" lg:text-3xl text-xl text-[red] cursor-pointer "
            onClick={() => handleDelete(_id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
