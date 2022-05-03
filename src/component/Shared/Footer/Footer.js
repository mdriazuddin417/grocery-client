import React from "react";
import "./Footer.css";
import { FaFacebookF, FaGithub, FaHome, FaPhoneAlt } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  const helps = [
    "Search",
    "Help",
    "Information",
    "Privacy Policy",
    "Shipping Information",
  ];
  const supports = [
    "Contact",
    "About Us",
    "Carrers",
    "Refund & Returns",
    " Deliveries",
  ];
  const Informations = [
    "Search Terms",
    "Advanced Search",
    "Helps & Faqs",
    "Store Location",
    "Orders & Returns",
  ];
  return (
    <div className="footer  max-w-7xl mx-auto lg:px-12 lg:pb-16 text-white   lg:pt-20 p-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gird-cols-1 gap-5 lg:pt-20 z-0">
        <div className="space-y-3 text-lg">
          <p className="header-font text-3xl text-[#89c74a] font-bold">
            Grocery Shop
          </p>
          <div className="flex  items-center hover:text-[#89c74a] duration-300">
            <FaHome className="text-2xl mr-3 hover:text-[#89c74a] duration-300" />
            <p>
              Kasba,Brahmonbaria,
              <br /> Bangladesh
            </p>
          </div>
          <div className="flex  items-center hover:text-[#89c74a] duration-300">
            <FaPhoneAlt className="text-xl mr-3 " />
            <p>+88-01786552964</p>
          </div>
          <div className="flex  items-center hover:text-[#89c74a] duration-300">
            <HiOutlineMail className="text-xl mr-3 " />
            <p>mdriazuddin417@gmail.com</p>
          </div>

          <div className="flex space-x-7  ">
            <a
              href="www.facebook.com"
              className="hover:text-[#89c74a] duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="www.github.com"
              className="hover:text-[#89c74a] duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com"
              className="hover:text-[#89c74a] duration-300"
            >
              <GrLinkedinOption />
            </a>
          </div>
        </div>
        <div>
          <p className="header-font text-2xl font-bold mb-5">Help</p>
          <ul>
            {helps.map((help, index) => (
              <li
                key={index}
                className="flex items-center  hover:text-[#89c74a] duration-300 text-lg"
              >
                <IoIosArrowForward className="mr-2" /> {help}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="header-font text-2xl font-bold mb-5">Support</p>
          <ul>
            {supports.map((support, index) => (
              <li
                key={index}
                className="flex items-center  hover:text-[#89c74a] duration-300 text-lg"
              >
                <IoIosArrowForward className="mr-2" /> {support}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="header-font text-2xl font-bold mb-5">Information</p>
          <ul>
            {Informations.map((Information, index) => (
              <li
                key={index}
                className="flex items-center hover:text-[#89c74a] duration-300 text-lg "
              >
                <IoIosArrowForward className="mr-2" /> {Information}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
