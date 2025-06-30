import React, { useState, useEffect } from "react";

function LoadMoreList() {
    const [items, setItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setLoading(false);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Posts</h2>

            {loading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : (
                <>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {items.slice(0, visibleCount).map((item) => (
                            <li key={item.id} className="p-4 bg-white rounded shadow">
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.body}</p>
                            </li>
                        ))}
                    </ul>

                    {visibleCount < items.length && (
                        <div className="flex justify-center">
                            <button
                                onClick={handleLoadMore}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default LoadMoreList;
