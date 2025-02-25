"use client";
import React from "react";
import ProductCard from "../useable-components/ProductCard";
import { useBestSellingProducts } from "../../../hooks/useBestSellingProducts";

function BestSelling() {
  const { products, isLoading } = useBestSellingProducts();
  return (
    <div className="mb-3">
      <h1 className="font-bold text-3xl my-9 ml-8">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3.628rem] mx-auto w-[90vw]">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default BestSelling;
