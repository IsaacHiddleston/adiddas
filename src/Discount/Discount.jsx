import React from "react";
import arr from "../assets/forCampus/arrow.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Discount = () => {
  return (
    <div className="bg-[#EDE734] flex justify-center items-center h-[130px] gap-6">
      <h1 className="text-black font-bold text-[30px]">
        JOIN OUR ADICLUB & GET 15% OFF
      </h1>
      <button className="bg-black unique text-white hover:text-[#6B696C] w-[15rem] h-[50px]">
        SIGN UP FOR FREE
        <img src={ArrowForwardIcon} alt="" />
      </button>
    </div>
  );
};

export default Discount;
