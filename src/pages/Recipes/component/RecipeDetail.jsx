import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import RNavbar from "./Rnavbar.jsx";

function RecipeDetail() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => setMeal(res.data.meals[0]));
    }, [id]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorited(favorites.some((fav) => fav.idMeal === id));
    }, [id]);

    const handleAddToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (!favorites.some((fav) => fav.idMeal === meal.idMeal)) {
            favorites.push(meal);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorited(true);
        }
    };

    if (!meal)
        return <p className="text-center mt-20 text-gray-500">Loading recipe...</p>;

    return (
        <>
        <RNavbar/>
        <div className="mx-auto px-4 py-10 bg-gray-50 min-h-screen">
            <Link
                to="/food"
                className="inline-block mb-6 text-orange-600 hover:underline hover:text-orange-700"
            >
                ← Back to search
            </Link>

            <div className="mb-4 flex justify-between gap-5 items-center">
               <div>
                   <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
                   <p className="text-gray-500 mb-2">
                       {meal.strArea} • {meal.strCategory}
                   </p>
               </div>
                <button
                    onClick={handleAddToFavorites}
                    disabled={isFavorited}
                    className={`px-4 py-2 rounded text-white ${
                        isFavorited
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-orange-600 hover:bg-orange-700"
                    } transition`}
                >
                    {isFavorited ? "Added to Favorites" : "Add to Favorites"}
                </button>
            </div>

            <div className="bg-white rounded-lg shadow flex-wrap justify-center md:justify-start md:flex-nowrap gap-8 flex p-6">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="h-full max-w-sm object-cover rounded mb-4"
                />

                <div className="grow">
                    <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        {Array.from({ length: 20 }, (_, i) => i + 1)
                            .map((i) => ({
                                ingredient: meal[`strIngredient${i}`],
                                measure: meal[`strMeasure${i}`],
                            }))
                            .filter((item) => item.ingredient && item.ingredient.trim())
                            .map((item, index) => (
                                <li key={index}>
                                    {item.ingredient} - {item.measure}
                                </li>
                            ))}
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                    <p className="whitespace-pre-wrap text-gray-800">
                        {meal.strInstructions}
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default RecipeDetail;
