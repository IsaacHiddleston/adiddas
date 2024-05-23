import React from "react";
import Item from "./Item";
import { stocks } from "./ShoeInstork";

const Upper = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="Upper_btn bg-black text-white">
            New Arrivals
          </button>
          <button className="Upper_btn hover:bg-black hover:text-white">
            What's Trending
          </button>
        </div>
        <span className="text-xl underline underline-offset-5 decoration-1 hover:bg-black hover:text-white h-[30px] transition duration-240 cursor-pointer">
          VIEW ALL
        </span>
      </div>
      <div className="py-10 ">
        <div className="flex gap-5 overflow-auto upper">
          {stocks?.map((item, index) => {
            return (
              <Item
                img={item.img}
                name={item.name}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Upper;
