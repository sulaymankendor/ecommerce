"use client";
import React, { useState } from "react";
import Image from "next/image";
import FiveStars from "@/components/home/FiveStars";
import Sizes from "@/components/product-details/Sizes";
import Counter from "@/components/Counter";
import LoveIcon from "@/components/svgs/LoveIcon";
import DeliveryTruckIcon from "@/components/svgs/DeliveryTruckIcon";
import { MapPin } from "lucide-react";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import Reviews from "@/components/product-details/Reviews";

export default function ProductionDetail({
  params,
}: {
  params: Promise<{ productDetails: string }>;
}) {
  const [quantity, setQuantity] = useState(1);
  console.log(params);

  // const slug = (await params).productDetails;

  return (
    <section className="mt-40 pb-10">
      <div className="grid grid-cols-2 gap-11 mx-auto px-20">
        <div className="bg-gray-200">
          <Image
            src={"/assets/images/controller.png"}
            alt={"asd"}
            width={40000000}
            height={400000}
            className="size-80 mx-auto object-contain"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1>Havic HV G-92 Gamepad</h1>
          <div className="flex items-center gap-2">
            <FiveStars rating={4} />
            <p>(150 Reviews)</p>
            <p>In Stock</p>
          </div>
          <p>$192.00</p>
          <p className="w-[70%] border-b-[1.7px] border-b-gray-400 pb-3">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive. PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess free removal
            Pressure sensitive.
          </p>
          <div className="flex items-center">
            <p>Size:</p>
            <Sizes />
          </div>
          <div className="flex items-center gap-4">
            <Counter quantity={quantity} setQuantity={setQuantity} />
            <button className="bg-red-600 px-6 py-1 text-white font-bold rounded-md">
              Add to Cart
            </button>
            <button className="border-[1px] p-1">
              <LoveIcon />
            </button>
          </div>
          <div className="flex items-center w-96 gap-2 mt-6">
            <DeliveryTruckIcon />
            <div>
              <p className="font-bold">Delivery Period</p>
              <p className="text-sm">March 3 - April 7</p>
            </div>
          </div>
          <div className="flex items-center w-96 gap-2">
            <MapPin size={26} />
            <div>
              <p className="font-bold">Location</p>
              <p className="text-sm">Deliver to Gambia, The</p>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <RelatedProducts />
    </section>
  );
}
