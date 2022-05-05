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
      {/* <nav className="lg:flex justify-between items-center   max-w-7xl mx-auto lg:px-12 lg:py-3 py-3">
        <div className="flex justify-between items-center  px-3">
          <h3 className=" text-3xl header-font font-bold text-[#89c74a]">
            Grocery Shop
          </h3>
          <span
            className="lg:hidden text-3xl text-[#89c74a]"
            onClick={() => setOpen(!open)}
          >
            {!open ? <RiMenu2Line /> : <MdClose />}
          </span>
        </div>
        <ul
          className={`lg:flex lg:space-x-5  lg:bg-white lg:text-black block text-center text-white leading-[3rem] bg-[#89c74a]  ${
            !open ? "hidden" : " block"
          }`}
        >
          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white  hover:bg-orange-400 duration-500">
            <Link to={"/home"}>Home</Link>
          </li>

          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white  hover:bg-orange-400 duration-500">
            <Link to={"/manageinventory"}>Manage Inventory</Link>
          </li>
          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white  hover:bg-orange-400 duration-500">
            <Link to={"/manageitem"}>Manage Item</Link>
          </li>
          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white  hover:bg-orange-400 duration-500">
            <Link to={"/myitem"}>My Items</Link>
          </li>
          {user ? (
            <button
              className="bg-[#89c74a] px-5 text-white rounded-full"
              onClick={() => signOut(auth)}
            >
              SignOut
            </button>
          ) : (
            <li className="border-b-2 border-white lg:px-5 lg:hover:text-white hover:bg-orange-400 duration-500">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </nav> */}
      <div className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto lg:flex">
          <div className="flex  justify-between px-12 py-5 items-center ">
            <Link to={"/"}>
              <span className="ml-3 lg:text-3xl text-xl header-font text-[#89c74a]">
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
