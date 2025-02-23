import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCartFromStorage: any = () => {
  try {
    const cartCookie = Cookies.get("cart"); // Get cookie value (string)
    return cartCookie ? JSON.parse(cartCookie) : []; // Parse only if it exists
  } catch (error) {
    console.error("Error parsing cart cookie:", error);
    return []; // Return empty array on error
  }
};
