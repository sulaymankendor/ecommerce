"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import FiveStars from "@/components/home/FiveStars";
import Counter from "@/components/Counter";
import DeliveryTruckIcon from "@/components/svgs/DeliveryTruckIcon";
import { MapPin } from "lucide-react";
import Reviews from "@/components/product-details/Reviews";
import { useProducts } from "../../../hooks/useProducts";
import { Product } from "../../../types/cartTypes";
import { useBestSellingProducts } from "../../../hooks/useBestSellingProducts";
import LoadingSpinner from "@/components/useable-components/LoadingSpinner";
import { CartContext } from "../layout";
import { useCart } from "../../../hooks/useCart";

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
  const cartState = useContext(CartContext);
  const { addToCart, removeFromCart } = useCart();
  const bestSellingProducts = useBestSellingProducts();
  const resolvedParams = React.use(params);
  const isInCart = cartState.cart.some(
    (cartItem) => cartItem.id === product?.id || ""
  );

  useEffect(() => {
    async function filterProducts() {
      // Access the resolved params
      const productDetails = resolvedParams.productDetails;

      // Filter products based on the resolved productDetails
      const filteredProducts = [
        ...products,
        ...bestSellingProducts.products,
      ].filter((product) => product.id === productDetails);

      // Set the filtered product
      setProduct(filteredProducts[0]);
    }

    filterProducts();
  }, [resolvedParams, products]);

  return (
    <section className="mt-40 pb-28">
      <div className="grid grid-cols-2 gap-11 mx-auto px-20">
        <div className="bg-gray-200">
          {product?.imagePath ? (
            <Image
              src={product?.imagePath}
              alt={"asd"}
              width={40000000}
              height={400000}
              className="size-72 mx-auto mt-10 object-contain"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae
            iusto adipisci voluptates architecto. Eligendi sit ut vero
            laudantium consequuntur incidunt sint omnis quidem temporibus.
            Accusantium et ab aspernatur ullam!iusto adipisci voluptates
            architecto. Eligendi sit ut vero laudantium consequuntur incidunt
            sint omnis quidem temporibus. Accusantium et ab aspernatur ullam!
          </p>

          <div className="flex items-center gap-4">
            {!isInCart && <Counter />}
            <button
              onClick={() => {
                if (isInCart) {
                  removeFromCart(product.id);
                } else {
                  addToCart(product);
                }
              }}
              className={` ${
                isInCart
                  ? "bg-[#DB4444] hover:bg-red-500"
                  : "bg-black hover:bg-gray-700"
              } px-6 py-1 text-white font-bold rounded-md`}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
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
      {/* <RelatedProducts /> */}
    </section>
  );
}
