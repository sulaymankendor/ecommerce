import { createContext, useEffect, useState } from "react";
import { Product } from "../types/cartTypes";

export const useCart = () => {
  const [cart, setCart] = useState<[] | Product[]>([]);

  const addToCart = (product: Product) => {
    console.log(product);

    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return { addToCart, removeFromCart, cart };
};
