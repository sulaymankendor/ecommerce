import Link from "next/link";
import React from "react";
import SearchIcon from "../svgs/SearchIcon";
import CartIcon from "../svgs/CartIcon";

const navs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Contact", href: "/contact" },
  { id: 3, name: "About", href: "/about" },
  { id: 4, name: "Sign Up", href: "/signIn" },
];

function Header() {
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
        <button>
          <CartIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
