import React from "react";

const Story = ({ header, passage }) => {
  return (
    <div className="">
      <header className="text-[30px] font-semibold my-5">{header}</header>
      <p className="">{passage}</p>
    </div>
  );
};

export default Story;
