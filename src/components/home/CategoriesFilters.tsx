import React from "react";
import ProductCard from "../useable-components/ProductCard";
import { useProducts } from "../../../hooks/useProducts";

function CategoriesFilters() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <p className="font-bold text-3xl mt-28 ml-8 mb-9">All Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3.628rem] mx-auto w-[90vw]">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}

export default CategoriesFilters;
