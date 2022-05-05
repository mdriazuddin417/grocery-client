import React, { useEffect } from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const AddProduct = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = `http://localhost:5000/products`;

    const email = user?.email;
    const name = data.name;
    const price = data.price;
    const selerName = data.selerName;
    const text = data.text;
    const image = data.image;
    const quantity = data.quantity;

    const product = {
      email,
      name,
      price,
      selerName,
      text,
      image,
      quantity,
    };

    axios.post(url, { product }).then((res) => {
      toast.success("New product added");
      console.log(res);
    });
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-5">
      <div className="mx-auto add-product lg:w-1/2 md:w-1/3 w-full">
        <p className="header-font font-bold text-[#89c74a] lg:text-5xl text-2xl text-center mb-5">
          Product Add{" "}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Product Name"
          />{" "}
          <br />
          <input
            {...register("selerName", { required: true })}
            placeholder="Sealer Name"
          />{" "}
          <br />
          <input
            {...register("price", { required: true })}
            placeholder="Price "
          />
          <br />
          <input
            {...register("quantity", { required: true })}
            placeholder="Product Quantity"
          />
          <br />
          <input
            {...register("image", { required: true })}
            placeholder="Image URL..."
          />
          <textarea
            {...register("text", { required: true })}
            placeholder="Description"
            className="w-full "
          />
          <br />
          <input
            type="submit"
            value={"Submit"}
            className="focus:ring-2  ring-offset-1 ring-green-500"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
