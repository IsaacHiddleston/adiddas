import React, { useEffect } from "react";

import heart from "../assets/forNavi/heart.svg";
import cart from "../assets/forNavi/cart.svg";
import user from "../assets/forNavi/user.svg";
import logo from "../assets/forNavi/logo.png";

const Navi = () => {
  return (
    <div className=" top-0 bg-white w-screen">
      <div className="top bg-black flex items-center justify-center h-[2rem] ">
        <div className="text">
          <span className="text-white">text</span>
        </div>
      </div>
      <div className="botton flex justify-between items-center ">
        <div className="logo">
          <img src={logo} alt="logo" width={140} height={40} />
        </div>
        <div className="navi_menu flex justify-center mx-[5rem] pt-7">
          <ul className="flex gap-6 text-xl mr-[10rem] text-[15px]">
            <li>MEN </li>
            <li>WOMEN </li>
            <li>KID </li>
            <li>SALE </li>
            <li>3 STRIPE LIFE </li>
          </ul>

          <input
            type="text"
            placeholder="Search"
            className="bg-[#ECEFF1] outline-1"
          />
          <div className="right_logo_container flex gap-3 mx-3">
            <img src={user} alt="" width={20} />

            <img src={heart} alt="" width={20} />
            <img src={cart} alt="" width={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navi;
