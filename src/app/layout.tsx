"use client";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Product } from "../../types/cartTypes";
import Cookies from "js-cookie";

export const CartContext = createContext<{
  cart: Product[];
  setCart?: Dispatch<SetStateAction<Product[] | []>>;
  numberOfItemsInCart: number;
}>({
  cart: [],
  numberOfItemsInCart: 0,
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<[] | Product[]>([]);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <CartContext.Provider
            value={{ cart, setCart, numberOfItemsInCart: cart.length }}
          >
            {children}
          </CartContext.Provider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
