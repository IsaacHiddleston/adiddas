import React from "react";
import arr from "../assets/forCampus/arrow.svg";
import play from "../assets/forCampus/play.svg";
import pause from "../assets/forCampus/pause.svg";

const OverlayCam = ({ fun, prop }) => {
  return (
    <div className="flex flex-col p-5 gap-3 absolute bottom-0 ml-[2.6rem]">
      <h1 className="text-[30px] text-white font-bold">SAMBA</h1>
      <span className="text-white text-[15px] font-bold">
        For any and every look.
      </span>
      <div className="but_container flex gap-5 ">
        <button className="flex z-[1] bg-[#FFFFFF] border font-bold border-black items-center px-3 py-1">
          SHOP MEN
          <img src={arr} width={30} height={10} alt="" className="ml-3" />
        </button>
        <button className="flex z-[1] bg-[#FFFFFF] border  font-bold border-black items-center px-3 py-1">
          SHOP WOMEN
          <img src={arr} width={30} height={10} alt="" className="ml-3" />
        </button>
        <button className="flex z-[1] bg-[#FFFFFF] border  font-bold border-black items-center px-3 py-1">
          SHOP KID
          <img src={arr} width={30} height={10} alt="" className="ml-3" />
        </button>
      </div>
      <img
        src={prop ? pause : play}
        onClick={() => fun(!prop)}
        width={50}
        alt=""
      />
    </div>
  );
};

export default OverlayCam;
