function DestinationCard({ image, title, tours,description }) {
    return (
        <div className="relative group overflow-hidden rounded-md shadow-lg">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transform transition-all duration-500 ease-in-out group-hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded z-30">
                {tours} {tours === 1 ? "tour" : "tours"}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out z-10" />

            {/* Text Area */}
            <div className="absolute inset-0 flex flex-col items-center justify-end z-20 transition-all duration-500 ease-in-out group-hover:justify-center px-4 pb-4">

                {/* Title */}
                <h3 className="text-white  text-lg font-bold mb-2 text-center transform transition-all duration-500 ease-in-out  group-hover:-translate-y-4 ">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 hidden text-sm text-center group-hover:block transition-all duration-500 ease-in-out delay-100">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default DestinationCard;
