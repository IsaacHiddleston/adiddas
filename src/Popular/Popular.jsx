import React from "react";
import Btn from "./Btn";

const Popular = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="">
        <h1 className="text-[30px] font-bold">Popular Right Now</h1>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="flex flex-col justify-between items-center w-3/4 pr-5  gap-5">
          <Btn name={"samba"}></Btn>
          <Btn name={"campus"}></Btn>
        </div>
        <div className="flex  flex-col justify-between items-center w-3/4 pr-5  gap-5">
          <Btn name={"messi"}></Btn>
          <Btn name={"ultraboost"}></Btn>
        </div>
        <div className="flex  flex-col justify-between items-center w-3/4 pr-5  gap-5 ">
          <Btn name={"gazelle"}></Btn>
          <Btn name={"nmd"}></Btn>
        </div>
      </div>
    </div>
  );
};

export default Popular;
