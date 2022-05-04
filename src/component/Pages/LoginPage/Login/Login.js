import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    await signInWithEmailAndPassword(email, password);

    await axios
      .post("http://localhost:5000/login", {
        email,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      });
  };

  if (user) {
    toast.success("Successfully");
  }
  if (error) {
    toast.error(error?.message);
  }
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-5">
      <div className="bg-[#f7f7f7] w-1/2 mx-auto p-10 rounded-md">
        <h3 className="header-font text-[#89c74a] font-bold text-5xl text-center mb-10">
          Please Login
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            {...register("email", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white  shadow  focus:outline-lime-300 duration-300 outline-none"
            placeholder="Email"
          />
          <input
            {...register("password", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white shadow  focus:outline-lime-300 duration-300  outline-none"
            placeholder="Password"
          />

          <div className="flex justify-between items-center">
            <input type="submit" className="btn2 mt-20 " value={"Sign In"} />
            {loading && <Loading />}
          </div>
        </form>
        <div className="flex justify-around items-center border-t mt-5 py-5">
          <p className="link">Forget your Password ?</p>

          <Link to={"/signup"}>
            <p className="link">Create account</p>
          </Link>
          <Link to={"/home"}>
            <p className="link">Return to Home</p>
          </Link>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
