import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import { stocks } from "./ShoeInstork";
import al from "../assets/forBoth/al.svg";
import ar from "../assets/forBoth/ar.svg";

const Upper = () => {
  const scrollContainerRef = useRef(null);
  const [scrollL, setScrollL] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;

      setScrollL(scrollLeft);
      setScrollEnd(scrollLeft + clientWidth >= scrollWidth);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 1000,
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
          className="flex gap-5 overflow-auto upper group"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div
            className={`w-[50px] transition-opacity duration-500 opacity-0 group-hover:opacity-${
              scrollL === 0 ? "0" : "100"
            } flex justify-center items-center h-11 absolute z-[2] left-0 top-[50%] bg-white border-[1px] border-[black]`}
          >
            <img src={al} alt="" width={25} height={32} onClick={scrollLeft} />
          </div>
          <div
            className={`w-[50px] transition-opacity duration-500 opacity-0 group-hover:opacity-${
              scrollEnd ? "0" : "100"
            } flex justify-center items-center h-11 absolute z-[2] right-0 top-[50%] bg-white border-[1px] border-[black]`}
          >
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
