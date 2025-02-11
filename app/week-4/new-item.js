"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
      <h2 className="text-lg font-semibold text-black">Select Quantity</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 1 ? "bg-gray-300" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          -
        </button>
        <span className="text-xl font-bold text-black">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 20 ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}