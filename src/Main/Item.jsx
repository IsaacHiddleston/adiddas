import React from "react";

import heart from "../assets/forNavi/heart.svg";

const Item = ({ img, name, price }) => {
  return (
    <div className="group flex-none w-[350px] border-white border-[1px] hover:border-black cursor-pointer">
      <div className="item_img_con relative">
        <img src={heart} alt="" width={20} className="absolute top-3 right-3" />
        <img src={img} alt="" />
        <span className="absolute ml-2 px-1 bg-[#FFFFFF] transition-all ease-in duration-200 left-0 bottom-0 group-hover:bottom-2">
          ${price}
        </span>
      </div>
      <div className="px-3">
        <h2 className="">{name}</h2>
        <h3>shoe</h3>
      </div>
    </div>
  );
};

export default Item;
