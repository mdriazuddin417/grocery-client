import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import ManageSingleProduct from "../ManageSingeProduct/ManageSingleProduct";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myitem, setMyitem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;

    const getItem = async () => {
      const url = `http://localhost:5000/products?email=${email}`;

      const { data } = await axios.get(url);
      setMyitem(data);
    };
    getItem();
  }, [user]);
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-15 p-5">
      <table className="table-fixed border border-[#e9e9e9] w-full">
        <thead>
          <tr className="bg-[#e9e9e9] py-2">
            <th className="border border-[#e9e9e9]  py-4">IMAGE</th>
            <th className="border border-[#e9e9e9] py-4">PRODUCT</th>
            <th className="border border-[#e9e9e9]  py-4">PRICE</th>
            <th className="border border-[#e9e9e9]  py-4">Quantity</th>
            <th className="border border-[#e9e9e9]  py-4">UPDATE STOCK</th>
            <th className="border border-[#e9e9e9]  py-4">REMOVE</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {myitem.map((product) => (
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

export default MyItem;
