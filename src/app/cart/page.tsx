"use client";
import { CartItems } from "@/components/cart/CartItems";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../layout";
import { getCartFromStorage } from "@/lib/utils";

function Cart() {
  const cartState = useContext(CartContext);
  const cartItems = getCartFromStorage();
  useEffect(() => {
    //@ts-ignore
    cartState?.setCart(cartItems);
  }, []);

  return (
    <section className="mt-32 mb-20 min-h-96">
      {/* <h1>Cart Item</h1> */}
      {cartState.cart?.length === 0 ? (
        <p className="text-center pt-20 font-bold text-lg text-gray-600">
          No Cart Item
        </p>
      ) : (
        <div className="w-[70%] shadow-lg mx-auto">
          <CartItems cartItems={cartState?.cart} />
        </div>
      )}
    </section>
  );
}

export default Cart;
