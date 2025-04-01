"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const {user} = useUserAuth();

  const handleAddItem = (item) => {
    console.log(item);
    addItem(user.uid, item)
      .then((response) => {
        setItems([...items, item]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Handle item selection for meal ideas
  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };
  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
    };
  useEffect(() => {
    loadItems();
    }, [user]);
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
