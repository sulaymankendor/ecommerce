"use client";
import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../../types/cartTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EyeIcon } from "lucide-react";
import FiveStars from "../home/FiveStars";
import { useCart } from "../../../hooks/useCart";
import { CartContext } from "@/app/layout";
import { getCartFromStorage } from "@/lib/utils";

function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, removeFromCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const cartState = useContext(CartContext);
  const cartItems = getCartFromStorage();
  useEffect(() => {
    //@ts-ignore
    cartState?.setCart(cartItems);
  }, []);
  useEffect(() => {
    for (let index = 0; index < cartState.cart.length; index++) {
      if (cartState.cart[index].id === product.id) {
        setAddedToCart(true);
      } else {
        setAddedToCart(false);
      }
    }
  }, [cartState.cart]);

  const isInCart = cartState.cart.some((item) => item.id === product.id);

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
      <p className="text-gray-800 font-semibold text-sm ">{product.price}</p>
      <FiveStars rating={product.rating} />

      <button
        className={`${
          isInCart ? "bg-orange-500" : "bg-black"
        } transition-colors text-white w-full py-1 rounded-b-md mt-3 text-sm font-medium`}
        onClick={() => {
          if (isInCart) {
            removeFromCart(product.id);
          } else {
            addToCart(product);
          }
        }}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
