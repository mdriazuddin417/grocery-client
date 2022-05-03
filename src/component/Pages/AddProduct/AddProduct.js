import React, { useEffect } from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/products`;
    axios.post(url, { data }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-5">
      <div className="mx-auto add-product">
        <p className="header-font font-bold text-[#89c74a] text-5xl text-center mb-5">
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
