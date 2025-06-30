import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const features = [
        {
            path: "/project",
            label: "Mini Projects",
            icon: "💡",
            description: "Explore interactive UI components and tools.",
        },
        {
            path: "/weather",
            label: "Weather App",
            icon: "🌤",
            description: "Check live weather of any city.",
        },
        {
            path: "/food",
            label: "Food Recipe App",
            icon: "🍽",
            description: "Find meals, view details, and save favorites.",
        },
        {
            path: "/travel",
            label: "Travel Tour",
            icon: "🧳",
            description: "Plan and explore amazing travel destinations.",
        },
        {
            path: "/expanse",
            label: "Expense Tracker",
            icon: "💰",
            description: "Track your income and expenses in real time.",
        },
    ];


    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-4xl font-extrabold text-orange-700 mb-12 text-center drop-shadow-sm">
                🚀 Welcome! Where would you like to go today?
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-5xl w-full">
                {features.map(({ path, label, icon, description }) => (
                    <Link
                        to={path}
                        key={path}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border border-gray-200 text-center"
                    >
                        <div className="text-5xl mb-3">{icon}</div>
                        <h2 className="text-xl font-bold text-gray-800">{label}</h2>
                        <p className="text-gray-600 text-sm mt-1">{description}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;
