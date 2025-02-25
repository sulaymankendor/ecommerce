"use client";
import React from "react";
import ProductCard from "../useable-components/ProductCard";
import { useBestSellingProducts } from "../../../hooks/useBestSellingProducts";
import LoadingSpinner from "../useable-components/LoadingSpinner";

function BestSelling() {
  const { products, isLoading } = useBestSellingProducts();
  return (
    <div className="mb-3">
      <h1 className="font-bold text-3xl mb-9 mt-16 ml-8">
        Best Selling Products
      </h1>

      {isLoading ? (
        <div className="py-[6%]">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3.628rem] mx-auto w-[90vw]">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default BestSelling;
