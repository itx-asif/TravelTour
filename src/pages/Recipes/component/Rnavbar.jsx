import React from "react";
import { Link, useLocation } from "react-router-dom";

function RNavbar() {
    const location = useLocation();
    const linkClass = (path) =>
        `px-4 py-2 rounded-md transition ${
            location.pathname === path
                ? "bg-orange-600 text-white"
                : "text-gray-700 hover:bg-orange-100"
        }`;

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-600">🍽️ Foodie</h1>
                <div className="space-x-4">
                    <Link to="/food" className={linkClass("/food")}>
                        Search
                    </Link>
                    <Link to="/food/favorite" className={linkClass("/food/favorite")}>
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default RNavbar;
