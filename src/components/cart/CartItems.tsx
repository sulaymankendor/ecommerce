"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Counter from "../Counter";
import { useState } from "react";

export function CartItems({ cartItems }: { cartItems: any[] }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-white">
          <TableHead className="w-[30%] pl-10">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-right pr-10">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((cartItem) => (
          <TableRow key={cartItem.id} className="hover:bg-white">
            <TableCell className="flex items-center font-medium pl-10">
              <Image
                src={cartItem.imagePath}
                alt={cartItem.name}
                width={40000000}
                height={400000}
                className="size-12 rounded-full object-contain self-start"
              />
              <p>{cartItem.name}</p>
            </TableCell>
            <TableCell className="w-80">{cartItem.price}</TableCell>
            <TableCell className="w-20">
              <Counter quantity={quantity} setQuantity={setQuantity} />
            </TableCell>
            <TableCell className="text-right pr-10">D900</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-white hover:bg-white">
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className="flex border-[1px] border-gray-400 flex-col px-6">
            <h1 className="font-bold text-lg mb-4">Cart Total</h1>
            <div className="w-full">
              <div className="flex items-center justify-between pb-3">
                <p className="font-bold">Subtotal</p>
                <p>$2,500.00</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-4">
                <p className="font-bold">Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex items-center justify-between mt-3 mb-9">
                <p className="font-bold">Total</p>
                <p>$2,500.00</p>
              </div>
              <button className="bg-[#DB4444] text-white p-3 m-auto w-full rounded-sm font-bold">
                Proceed To Checkout
              </button>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
