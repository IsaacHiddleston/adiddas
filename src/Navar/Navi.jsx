import React, { useEffect, useState } from "react";

import heart from "../assets/forNavi/heart.svg";
import cart from "../assets/forNavi/cart.svg";
import user from "../assets/forNavi/user.svg";
import logo from "../assets/forNavi/logo.png";
import Olay from "./Olay";

const Navi = () => {
  const nav = ["MEN", "WOMEN", "KIDS", "SALE", "3 STRIPE LIFE"];
  const [hov, setHov] = useState(false);
  const hover = document.getElementsByClassName("hov");
  const handleMouseEnter = () => setHov(true);
  const handleMouseLeave = () => setHov(false);

  return (
    <div className="top-0 bg-white w-screen h-[135px]">
      <div className="top bg-black flex items-center justify-center h-[2rem] ">
        <div className="text">
          <span className="text-white">text</span>
        </div>
      </div>
      <div className="botton flex justify-between items-center ">
        <div className="logo">
          <img src={logo} alt="logo" width={130} height={30} />
        </div>
        <div className="navi_menu flex justify-center items-center mx-[5rem] pt-5">
          <ul className="flex  text-xl mr-[10rem] text-[14px] tracking-widest cursor-pointer font-bold ulLay ">
            {nav.map((item, index) => (
              <div
                key={index}
                className="group flex justify-center items-center relative hov w-auto px-3 pt-3"
                onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              >
                <li className="bttn h-[64px]">{item}</li>
                <div className="group-hover:w-full w-0 h-[4px] bg-black absolute bottom-[0px]"></div>
              </div>
            ))}
          </ul>

          <input
            type="text"
            placeholder="Search"
            className="bg-[#ECEFF1] outline-1 w-[170px] h-[30px]"
          />
          <div className="right_logo_container flex gap-3 mx-3">
            <img src={user} alt="" width={20} />

            <img src={heart} alt="" width={20} />
            <img src={cart} alt="" width={20} />
          </div>
        </div>
      </div>
      <div
        id="olay"
        className={`bg-red-500 olay ${hov ? "" : "hidden"}`}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      >
        <Olay />
      </div>
    </div>
  );
};

export default Navi;
