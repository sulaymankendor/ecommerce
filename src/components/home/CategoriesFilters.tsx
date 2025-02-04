import React from "react";
import CellPhone from "../svgs/CellPhone";
import Computer from "../svgs/Computer";
import SmartWatch from "../svgs/SmartWatch";
import Camera from "../svgs/Camera";
import Gamepad from "../svgs/Gamepad";
import FiveStars from "./FiveStars";
import Image from "next/image";

const categories = [
  { id: 1, icon: CellPhone, name: "Phone" },
  { id: 2, icon: Computer, name: "Computers" },
  { id: 3, icon: SmartWatch, name: "SmartWatch" },
  { id: 4, icon: Camera, name: "Camera" },
  { id: 6, icon: Gamepad, name: "Gaming" },
];

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$150",
    rating: 4,
    totalNumberOfItems: 30,
    imagePath: "/assets/images/controller.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$950",
    rating: 4,
    totalNumberOfItems: 300,
    imagePath: "/assets/images/keyboard.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$450",
    rating: 5,
    totalNumberOfItems: 90,
    imagePath: "/assets/images/monitor.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair ",
    price: "$370",
    rating: 4,
    totalNumberOfItems: 99,
    imagePath: "/assets/images/chair.png",
  },
  {
    id: 5,
    name: "CANON EOS DSLR Camera",
    price: "$1,020",
    rating: 4,
    totalNumberOfItems: 20,
    imagePath: "/assets/images/canon-camera.png",
  },
  {
    id: 6,
    name: "AK-900 Wired Keyboard",
    price: "$950",
    rating: 4,
    totalNumberOfItems: 300,
    imagePath: "/assets/images/keyboard.png",
  },
  {
    id: 7,
    name: "Jr. Zoom Soccer Cleats",
    price: "$450",
    rating: 5,
    totalNumberOfItems: 90,
    imagePath: "/assets/images/football-boots.png",
  },
  {
    id: 8,
    name: "S-Series Comfort Chair ",
    price: "$370",
    rating: 4,
    totalNumberOfItems: 99,
    imagePath: "/assets/images/chair.png",
  },
  {
    id: 9,
    name: "HAVIT HV-G92 Gamepad",
    price: "$150",
    rating: 4,
    totalNumberOfItems: 30,
    imagePath: "/assets/images/controller.png",
  },
  {
    id: 10,
    name: "AK-900 Wired Keyboard",
    price: "$950",
    rating: 4,
    totalNumberOfItems: 300,
    imagePath: "/assets/images/keyboard.png",
  },
  {
    id: 11,
    name: "IPS LCD Gaming Monitor",
    price: "$450",
    rating: 5,
    totalNumberOfItems: 90,
    imagePath: "/assets/images/monitor.png",
  },
  {
    id: 12,
    name: "S-Series Comfort Chair ",
    price: "$370",
    rating: 4,
    totalNumberOfItems: 99,
    imagePath: "/assets/images/chair.png",
  },
  {
    id: 13,
    name: "CANON EOS DSLR Camera",
    price: "$1,020",
    rating: 4,
    totalNumberOfItems: 20,
    imagePath: "/assets/images/canon-camera.png",
  },
  {
    id: 14,
    name: "AK-900 Wired Keyboard",
    price: "$950",
    rating: 4,
    totalNumberOfItems: 300,
    imagePath: "/assets/images/keyboard.png",
  },
  {
    id: 15,
    name: "Jr. Zoom Soccer Cleats",
    price: "$450",
    rating: 5,
    totalNumberOfItems: 90,
    imagePath: "/assets/images/football-boots.png",
  },
  {
    id: 16,
    name: "S-Series Comfort Chair ",
    price: "$370",
    rating: 4,
    totalNumberOfItems: 99,
    imagePath: "/assets/images/chair.png",
  },
];
function CategoriesFilters() {
  return (
    <section>
      <p className="font-bold text-3xl mt-28 ml-8">Browse By Category</p>
      <div className="flex items-center mt-6 ml-8 mx-auto mb-20 gap-12">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="border-[1px] flex flex-col items-center p-10"
            >
              <category.icon />
              <p className="text-sm">{category.name}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3.628rem] mx-auto w-[90vw]">
        {products.map((product) => {
          return (
            <div key={product.id} className="rounded-b-md mb-6">
              <div className="bg-gray-100">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  width={40000000}
                  height={400000}
                  className="size-32 mx-auto py-3 object-contain"
                />
              </div>
              <p className="font-medium text-gray-500 text-sm mt-1">
                {product.name}
              </p>
              <p className="text-gray-500 font-semibold text-sm ">
                {product.price}
              </p>
              <FiveStars rating={product.rating} />
              <button className="bg-black text-white w-full py-1 rounded-b-md mt-3 text-sm font-medium">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoriesFilters;
