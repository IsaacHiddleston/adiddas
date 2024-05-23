import React from "react";

const Btn = ({ name }) => {
  return (
    <div className="group w-full flex flex-col justify-between items-stretch h-20 cursor-pointer">
      <h1 className="text-[40px] font-bold">{name}</h1>
      <div className="h-[1px] w-full bg-black group-hover:h-2"></div>
    </div>
  );
};

export default Btn;
