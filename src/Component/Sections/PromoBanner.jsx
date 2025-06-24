function PromoBanner() {
    return (
        <section className="bg-white px-4 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Side */}
                <div className="space-y-4">
                    <h3 className="text-sm text-gray-500 uppercase font-semibold">Travel Tour</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Enjoy Summer Deals <br />
                        <span className="text-orange-500">Up to 40% Discount!</span>
                    </h2>
                    <p className="text-sm text-gray-500 italic">*Terms applied</p>

                    <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Right Side */}
                <div>
                    <img
                        src="https://classroomclipart.com/image/static7/preview2/two-camels-walking-near-the-great-pyramids-of-egypt-bright-sun-in-sky-55812.jpg"
                        alt="Egypt Travel Offer"
                        className="rounded-lg shadow-lg w-full object-fit h-80 md:h-96"
                    />
                </div>
            </div>
        </section>
    );
}

export default PromoBanner;
