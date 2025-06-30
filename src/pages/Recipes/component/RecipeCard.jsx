import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function RecipeCard({ meal }) {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorited(favorites.some((fav) => fav.idMeal === meal.idMeal));
    }, [meal.idMeal]);

    const toggleFavorite = (e) => {
        e.preventDefault(); // Prevent link navigation
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorited) {
            const updated = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
            localStorage.setItem("favorites", JSON.stringify(updated));
            setIsFavorited(false);
        } else {
            favorites.push(meal);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorited(true);
        }
    };

    return (
        <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                    {meal.strMeal}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    {meal.strArea} • {meal.strCategory}
                </p>

                <div className="flex justify-between items-center">
                    <Link
                        to={`/food/recipe/${meal.idMeal}`}
                        className="text-sm bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
                    >
                        View Details
                    </Link>

                    <button
                        onClick={toggleFavorite}
                        className="text-xl p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                    >
                        {isFavorited ? (
                            <FaHeart className="text-red-500" />
                        ) : (
                            <FaRegHeart className="text-gray-500" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
