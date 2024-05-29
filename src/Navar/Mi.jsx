import React from "react";

const Mi = ({ itemArray, category }) => {
  return (
    <div className="">
      <div className={``}>
        <div className="flex">
          {" "}
          <h3 className="group text-xl my-4 cursor-pointer">
            {category}
            <div
              className={`bg-black transition-all duration-200 ease-in-out w-0 rounded h-[2px] group-hover:w-full`}
            ></div>
          </h3>
        </div>

        {itemArray && (
          <div className="itemArray flex flex-col my-2">
            {itemArray.map((item, index) => {
              return (
                <div className="flex my-1" key={index}>
                  <h4 className="group cursor-pointer">
                    {item}
                    <div
                      className={`bg-black transition-all duration-200 ease-in-out w-0 rounded h-[2px] group-hover:w-full`}
                    ></div>
                  </h4>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mi;
