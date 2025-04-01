"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };
    if (user) fetchItems();
  }, [user]);

  const handleAddItem = async (item) => {
    try {
      await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, item]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="flex gap-8 p-8 bg-gray-100 min-h-screen">
      {/* Left Section: NewItem and ItemList */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={setSelectedItemName} />
      </div>

      {/* Right Section: Meal Ideas */}
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}