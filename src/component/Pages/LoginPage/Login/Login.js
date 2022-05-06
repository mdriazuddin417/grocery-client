import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useToken from "../../../../Api/useToken";
import { async } from "@firebase/util";

const Login = () => {
  const [email, setEmail] = useState("");
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    setEmail(data.email);
    const password = data.password;

    await signInWithEmailAndPassword(email, password);

    await axios
      .post("https://grocery-shop2.herokuapp.com/login", {
        email,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
      });
  };

  if (token) {
    toast.success("Successfully");
    navigate(from, { replace: true });
  }
  useEffect(() => {
    if (error) {
      switch (error?.code) {
        case "auth/user-not-found":
          toast.error("Please enter a valid email ?");

          break;
        case "auth/wrong-password":
          toast.error("Wrong Password !");

          break;
        default:
          toast.error("Something went wrong !");
          break;
      }
    }
  }, [error]);

  const handleResetPassword = async (email) => {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-5">
      <div className="bg-[#f7f7f7] lg:w-1/2 md:w-1/2 w-full mx-auto p-10 rounded-md">
        <h3 className="header-font text-[#89c74a] font-bold lg:text-5xl text-2xl text-center lg:mb-10 mb-5">
          Please Login
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:space-y-6 space-y-3"
        >
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
            <input type="submit" className="btn2  " value={"Sign In"} />
            {loading && <Loading />}
            {sending && <Loading />}
          </div>
        </form>
        <div className="flex flex-wrap justify-between text-center  border-t mt-5 py-5">
          <p className="link" onClick={() => handleResetPassword(email)}>
            Forget your Password ?
          </p>

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
