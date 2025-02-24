"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EyeIcon } from "lucide-react";
import FiveStars from "../home/FiveStars";
import ProductCard from "../useable-components/ProductCard";

const bestSelling = [
  {
    id: "1asd",
    name: "HAVIT HV-G92 Gamepad",
    price: "$150",
    rating: 4,
    totalNumberOfItems: 30,
    imagePath: "/assets/images/controller.png",
  },
  {
    id: "2asd",
    name: "AK-900 Wired Keyboard",
    price: "$950",
    rating: 4,
    totalNumberOfItems: 300,
    imagePath: "/assets/images/keyboard.png",
  },
  {
    id: "3sda",
    name: "IPS LCD Gaming Monitor",
    price: "$450",
    rating: 5,
    totalNumberOfItems: 90,
    imagePath: "/assets/images/monitor.png",
  },
  {
    id: "4asd",
    name: "S-Series Comfort Chair ",
    price: "$370",
    rating: 4,
    totalNumberOfItems: 99,
    imagePath: "/assets/images/chair.png",
  },
  {
    id: "5asd",
    name: "CANON EOS DSLR Camera",
    price: "$1,020",
    rating: 4,
    totalNumberOfItems: 20,
    imagePath: "/assets/images/canon-camera.png",
  },
  {
    id: "6dsf",
    name: "AK-900 Wired Keyboard",
    price: "$950",
    rating: 4,
    totalNumberOfItems: 300,
    imagePath: "/assets/images/keyboard.png",
  },
  {
    id: "7dsa32",
    name: "Jr. Zoom Soccer Cleats",
    price: "$450",
    rating: 5,
    totalNumberOfItems: 90,
    imagePath: "/assets/images/football-boots.png",
  },
  {
    id: "83223",
    name: "S-Series Comfort Chair ",
    price: "$370",
    rating: 4,
    totalNumberOfItems: 99,
    imagePath: "/assets/images/chair.png",
  },
];
function RelatedProducts() {
  const router = useRouter();

  return (
    <div>
      <h1 className="font-bold text-3xl mb-9 mt-44 ml-8">Related Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3.628rem] mx-auto w-[90vw]">
        {bestSelling.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
