"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Fetch meal ideas from the API
  async function fetchMealIdeas(ingredient) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals || [];
  }

  // Load meal ideas when ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      if (ingredient) {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      } else {
        setMeals([]);
      }
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-700">Meal Ideas</h3>
      <ul className="grid grid-cols-2 gap-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-4 bg-white rounded-lg shadow">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-lg font-semibold text-gray-700">
              {meal.strMeal}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
