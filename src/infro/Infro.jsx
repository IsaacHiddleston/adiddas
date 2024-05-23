import React from "react";
import { infro } from "../Main/ShoeInstork.js";
import Individual from "./Individual.jsx";

const Infro = () => {
  return (
    <div>
      <div className="flex justify-around p-[100px]">
        {infro.map((item, index) => (
          <div key={index}>
            <Individual head={item.head} body={item.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infro;
