"use client";
import { useState } from "react";
import NewItem from "./new-item"; 
import ItemList from "./item-list"; 
import itemsData from "./items.json"; 

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); 
  };

  return (
    <div >
      <h2 >Shopping List</h2>

      {/* New Item Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Items List */}
      <ItemList items={items} />
    </div>
  );
}
