import React, { useEffect, useRef, useState } from "react";
import { stocksB } from "./ShoeInstork";

const Lower = () => {
  return (
    <div className="flex gap-5 cursor-pointer">
      {stocksB.map((item, index) => (
        <div key={index}>
          {item.vid ? (
            <video src={item.vid} id={item.id} mute="true" loop />
          ) : (
            <img src={item.img} alt={`Item ${index}`} loop />
          )}
          <div className="my-3">
            <h2 className="font-bold">{item.name}</h2>
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lower;
