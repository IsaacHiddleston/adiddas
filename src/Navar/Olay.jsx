import React from "react";
import extra from "../assets/forNavi/extra.avif";
import Mi from "./Mi";

const Olay = ({ left, right }) => {
  const adidasShoeNames = [
    "Ultraboost",
    "NMD_R1",
    "Superstar",
    "Stan Smith",
    "Gazelle",
    "Alphabounce",
    "Yeezy Boost 350",
    "Terrex Free Hiker",
  ];
  const adidasSports = [
    "Running",
    "Soccer",
    "Basketball",
    "Tennis",
    "Golf",
    "Training",
    "Outdoor",
    "Skateboarding",
    "Swimming",
    "Yoga",
  ];
  const adidasCollections = [
    "Originals",
    "Performance",
    "Y-3",
    "Adicolor",
    "Stella McCartney",
    "Pharrell Williams",
    "Parley",
    "Adizero",
    "Terrex",
    "Athletics",
  ];
  const adidasClothing = [
    "T-Shirts",
    "Hoodies",
    "Jackets",
    "Pants",
    "Shorts",
    "Tracksuits",
    "Sports Bras",
    "Leggings",
    "Socks",
    "Swimwear",
  ];
  const adidasAccessories = [
    "Bags",
    "Caps",
    "Socks",
    "Watches",
    "Sunglasses",
    "Gloves",
    "Scarves",
    "Belts",
    "Headbands",
    "Water Bottles",
  ];
  const leftMenu = {
    header: "New & Trending",
    menu: ["New Arrival", "Best Seller", "Only at addidas", "Member Exclusive"],
    img: extra,
  };

  return (
    <div className="w-screen h-[80vh] bg-white flex justify-around item-center p-15 border-t-2">
      <div className="p-10 flex justify-start items-center flex-col border-r-2">
        <h2 className="font-bold hover:underline cursor-pointer">
          {leftMenu.header}
        </h2>
        <ul>
          {leftMenu.menu.map((item, index) => {
            return (
              <li className=" hover:underline cursor-pointer" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <img src={leftMenu.img} alt="" />
      </div>

      <div className="flex justify-around gap-5 ">
        <Mi category={"SHOES"} itemArray={adidasShoeNames} />
        <Mi category={"CLOTHING"} itemArray={adidasClothing} />
        <Mi category={"ACCESSORIES"} itemArray={adidasAccessories} />
        <Mi category={"SHOP BY SPORT"} itemArray={adidasSports} />
        <Mi category={"SHOP BY COLLECTION"} itemArray={adidasCollections} />
      </div>
    </div>
  );
};

export default Olay;
