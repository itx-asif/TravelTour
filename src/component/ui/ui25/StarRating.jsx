import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ totalStars = 10 }) {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(null);

    return (
        <div className="flex space-x-2 justify-center items-center py-10" >
            {[...Array(totalStars)].map((_, index) => {
                const current = index + 1;
                return (
                    <button
                        key={current}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setRating(current)}
                        onMouseEnter={() => setHovered(current)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <FaStar
                            size={32}
                            className={`cursor-pointer transition-colors duration-200 ${
                                current <= (hovered || rating) ? "text-yellow-400" : "text-gray-300"
                            }`}
                        />
                    </button>
                );
            })}
        </div>
    );
}

export default StarRating;
