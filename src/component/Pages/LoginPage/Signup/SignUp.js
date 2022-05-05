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

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState("");

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

    if (password === confirmPass) {
      console.log(name, email, password, confirmPass);
      createUserWithEmailAndPassword(email, password);
      toast("Send email verification");
      await updateProfile({ displayName: name });

      setErrors("");
    } else {
      return setErrors("Password not match ?");
    }
  };

  if (token) {
    toast.success("Creat an account successfully!");
    navigate(from, { replace: true });
  }

  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-20 p-5">
      <div className="bg-[#f7f7f7] lg:w-1/2 md:w-1/2 w-full mx-auto p-10 rounded-md">
        <h3 className="header-font text-[#89c74a] font-bold lg:text-5xl text-2xl  text-center mb-10">
          Create Account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            {...register("name", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white  shadow  focus:outline-lime-300 duration-300 outline-none"
            placeholder="Full Name"
          />
          <input
            {...register("email", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white  shadow  focus:outline-lime-300 duration-300 outline-none"
            placeholder="Email"
          />
          <input
            {...register("password", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white  shadow  focus:outline-lime-300 duration-300 outline-none"
            placeholder="Password"
          />
          <input
            {...register("confirmPass", { required: true })}
            className="w-full rounded-full py-3 px-5 bg-white shadow  focus:outline-lime-300 duration-300  outline-none"
            placeholder="Confirm Password"
          />

          <div className="flex justify-between items-center">
            <input type="submit" className="btn2 btn" value={"Sign Up"} />
            {(loading || updating) && <Loading />}
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
