import { useState } from "react";
import TripCard from "../UI/TripCard";
import tripData from "../../Data/trips";

const itemsPerPage = 9;

function TripSection() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(tripData.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentTrips = tripData.slice(startIdx, startIdx + itemsPerPage);

    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTrips.map((trip, idx) => (
                        <TripCard
                            key={idx}
                            image={trip.image}
                            title={trip.title}
                            bestseller={trip.bestseller}
                            duration={trip.duration}
                            reviews={trip.reviews}
                            averageStars={trip.averageStars}
                            price={trip.price}
                            discountedPrice={trip.discountedPrice}
                        />
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-end mt-10 space-x-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 border rounded-md text-sm font-medium transition ${
                                currentPage === i + 1
                                    ? "bg-red-500 text-white border-red-500"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next button */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-1 rounded-md border text-sm font-medium transition ${
                            currentPage === totalPages
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TripSection;
