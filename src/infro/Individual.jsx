import React from "react";

const Individual = ({ head, body }) => {
  return (
    <div>
      <header className="text-[30px] font-semibold my-5">{head}</header>
      {body.map((item, index) => (
        <p className="hover:underline cursor-pointer" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Individual;
