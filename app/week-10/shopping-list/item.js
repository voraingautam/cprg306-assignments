export function Item({ name, quantity, category, onSelect }) {
  // Clean item name to remove emojis and extra details
  const cleanName = name.split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");

  return (
    <li
      className="p-6 bg-blue-100 border-2 cursor-pointer hover:bg-blue-200"
      onClick={() => onSelect(cleanName)}
    >
      <p className="text-xl font-extrabold text-gray-500 drop-shadow-md">
        {name}
      </p>
      <p className="text-lg text-black-400 font-medium">Quantity: {quantity}</p>
      <p className="text-md text-blue-400 italic underline">
        Category: {category}
      </p>
    </li>
  );
}
