"use client";
import Link from "next/link";
import React from "react";
import SearchIcon from "../svgs/SearchIcon";
import CartIcon from "../svgs/CartIcon";
import { CartContext } from "@/app/layout";
import { useRouter } from "next/navigation";

const navs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Contact", href: "/contact" },
  { id: 3, name: "About", href: "/about" },
  { id: 4, name: "Sign Up", href: "/signIn" },
];

function Header({
  numberOfProductsInCart,
}: {
  numberOfProductsInCart: number;
}) {
  const router = useRouter();

  return (
    <header className="flex fixed top-0 left-0 right-0 z-20 bg-white items-center justify-around border-b-[1px] border-gray-300 py-4">
      <h1 className="font-bold text-xl">Exclusive</h1>
      <nav>
        {navs.map((nav) => {
          return (
            <Link key={nav.id} href={nav.href} className="mr-8 p-4">
              {nav.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-8">
        <div className="flex items-center bg-gray-100 pr-4 rounded-md">
          <input
            placeholder="what are you looking for?"
            className="bg-transparent p-3 border-none outline-none"
          />
          <SearchIcon />
        </div>
        {/* <Link href={"/cart"} className="h-10 flex">
          <CartIcon />
          <p className="bg-[#BD242A] rounded-full text-white self-start text-xs font-semibold size-5 -ml-3">
            {cartState.cart.length}
          </p>
        </Link> */}
        <button
          className="h-10 flex"
          onClick={() => {
            router.push("/cart");
          }}
        >
          <CartIcon />
          <p className="bg-[#BD242A] rounded-full text-white self-start text-xs font-semibold size-4 -ml-3">
            {numberOfProductsInCart}
          </p>
        </button>
      </div>
    </header>
  );
}

export default Header;
