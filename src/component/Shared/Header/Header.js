import React, { useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <div className="">
      <div className=" bg-color1">
        <div className="lg:flex justify-between px-12 max-w-7xl mx-auto py-2  text-white items-center grid md:grid-cols-2 grid-cols-1 ">
          <div className=" lg:flex grid grid-cols-1  ">
            <div className="flex lg:border-r-2 px-2 items-center hover:text-black duration-300">
              <p className="pr-2">
                <AiOutlineMail />
              </p>
              <p>mdriazuddin417@gmail.com</p>
            </div>
            <div className="flex lg:border-r-2 px-2 items-center hover:text-black duration-300">
              <p className="pr-2">
                <AiTwotonePhone />
              </p>
              <p>+88-01786552964</p>
            </div>
          </div>
          <div className="flex space-x-7  ">
            <a href="#" className="hover:text-black duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-black duration-300">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-black duration-300">
              <GrLinkedinOption />
            </a>
          </div>
        </div>
      </div>

      <div className="text-gray-600 body-font nav ">
        <div className="max-w-7xl mx-auto lg:flex lg:py-2">
          <div className="flex  justify-between px-12 py-5 items-center ">
            <Link to={"/"}>
              <span className="ml-3 lg:text-3xl text-xl header-font font-bold text-[#89c74a]">
                Grocery Shop
              </span>
            </Link>
            <span
              className="lg:hidden text-3xl text-[#89c74a]"
              onClick={() => setOpen(!open)}
            >
              {!open ? <RiMenu2Line /> : <MdClose />}
            </span>
          </div>

          <nav
            className={`md:ml-auto   lg:flex flex-wrap items-center text-base justify-center text-center space-y-3 lg:space-y-0 px-20 py-5 lg:px-0 lg:py-0 lg:bg-white bg-[#89c74a]  ${
              !open ? "hidden" : " block"
            }`}
          >
            <CustomLink to={"/home"} className="mr-5 ">
              Home
            </CustomLink>
            <CustomLink to={"/blog"} className="mr-5 ">
              Blog
            </CustomLink>

            {user ? (
              <>
                <CustomLink to={"/manageitem"} className="mr-5 ">
                  Manage Item
                </CustomLink>
                <CustomLink to={"/additem"} className="mr-5 ">
                  Add Item
                </CustomLink>
                <CustomLink to={"/myitem"} className="mr-5 ">
                  My Item
                </CustomLink>
                <button className="mr-5 " onClick={() => signOut(auth)}>
                  Sign Out
                </button>
              </>
            ) : (
              <Link to={"/login"} className="mr-5 ">
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
