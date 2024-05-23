import React from "react";
import Upper from "./Upper";
import Lower from "./Lower";
import Popular from "../Popular/Popular";

const Both = () => {
  return (
    <div className="p-[60px]">
      <Upper />
      <Lower />
      <Popular />
    </div>
  );
};

export default Both;
