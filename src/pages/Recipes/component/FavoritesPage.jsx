import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard"; // Reuse your existing card
import RNavbar from "./Rnavbar.jsx"; // Optional, to keep nav visible

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    }, []);

    return (
        <>
            <RNavbar />

            <div className="min-h-screen bg-gray-100 py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                        ❤️ Your Favorite Recipes
                    </h1>

                    {favorites.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {favorites.map((meal) => (
                                <RecipeCard key={meal.idMeal} meal={meal} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">
                            You haven't added any favorites yet.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default FavoritesPage;
