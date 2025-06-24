import destinations from "../../Data/destination.js";
import DestinationCard from "../UI/DestinationCard.jsx";

function DestinationSection({ columns = 3 }) {
    // Map column count to responsive classes
    const colClass = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
    }[columns] || "grid-cols-3";

    // Safe col-span map for Tailwind
    const colSpanMap = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
    };

    return (
        <section className="px-4 py-12 bg-white">
            <div className="px-4 mx-auto max-w-6xl py-4">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Popular Destinations</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Explore our top-rated travel spots loved by explorers worldwide.
                    </p>
                    <a
                        href="#"
                        className="text-sm text-orange-500 font-semibold inline-block mt-2 hover:underline"
                    >
                        View All Destinations →
                    </a>
                </div>

                {/* Responsive Grid */}
                <div className={`grid grid-cols-1 md:${colClass} gap-6`}>
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className={`${colSpanMap[dest.size] || "col-span-1"}`}
                        >
                            <DestinationCard
                                image={dest.image}
                                title={dest.title}
                                tours={dest.tours}
                                description={dest.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DestinationSection;
