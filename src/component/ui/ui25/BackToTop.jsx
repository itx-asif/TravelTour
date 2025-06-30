import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {scrollY !== 0 && (
                <button
                    className="fixed bottom-6 right-6 bg-orange-600 text-white rounded-full p-3 shadow-lg hover:bg-orange-700 transition"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Back to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    );
}

export default BackToTopButton;
