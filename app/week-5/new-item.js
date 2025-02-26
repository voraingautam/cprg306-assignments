"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState("produce");
 
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const item = {name, category};
    console.log(item);
   alert(`Item Added:\nName: ${item.name}\nCategory: ${item.category}\nQuantity: ${item.quantity}`);
    setName('');
    setCategory("produce");
    setQuantity( 1);
  }

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
      <form onSubmit={handleSubmit} >
        <label className="block" > Name: </label>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border p-2 rounded mb-4"
      />
      <label className="block mb-2">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      <h2 className="text- g font-semibold text-black">Select Quantity</h2>
      <div className="flex items-center space-x-4">
        <button
        type="button"
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
        type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 20 ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
        
      </div>
      <button type="submit" className="bg-red-500 text-white rounded w-full mt-4 p-3">
          Add Item
        </button>
      </form>
    </div>
    
  );
};