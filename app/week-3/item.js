export function Item({ name, quantity, category }) {
    return (
      <li className="p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg rounded-xl border-2 border-pink-800 transform hover:scale-105 transition-transform">
        <p className="text-xl font-extrabold text-white drop-shadow-md">{name}</p>
        <p className="text-lg text-yellow-200 font-medium">Quantity: {quantity}</p>
        <p className="text-md text-blue-300 italic underline">Category: {category}</p>
      </li>
    );
  }