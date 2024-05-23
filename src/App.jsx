import React, { useEffect, useRef, useState } from "react";
import Navi from "./Navar/Navi";
import Campus from "./Campus/Campus";
import Both from "./Main/Both";

import Stories from "./Stories/Stories";
import Discount from "./Discount/Discount";
import Infro from "./infro/Infro";

const App = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);
  const app = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentScroll(window.pageYOffset);

      if (lastScroll === currentScroll) {
        setScrollUp(true);
      } else if (lastScroll < currentScroll) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      setLastScroll(currentScroll);
    });
  });

  return (
    <div className="font-time">
      <div
        className={`fixed transition-all duration-700 delay-100 ${
          scrollUp ? "top-0" : "top-[-20rem]"
        } z-[2]`}
      >
        <Navi />
      </div>

      <Campus />
      <Both />
      <Stories />
      <Discount />
      <Infro />
    </div>
  );
};

export default App;
