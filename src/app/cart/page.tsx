import { CartItems } from "@/components/cart/CartItems";
import Link from "next/link";
import React from "react";

const cartItems: any[] = [
  {
    id: 1,
    image: "/assets/images/controller.png",
    name: "H1 Gamepad",
    price: "$603",
  },
  {
    id: 2,
    image: "/assets/images/controller.png",
    name: "H1 Gamepad",
    price: "$603",
  },
  {
    id: 3,
    image: "/assets/images/controller.png",
    name: "H1 Gamepad",
    price: "$603",
  },
  {
    id: 4,
    image: "/assets/images/controller.png",
    name: "H1 Gamepad",
    price: "$603",
  },
];

function Cart() {
  return (
    <section className="mt-32 mb-20 min-h-96">
      {/* <h1>Cart Item</h1> */}
      {cartItems.length === 0 ? (
        <p className="text-center pt-20 font-bold text-lg text-gray-600">
          No Cart Item
        </p>
      ) : (
        <div className="w-[70%] shadow-lg mx-auto">
          <CartItems cartItems={cartItems} />
        </div>
      )}
    </section>
  );
}

export default Cart;
