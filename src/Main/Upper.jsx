import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import { stocks } from "./ShoeInstork";
import al from "../assets/forBoth/al.svg";
import ar from "../assets/forBoth/ar.svg";

const Upper = () => {
  const scrollContainerRef = useRef(null);
  const [leftZero, setLeftZero] = useState(false);
  const [rightZero, setRightZero] = useState(false);

  useEffect(() => {
    scrollContainerRef.current.scrollLeft === 0
      ? console.log("ok")
      : console.log("");
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

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
      <div className="py-10 relative">
        <div
          className="flex gap-5 overflow-auto upper "
          ref={scrollContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="w-[50px] flex justify-center items-center h-11 absolute z-[2] left-0 top-[50%] bg-white border-[1px] border-[black]">
            <img src={al} alt="" width={25} height={32} onClick={scrollLeft} />
          </div>
          <div className="w-[50px] flex justify-center items-center h-11 absolute z-[2] right-0 bottom-[50%] bg-white border-[1px] border-[black]">
            <img src={ar} alt="" width={25} height={32} onClick={scrollRight} />
          </div>
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
