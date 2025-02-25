"use client";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../types/cartTypes";

export const CartContext = createContext<{
  cart: Product[];
  setCart?: Dispatch<SetStateAction<Product[] | []>>;
}>({
  cart: [],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<[] | Product[]>([]);
  return (
    <html lang="en">
      <body>
        <Header numberOfProductsInCart={cart.length} />
        <main>
          <CartContext.Provider value={{ cart, setCart }}>
            {children}
          </CartContext.Provider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
