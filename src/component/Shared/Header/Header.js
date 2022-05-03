import React, { useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
      <nav className="lg:flex justify-between items-center lg:py-3  max-w-7xl mx-auto lg:px-12 ">
        <div className="flex justify-between items-center py-5 px-3">
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
          className={`lg:flex lg:space-x-5 text-xl lg:bg-white lg:text-black block text-center text-white leading-[3rem] bg-[#89c74a]  ${
            !open ? "hidden" : " block"
          }`}
        >
          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white rounded-lg hover:bg-orange-400 duration-500">
            <Link to={"/home"}>Home</Link>
          </li>

          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white rounded-lg hover:bg-orange-400 duration-500">
            <Link to={"/manageproducts"}>Manage Products</Link>
          </li>
          <li className="border-b-2 border-white lg:px-5 lg:hover:text-white rounded-lg hover:bg-orange-400 duration-500">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
