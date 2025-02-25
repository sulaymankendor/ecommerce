"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FiveStars from "@/components/home/FiveStars";
import Counter from "@/components/Counter";
import DeliveryTruckIcon from "@/components/svgs/DeliveryTruckIcon";
import { MapPin } from "lucide-react";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import Reviews from "@/components/product-details/Reviews";
import { useProducts } from "../../../hooks/useProducts";
import { Product } from "../../../types/cartTypes";
import { useBestSellingProducts } from "../../../hooks/useBestSellingProducts";
import LoadingSpinner from "@/components/useable-components/LoadingSpinner";

export default function ProductionDetail({
  params,
}: {
  params: Promise<{ productDetails: string }>;
}) {
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    price: "",
    rating: 0,
    totalNumberOfItems: 0,
    imagePath: "",
  });
  const { products } = useProducts();
  const resolvedParams = React.use(params);

  useEffect(() => {
    async function filterProducts() {
      // Access the resolved params
      const productDetails = resolvedParams.productDetails;

      // Filter products based on the resolved productDetails
      const filteredProducts = products.filter(
        (product) => product.id === productDetails
      );

      // Set the filtered product
      setProduct(filteredProducts[0]);
    }

    filterProducts();
  }, [resolvedParams, products]);

  return (
    <section className="mt-40 pb-10">
      <div className="grid grid-cols-2 gap-11 mx-auto px-20">
        <div className="bg-gray-200">
          {product?.imagePath ? (
            <Image
              src={product?.imagePath}
              alt={"asd"}
              width={40000000}
              height={400000}
              className="size-80 mx-auto object-contain"
            />
          ) : (
            <div className="h-full">
              <LoadingSpinner marginVertical={"18%"} />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="font-bold">{product?.name}</h1>
          <div className="flex items-center gap-2">
            <FiveStars rating={product?.rating} />
            <p>(150 Reviews)</p>
            <p>({product?.totalNumberOfItems}) In Stock</p>
          </div>
          <p className="font-bold">{product?.price}</p>
          <p className="w-[70%] border-b-[1.7px] border-b-gray-400 pb-3">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive. PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess free removal
            Pressure sensitive.
          </p>

          <div className="flex items-center gap-4">
            <Counter />
            <button
              onClick={() => {
                // if (isInCart) {
                //   removeFromCart(product.id);
                // } else {
                //   addToCart(product);
                // }
              }}
              className="bg-red-600 px-6 py-1 text-white font-bold rounded-md"
            >
              Add to Cart
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
