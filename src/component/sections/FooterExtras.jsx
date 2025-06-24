import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function FooterExtras() {
    return (
        <section className="bg-gray-100 px-4 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Browse Tour By Category */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Browse Tour By Category</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-orange-500">Outdoor Activities</a></li>
                        <li><a href="#" className="hover:text-orange-500">Cultural & Thematic Tours</a></li>
                        <li><a href="#" className="hover:text-orange-500">Family Friendly Tours</a></li>
                        <li><a href="#" className="hover:text-orange-500">Holiday & Seasonal Tours</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Subscribe to our Newsletter</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Get the latest updates and promotions directly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4 text-gray-600 text-lg mt-2">
                        <a href="#"><FaFacebookF className="hover:text-orange-500" /></a>
                        <a href="#"><FaTwitter className="hover:text-orange-500" /></a>
                        <a href="#"><FaInstagram className="hover:text-orange-500" /></a>
                        <a href="#"><FaYoutube className="hover:text-orange-500" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterExtras;
