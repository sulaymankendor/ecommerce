"use client";
import BestSelling from "@/components/home/BestSelling";
import CategoriesFilters from "@/components/home/CategoriesFilters";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section className="pb-10 mt-20">
      <Image
        src={"/assets/images/hero-image.png"}
        alt="hero icon"
        width={40000000}
        height={400000}
        className="w-full"
      />
      {/* <img src={"/assets/images/hero-image.png"} className="w-full" alt="" /> */}
      <BestSelling />
      <CategoriesFilters />
    </section>
  );
}
