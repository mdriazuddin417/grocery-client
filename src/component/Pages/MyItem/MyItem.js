import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import privateAxios from "../../../Api/privateAxios";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageSingleProduct from "../ManageSingeProduct/ManageSingleProduct";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myitem, setMyitem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;

    const getItem = async () => {
      const url = `https://grocery-shop2.herokuapp.com/items?email=${email}`;

      try {
        const { data } = await privateAxios.get(url);
        setMyitem(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItem();
  }, [user]);
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-15 p-5">
      <PageTitle title="My Item"></PageTitle>
      <table className="table-fixed border border-[#e9e9e9] w-full">
        <thead>
          <tr className="bg-[#e9e9e9] py-2 lg:text-lg text-[10px] sm:text-base md:text-md ">
            <th className="border border-[#e9e9e9]  py-4">IMAGE</th>
            <th className="border border-[#e9e9e9] py-4">PRODUCT</th>
            <th className="border border-[#e9e9e9]  py-4">PRICE</th>
            <th className="border border-[#e9e9e9]  py-4">Quantity</th>
            <th className="border border-[#e9e9e9]  py-4">UPDATE</th>
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
