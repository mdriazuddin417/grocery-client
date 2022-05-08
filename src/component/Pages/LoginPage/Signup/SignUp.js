import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "../../../../Api/useToken";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import { BiShow, BiHide } from "react-icons/bi";
const SignUp = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState("");
  const [passErrors, setPassErrors] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const [token] = useToken(user);

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPass = data.confirmPass;
    const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/;
    if (!regx.test(password)) {
      setPassErrors("");
      setPassErrors("uppercase, lowercase, number and special characters ");
      return;
    }
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);

      await updateProfile({ displayName: name });
      toast("Send email verification");
      setErrors("");
    } else {
      setPassErrors("");
      setErrors("Password not match ?");
      return;
    }
    reset();
  };

  if (token) {
    toast.success("Creat an account successfully!");
    navigate(from, { replace: true });
  }
  if (error1) {
    console.log(error1.message);
  }

  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-5">
      <PageTitle title="SignUp"></PageTitle>
      <div className="bg-[#f7f7f7] lg:w-1/2 md:w-1/2 w-full mx-auto p-10 rounded-md">
        <h3 className="header-font text-[#89c74a] font-bold lg:text-5xl text-2xl  text-center mb-10">
          Create Account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            {...register("name", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white  shadow  focus:outline-lime-300 duration-300 outline-none"
            placeholder="Full Name"
            type={"text"}
          />
          <input
            {...register("email", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white  shadow  focus:outline-lime-300 duration-300 outline-none"
            placeholder="Email"
            type={"email"}
          />
          <div className="relative">
            <input
              {...register("password", {
                required: true,
              })}
              className="w-full rounded-full py-3 px-5 bg-white shadow  focus:outline-lime-300 duration-300  outline-none "
              placeholder="Password"
              type={open ? "text" : "password"}
            />

            {open ? (
              <BiShow
                className="absolute top-3 right-2 text-2xl"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <BiHide
                className="absolute top-3 right-2 text-2xl"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          <p className="text-red-600 ">{passErrors}</p>
          <input
            type={"password"}
            {...register("confirmPass", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white shadow  focus:outline-lime-300 duration-300  outline-none"
            placeholder="Confirm Password"
          />

          <div className="flex justify-between items-center">
            <input type="submit" className="btn2 btn" value={"Sign Up"} />
            {loading && <Loading />}
            <p className="text-red-600 ">{errors}</p>
          </div>
        </form>
        <div className="flex flex-wrap justify-around border-t mt-5 py-5">
          <Link to={"/login"}>
            <p className="link">I have account</p>
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

export default SignUp;
