import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import useToken from "../../../../Api/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithFacebook, facebookUser, loading1, facebookError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, loading2, githubError] =
    useSignInWithGithub(auth);
  const [signInWithGoogle, googleUser, loading3, googleError] =
    useSignInWithGoogle(auth);
  const [token] = useToken(facebookUser || googleUser || githubUser);

  useEffect(() => {
    if (token) {
      toast.success("Successfully!!");
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <div className=" ">
      <p className="text-xl text-center mb-4 font-semibold">Sign in With</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:w-full w-1/2 mx-auto text-sm">
        <button
          className="border-[#89c74a] border py-2 px-8 rounded-full  hover:bg-[#89c74a] duration-300  focus:ring-2 ring-offset-1  ring-[#89c74a] font-semibold grid grid-cols-2 "
          onClick={() => signInWithGoogle()}
        >
          <BsGoogle className="text-xl  text-[#e34133]" /> Google
        </button>
        <button
          className="border-[#89c74a] border py-2 px-8 rounded-full  hover:bg-[#89c74a] duration-500 focus:ring-2 ring-offset-1  ring-[#89c74a] font-semibold grid grid-cols-2 "
          onClick={() => signInWithFacebook()}
        >
          <BsFacebook className="text-xl  text-[#0d87ea] " /> facebook
        </button>
        <button
          className="border-[#89c74a] border py-2 px-8 rounded-full  hover:bg-[#89c74a] duration-500 focus:ring-2 ring-offset-1  ring-[#89c74a] font-semibold grid grid-cols-2 "
          onClick={() => signInWithGithub()}
        >
          <BsGithub className="text-xl mr-3" /> GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
