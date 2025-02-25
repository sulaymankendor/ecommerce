import { useContext } from "react";
import { Product } from "../types/cartTypes";
import { CartContext } from "@/app/layout";
import Cookies from "js-cookie";

export const useCart = () => {
  const cartState = useContext(CartContext);

  const addToCart = (product: Product) => {
    //@ts-ignore
    cartState?.setCart((prevCart) => [...prevCart, product]);
    Cookies.set("cart", JSON.stringify([...cartState.cart, product]));
  };

  const removeFromCart = (id: string) => {
    //@ts-ignore
    const removeItem = cartState.cart.filter((product) => product.id !== id);
    cartState?.setCart(removeItem);
    Cookies.set("cart", JSON.stringify(removeItem));
  };

  return { addToCart, removeFromCart };
};
