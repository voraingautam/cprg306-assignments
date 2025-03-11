"use client";

import { useState } from "react";
import { Item } from "./item";

import itemsData from "./items.json"; // Import items from JSON file

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // State for sorting criteria

  // Sort items based on sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sorting Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          className={`px-4 py-2 border rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 border rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Render sorted items */}
      <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.id} className="p-4 bg-white text-black rounded-lg shadow">
          <strong>{item.name}</strong> - {item.quantity} ({item.category})
        </li>
      ))}
    </ul>
      
    </div>
  );
}
