function AboutUsSection() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        About Travel Tour
                    </h2>
                    <p className="text-gray-600 mb-4 text-lg">
                        Travel Tour is your trusted partner in unforgettable journeys. Whether you're looking to explore ancient wonders, modern cities, or remote natural beauty — we make your travel dreams a reality.
                    </p>
                    <p className="text-gray-600 text-base">
                        With a global network of partners, top-rated guides, and carefully curated itineraries, we ensure every traveler gets a seamless and inspiring experience. Let us handle the planning while you create the memories.
                    </p>
                </div>

                {/* Image Section */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80"
                        alt="About us"
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
}

export default AboutUsSection;
