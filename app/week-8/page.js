"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Handle new item addition
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Handle item selection for meal ideas
  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <div className="flex gap-8 p-8 bg-gray-100 min-h-screen">
      {/* Left Section: NewItem and ItemList */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right Section: Meal Ideas */}
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
