"use client";
import { useState } from "react";
import { Item } from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
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
          className={`px-4 py-2 border rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Render sorted items */}
      <ul className="mt-6 space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}
