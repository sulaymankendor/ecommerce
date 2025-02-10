"use client";
import React from "react";
import { MinusIcon, Plus } from "lucide-react";

function Counter({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center border-[1px] rounded">
      <button
        onClick={() => {
          setQuantity((prevQuantity) => --prevQuantity);
        }}
        className="p-2 border-r-[1px]"
      >
        <MinusIcon size={18} />
      </button>
      <p className="text-center w-16">{quantity}</p>
      <button
        onClick={() => {
          setQuantity((prevQuantity) => ++prevQuantity);
        }}
        className="p-2 border-l-[1px]"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}

export default Counter;
