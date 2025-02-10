"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EyeIcon } from "lucide-react";
import FiveStars from "../home/FiveStars";

const bestSelling = [
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
];
function RelatedProducts() {
  const router = useRouter();

  return (
    <div>
      <h1 className="font-bold text-3xl mb-9 mt-44 ml-8">Related Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3.628rem] mx-auto w-[90vw]">
        {bestSelling.map((product) => {
          return (
            <div key={product.id} className="rounded-b-md">
              <div className="bg-gray-100 py-3 relative">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  width={40000000}
                  height={400000}
                  className="size-32 mx-auto object-contain"
                />
                <button
                  className="bg-red-800"
                  onClick={() => {
                    router.push(`${product.id}`);
                  }}
                >
                  <EyeIcon className="absolute top-3 right-3 text-gray-700" />
                </button>
              </div>
              <p className="font-medium text-gray-500 text-[15px] mt-1">
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
    </div>
  );
}

export default RelatedProducts;
