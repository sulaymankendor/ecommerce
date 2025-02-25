import React from "react";
import ProductCard from "../useable-components/ProductCard";
import { useProducts } from "../../../hooks/useProducts";
import LoadingSpinner from "../useable-components/LoadingSpinner";

function AllProducts() {
  const { products, isLoading } = useProducts();

  return (
    <section>
      <p className="font-bold text-3xl mt-28 ml-8 mb-9">All Products</p>
      {isLoading ? (
        <div className="pt-[3%] pb-[10%]">
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
    </section>
  );
}

export default AllProducts;
