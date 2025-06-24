function TripCard({ image, title, bestseller, duration, reviews, averageStars, price, discountedPrice }) {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const half = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (half ? 1 : 0);

        return (
            <>
                {"★".repeat(fullStars)}
                {half && "½"}
                {"☆".repeat(emptyStars)}
            </>
        );
    };

    return (
        <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
                {/* Zoom effect on hover */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {bestseller && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Bestseller
                    </span>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">⏱️ {duration}</p>
                        <div className="flex items-center text-yellow-500 text-sm mb-1">
                            <span>{renderStars(averageStars)}</span>
                            <span className="ml-2 text-gray-600">({reviews} reviews)</span>
                        </div>
                    </div>

                    <div className="mt-2 text-right">
                        {discountedPrice ? (
                            <>
                                <p className="text-sm line-through text-gray-400">PKR {price}</p>
                                <p className="text-lg font-bold text-green-600">PKR {discountedPrice}</p>
                            </>
                        ) : (
                            <p className="text-lg font-bold text-gray-800">PKR {price}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripCard;
