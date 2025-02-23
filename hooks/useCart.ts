import { useContext } from "react";
import { Product } from "../types/cartTypes";
import { CartContext } from "@/app/layout";

export const useCart = () => {
  const cartState = useContext(CartContext);

  const addToCart = (product: Product) => {
    //@ts-ignore
    cartState?.setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: string) => {
    //@ts-ignore
    cartState?.setCart((prevCart) =>
      prevCart.filter((product) => product.id !== id)
    );
  };

  return { addToCart, removeFromCart };
};
