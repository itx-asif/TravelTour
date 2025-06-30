import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import RNavbar from "./Rnavbar.jsx";

function FoodRecipeApp() {
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMeal = async (searchQuery = "a") => {
        setLoading(true);
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
            setMeals(res.data.meals || []);
        } catch (error) {
            setMeals([]);
        }
        setLoading(false);
    };

    // Load default recipes on first render
    useEffect(() => {
        searchMeal(); // defaults to 'a'
    }, []);

    return (
        <>
        <RNavbar/>
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">🍲 Find Your Favorite Recipe</h1>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by name (e.g., Pasta, Biryani)..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 w-full sm:w-2/3"
                    />
                    <button
                        onClick={() => searchMeal(query)}
                        className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
                    >
                        Search
                    </button>
                </div>

                {loading && <p className="text-center text-gray-600">Loading...</p>}

                {meals.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {meals.map((meal) => (
                            <RecipeCard key={meal.idMeal} meal={meal} />
                        ))}
                    </div>
                ) : (
                    !loading && (
                        <p className="text-center text-gray-500">No results. Try searching for something else.</p>
                    )
                )}
            </div>
        </div>
        </>
    );
}

export default FoodRecipeApp;
