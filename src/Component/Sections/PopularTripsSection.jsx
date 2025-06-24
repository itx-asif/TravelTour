import TripCard from "../UI/TripCard";
import tripData from "../../Data/trips";
function PopularTripsSection() {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Popular Trips</h2>
                    <p className="text-sm text-gray-500 mt-2">Top-rated travel experiences curated for you</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tripData.slice(0,3).map((trip, index) => (
                        <TripCard key={index} {...trip} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularTripsSection;
